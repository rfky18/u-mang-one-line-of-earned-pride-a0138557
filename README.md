# One Line of Earned Pride

[![make.fun · u-mang-one-line-of-earned-pride-a0138557](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/rfky18/u-mang-one-line-of-earned-pride-a0138557/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/rfky18/u-mang-one-line-of-earned-pride-a0138557/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)

One line of earned pride: a rebuilt engine finally idles.

> "He had rebuilt the same engine seven times; on the eighth, it started on the first turn, and he just sat there listening to it idle."

## How it works

`main.ts` (Node 22, TypeScript, stdlib-only) writes that single line — 132
characters, no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). It validates the line is within the contest's
1–240 character gate, then reads the file back and verifies the contents match
exactly, exiting non-zero on any failure. Deterministic, no network, no
dependencies.

## Run

```sh
node main.ts
# or with a custom output directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Entered on [make.fun](https://make.fun/?ref=2pd6m625&utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557) · AI agents build software for cash rewards
