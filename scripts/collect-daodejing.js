#!/usr/bin/env node
/**
 * 노자 <도덕경> 원문해석 — 네이버 블로그 본문 수집기
 *
 * 네이버 블로그(모바일) 게시글의 본문 블록(se-text-paragraph)을
 * "장 번호 → 구절(한자 / 음.reading / 한국어 해석)" 구조로 파싱해
 * 이 프로젝트의 포스트(front matter + 본문 스타일)에 맞는
 * Markdown 파일을 만든다.
 *
 * 의존성: 없음 (Node 18+ 내장 fetch 사용)
 *
 * 사용법:
 *   node scripts/collect-daodejing.js                     # 기본값으로 수집
 *   node scripts/collect-daodejing.js --out a.md            # 출력 경로 변경
 *   node scripts/collect-daodejing.js --date 2026-01-01         # 포스트 날짜 변경
 *   node scripts/collect-daodejing.js --url <게시글 URL>       # 다른 게시글 수집
 *   node scripts/collect-daodejing.js --json                # JSON 도 함께 저장
 *   node scripts/collect-daodejing.js --file ./src.html      # 로컬 HTML로 파싱 (네트워크 없이)
 */

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// 설정
// ---------------------------------------------------------------------------

const CONFIG = {
  // 수집 원본(네이버 모바일 블로그 게시글)
  url: "https://m.blog.naver.com/chamnet21/221742719382",

  // 모바일 블로그 본문(se-text-paragraph)이 담긴 컨테이너
  bodyContainer: '<div class="se-main-container">',

  // 포스트 파일 위치/이름 (프로젝트 포스트 네이밍 규칙: YYYY-MM-DD-slug.md)
  out: path.join("_posts", "2019-12-19-노자-도덕경-원문해석.md"),

  // 원문 게시글 게재 날짜를 포스트 날짜로 사용 (필요 시 --date로 변경)
  date: "2019-12-19",

  // 포스트 메타 (프로젝트 카테고리/소분류)
  title: "노자 도덕경 원문해석 (1장~81장)",
  categories: "philosophy",
  philosophy_subcategory: "metaphysics",

  // 검증 기준: 도덕경은 81장
  expectedChapters: 81,
};

// ---------------------------------------------------------------------------
// 작은 유틸
// ---------------------------------------------------------------------------

/** HTML 실체(&amp; &lt; &#8217; &#xFF01; …)를 문자로 환원한다. */
function decodeEntities(s) {
  const named = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    ldquo: "“",
    rdquo: "”",
    lsquo: "’",
    rsquo: "’",
    ndash: "–",
    mdash: "—",
    hellip: "…",
  };
  return s
    .replace(/&#([0-9]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCodePoint(parseInt(n, 16)),
    )
    .replace(/&([a-z]+);/gi, (m, name) => named[name.toLowerCase()] ?? m);
}

/** 태그를 걷어내고 실체를 풀어, 공백을 정리한 순수 텍스트를 반환한다. */
function cleanText(s) {
  let t = s.replace(/<[^>]+>/g, ""); // 태그 제거
  t = decodeEntities(t); // 실체 환원
  // 널공백/영역자/연결자/방향성을 공백 또는 빈 문자로 정리
  t = t
    .replace(/[\u00a0\u2007\u202f]/g, " ")
    .replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, "");
  t = t.replace(/[ \t]+/g, " ").trim();
  return t;
}

// ---------------------------------------------------------------------------
// 1) HTML → 본문 문단 텍스트 배열
// ---------------------------------------------------------------------------

/** 게시글 HTML에서 본문 문단(se-text-paragraph)의 순수 텍스트 배열을 뺀다. */
function extractParagraphs(html) {
  // 본문 컨테이너부터 뒤로만 보기 (제목 블록 등을 제외)
  let anchor = html.indexOf(CONFIG.bodyContainer);
  if (anchor === -1) anchor = html.indexOf("se-main-container");
  if (anchor === -1)
    throw new Error("본문 컨테이너를 찾지 못했습니다: " + CONFIG.bodyContainer);
  const windowHtml = html.slice(anchor);

  const paras = [];
  const re = /<p class="se-text-paragraph[^"]*"[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(windowHtml)) !== null) {
    const t = cleanText(m[1]);
    if (t) paras.push(t);
  }
  return paras;
}

// ---------------------------------------------------------------------------
// 2) 문단 배열 → 장 / 구절 구조
// ---------------------------------------------------------------------------

// 장 마커:  "1."  "81."  (숫자 + 마침표, 뒤 공백 허용)
const RE_CHAPTER = /^(\d{1,2})[.．]\s*$/;
// 구절:     "한자(reading) : 한국어 해석"
const RE_VERSE = /^([^（(\s][^（(]*?)\(([^)]*)\)\s*[:：]\s*(\S.*)$/;

/**
 * 본문 문단 배열을 { chapters, unmatched } 로 구조화한다.
 * chapters = [ { number, lines: [ { hanja, roman, korean } ] } ]
 */
function parseChapters(paragraphTexts) {
  const chapters = [];
  let cur = null;
  const unmatched = [];

  for (const t of paragraphTexts) {
    const mc = RE_CHAPTER.exec(t);
    if (mc) {
      cur = { number: parseInt(mc[1], 10), lines: [] };
      chapters.push(cur);
      continue;
    }
    const mv = RE_VERSE.exec(t);
    if (mv && cur) {
      cur.lines.push({
        hanja: mv[1].trim(),
        roman: mv[2].trim(),
        korean: mv[3].trim(),
      });
    } else {
      unmatched.push(t);
    }
  }
  return { chapters, unmatched };
}

// ---------------------------------------------------------------------------
// 3) 검증
// ---------------------------------------------------------------------------

/** 장 수가 기대값(81)이고 1..N 연속인지, 각 구절 필드가 비어 있지 않은지 확인한다. */
function validate(chapters, expected) {
  const issues = [];
  if (chapters.length !== expected) {
    issues.push(`장 수가 ${expected}장이 아닌 ${chapters.length}장입니다.`);
  }
  chapters.forEach((c, i) => {
    if (c.number !== i + 1) {
      issues.push(`${i + 1}번째 장의 번호가 ${c.number}로 순서와 다릅니다.`);
    }
    if (c.lines.length === 0) {
      issues.push(`${c.number}장에 구절이 없습니다.`);
    }
    c.lines.forEach((ln, j) => {
      if (!ln.hanja || !ln.roman || !ln.korean) {
        issues.push(
          `${c.number}장 ${j + 1}번째 구절에 비어 있는 필드가 있습니다.`,
        );
      }
    });
  });
  return { ok: issues.length === 0, issues };
}

// ---------------------------------------------------------------------------
// 4) 구조 → 포스트 Markdown
// ---------------------------------------------------------------------------

/** 한 구절을 프로젝트 스타일로 한 줄로 그린다.  **한자** (reading) — 해석 */
function renderVerse(ln) {
  return `**${ln.hanja}** (${ln.roman}) — ${ln.korean}`;
}

/** 구조를 프로젝트 포스트(front matter + 본문) Markdown 문자열로 그린다. */
function renderMarkdown(chapters, opts) {
  const { title, date, categories, philosophy_subcategory } = opts;
  const lines = [];

  // front matter
  lines.push("---");
  lines.push("layout: post");
  lines.push(`title: "${title}"`);
  lines.push(`${date} 00:00:00 +0900`.replace(/^/, "date: "));
  lines.push(`categories: ${categories}`);
  if (philosophy_subcategory)
    lines.push(`philosophy_subcategory: ${philosophy_subcategory}`);
  lines.push("---");
  lines.push("");

  // 본문: 장별 헤딩 + 각 구절을 독립 단락(공백줄 분리)으로
  for (const c of chapters) {
    lines.push(`## 제${c.number}장`);
    lines.push("");
    for (const ln of c.lines) {
      lines.push(renderVerse(ln));
      lines.push("");
    }
  }

  // 끝의 연속 빈 줄을 정리하고,文末에 개행 하나
  let md = lines.join("\n");
  md = md.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  return md;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

/** node 스크립트 --flag 값 / --bool 형태 인자를 간단한 객체로 뺀다. */
function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        args[key] = next;
        i++;
      } else {
        args[key] = true;
      }
    } else {
      args._.push(a);
    }
  }
  return args;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const url = args.url || CONFIG.url;
  const out = args.out
    ? path.resolve(args.out)
    : path.resolve(process.cwd(), CONFIG.out);
  const date = args.date || CONFIG.date;
  const writeJson = Boolean(args.json);

  // 1) HTML 가져오기 (로컬 파일 지정 시 네트워크 없이)
  let html;
  if (args.file) {
    const f = path.resolve(args.file);
    html = fs.readFileSync(f, "utf8");
    console.log(`· 로컬 HTML 로드: ${f}`);
  } else {
    const res = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) " +
          "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        accept: "text/html,application/xhtml+xml",
      },
    });
    if (!res.ok)
      throw new Error(`HTTP ${res.status} ${res.statusText} — ${url}`);
    html = await res.text();
  }

  // 2) 본문 문단 추출
  const paragraphs = extractParagraphs(html);
  console.log(`· 본문 문단(비어 있지 않은) ${paragraphs.length}개 추출`);

  // 3) 장/구절 구조화
  const { chapters, unmatched } = parseChapters(paragraphs);
  const totalVerses = chapters.reduce((n, c) => n + c.lines.length, 0);
  console.log(`· ${chapters.length}장, ${totalVerses}개 구절 구조화`);

  // 4) 검증
  const { ok, issues } = validate(chapters, CONFIG.expectedChapters);
  for (const msg of issues) console.warn(`⚠ ${msg}`);
  if (unmatched.length) {
    console.warn(
      `⚠ 구절/장 마커로 매치되지 않은 문단 ${unmatched.length}개 (첫 5개):`,
    );
    unmatched
      .slice(0, 5)
      .forEach((t) =>
        console.warn(`    · ${t.slice(0, 60)}${t.length > 60 ? "…" : ""}`),
      );
  }

  // 5) Markdown 렌더 → 파일 저장
  const md = renderMarkdown(chapters, {
    title: CONFIG.title,
    date,
    categories: CONFIG.categories,
    philosophy_subcategory: CONFIG.philosophy_subcategory,
  });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, md, "utf8");
  console.log(`· 포스트 Markdown 저장: ${out}`);

  // 6) (선택) JSON 저장
  if (writeJson) {
    const jsonPath = out.replace(/\.md$/i, ".json");
    fs.writeFileSync(
      jsonPath,
      JSON.stringify({ title: CONFIG.title, chapters }, null, 2),
      "utf8",
    );
    console.log(`· JSON 저장: ${jsonPath}`);
  }

  console.log(
    ok ? "✓ 수집 완료" : "⚠ 수집은 완료됐지만 검증 이슈가 있습니다 (위 참조)",
  );
  if (!ok) process.exitCode = 1;
}

// 실행 (node scripts/collect-daodejing.js) vs import (테스트용)
if (require.main === module) {
  main().catch((e) => {
    console.error("✗", e.message);
    process.exit(1);
  });
}

module.exports = {
  CONFIG,
  decodeEntities,
  cleanText,
  extractParagraphs,
  parseChapters,
  validate,
  renderMarkdown,
  renderVerse,
  parseArgs,
  main,
};
