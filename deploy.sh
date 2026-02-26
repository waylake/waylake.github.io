#!/bin/bash

# Jekyll 사이트 빌드 및 GitHub Pages 배포 스크립트
# 사용법: ./deploy.sh "커밋 메시지"

# 1. Jekyll 사이트 빌드
 echo "Jekyll 사이트 빌드 중..."
 bundle exec jekyll build

# 2. 빌드된 파일 Git에 추가
 echo "빌드된 파일 Git에 추가 중..."
 git add .

# 3. 커밋
 if [ -z "$1" ]; then
   COMMIT_MESSAGE="Update site: $(date +'%Y-%m-%d %H:%M:%S')"
 else
   COMMIT_MESSAGE="$1"
 fi

echo "커밋 메시지: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

# 4. GitHub에 푸시
echo "GitHub에 푸시 중..."
git push origin main

echo "배포 완료! 몇 분 후 https://waylake.github.io 에서 확인 가능합니다."