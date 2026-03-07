---
layout: post
title: "The Metric of Visibility: When Good Engineers Die Alone"
date: 2026-03-05 00:00:00 +0900
categories: psychology
author: waylake
tags: [engineering, workplace, career, visibility]
lang: en
---

The team is four people. Three engineers and one manager. All four are doing difficult work. All four are solving problems that require skill and judgment. But by the end of the year, only two will still be employed here.

> The mathematics of career advancement in engineering is not about capability — it is about the metric of visibility.

This is not a novel observation. This is a structural fact that has been documented and lamented by some of the most thoughtful minds in our field.

---

## The Inequality of Expression

Two of the three engineers cannot tell the story of what they do. The work is too complex, too interconnected, too messy for a bullet point in a quarterly review. They spend their days wrestling with legacy systems, debugging race conditions, navigating technical constraints that would make a sane person weep.

> But when asked what they accomplished, they shrug. "Fixed some bugs," they say. "Kept the system running."

This is the disaster prevention problem that Dan Luu has documented in his analysis of engineering culture:

> "people get promoted for heroism and putting out fires, not for preventing fires; and people get promoted for shipping features, not for doing critical maintenance work and bug fixing."

The engineers who quietly prevent failures are invisible. Their competence is exactly what makes them unseen.

The third engineer — let's call him the articulator — has a different relationship with work. He builds systems that are visible. Architecture diagrams. Documentation. Frameworks. Abstractions. When he finishes something, there is a clear narrative of achievement. "Designed scalable event system," goes the performance review. "Built reusable abstraction layer." Even when the work is unnecessary, even when it adds complexity and cost, it is visible.

The manager sees three engineers. One tells a story of architecture and impact. Two tell a story of maintenance and drudgery. The manager is not malicious. The manager is simply busy. The manager looks at the narratives and makes promotions accordingly. The articulator advances. The others stagnate. The manager moves on, thinking about urgent business needs, never suspecting that the system is designed to reward presentation over substance.

This pattern is so endemic that it has become institutionalized in our hiring practices. On Hacker News, in a discussion about why simple solutions do not get promoted, one interviewer recounted receiving a candidate who suggested using Google Sheets instead of building a custom system to address a spreadsheet problem. The interviewer called this "a terrible SWE interview answer" — even though it was the correct business solution.

Another story from the same thread describes a Stripe interview where a candidate answered a system design question by saying "I'd put it all in Postgres."

> The candidate was technically correct but failed the interview, forcing the company's CEO to intervene and schedule a second interview.

One commenter summarized the lesson:

> "acting smart gets you paid, not being smart."

---

## The Death of Silent Competence

The two engineers who cannot tell the story do not lack competence. They possess a different kind of expertise — the expertise of doing difficult work without requiring validation. They keep the lights on. They prevent disasters. They solve the problems that only become visible when they are not solved.

But in a world of quarterly reviews and promotion packets, prevention is invisible. Maintenance is invisible. The art of keeping complex systems running without drama is a career-limiting move. The engineer who quietly prevents five outages this year is "doing their job." The engineer who causes one outage but architects a flashy replacement system is "demonstrating leadership."

> The articulator advances not because he is better. He advances because he has learned the true skill of modern engineering: the skill of making work visible. The ability to design for promotion, not for the problem. The ability to create complexities that can be documented. The ability to build CV-driven development.

Rich Hickey, the creator of Clojure, has spent years distinguishing between what is simple and what is easy. Simple means "one twist" — separately woven threads. Easy means "near the hand" — familiar, within reach. The tragedy is that our industry has confused these two. We build systems that are easy to explain in promotion packets rather than systems that are simple in architecture.

As Hickey notes:

> "Simple is objective, it can be probed," but "Easy is a relative term. Something may be easy for someone and difficult for someone else."

Our promotion systems measure what is easy to understand for managers, not what is simple for systems.

---

## The Structural Nightmare

This is not about individual failure. This is about structural design. The system of career advancement in engineering is essentially a bureaucracy of visibility. It measures what can be measured, documents what can be documented, rewards what can be narrated.

This is the normalization of deviance that Dan Luu has identified across the industry — processes that are obviously broken become normalized because "it affects everyone equally." When the build is broken multiple times per day, the response is not to fix the process but to argue that "since the only thing that mattered was my stack ranked productivity, so I shouldn't care that it impacts the entire team."

> The system selects for those who can navigate the dysfunction, not those who fix it.

But much of engineering work cannot be measured, documented, or narrated. The difficult problems often require only a small, clever solution. The right architecture may be the simple one that never needs explanation. The most valuable work may leave no trace.

Two engineers will leave. Not because they are bad at engineering. They will leave because the system has no category for their success. The manager will not notice until after they are gone. The articulator will receive a promotion "for outstanding contribution." The system will have worked exactly as designed.

This is not a theoretical concern. This is what happens when you scale the dysfunction described by countless engineers who have witnessed the promotion of complexity over competence. As one Hacker News commentator observed about the problem:

> "There is a difference between being smart and acting smart. Acting smart gets you paid, not being smart, and that's like, not ideal."

When another commented that "nobody gets promoted for simplicity," they did not discover this — they simply observed the selection function that has been operating in our industry for decades.

What we have created is a profession that selects for visibility over brilliance. We advance the articulate and discard the competent. We reward the creation of unnecessary complexity and punish the quiet maintenance of essential systems. We have built a career ladder that is essentially a litmus test for narcissism:

> Can you make yourself look indispensable? Can you create problems that only you can solve? Can you manufacture crises that only you can heroically address?

The managers who enable this are not villains. They are simply the products of the same selection function. The manager cannot see that the articulator's complex systems are unnecessary because the manager's own career advanced through similar complexity-creation. The VP who praises the articulator for "architectural thinking" was herself promoted for creating unnecessary abstractions years ago. This is the cargo culture that Luu describes — practices copied without understanding, propagated because "that's how it's done at Google" or "that's what we do at [prestigious company]," unquestioned until the company has grown too large to change.

The tragedy is that everyone know this. The manager knows, in some quiet corner of the mind, that something is wrong. The articulator knows, somewhere, that the promotions are not entirely deserved. The two engineers who cannot tell the story know, with practical certainty, that they have chosen the wrong profession. But the system has no corrective mechanism.

As Dan Luu observed in his analysis of normalization of deviance:

> "Weak signals are abundant. How do we filter out the ones that aren't important?"

By the time someone has enough political capital to be heard, they have been normalized into the dysfunction. The new engineer who sees broken processes and asks "WTF WTF WTF" is eventually told "yeah we know, we're concerned about it" until they too cease to notice that anything is wrong.

The four-person team will cycle. The two competent engineers will leave. The manager will hire replacements who are disgusted by the process but will themselves either leave or be normalized. The articulator will continue to be promoted until the complexity he has created becomes unmanageable, at which point he will leave for a promotion elsewhere, leaving behind a disaster that he will not be around to fix.

> This is not an aberration. This is how the system is designed to work.

---

But nothing changes. The quarterly reviews continue. The promotion packets are written. The articulate advance. The competent leave. The system grinds on, selecting for mediocrity and punishing excellence... until one day the lights go out.

> And when that day comes, the manager will wonder why good engineers are so hard to find.
