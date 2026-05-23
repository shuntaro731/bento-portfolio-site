# PR Content 仮実装計画

## Summary

Pencilの `PR` フレームを基準に、`src/components/contents/PrContent.astro` として自己PR用のbento-gridを仮実装する。現時点では作品画像を使わず、グレーのプレースホルダーで配置を確認できる状態にする。

## Key Changes

- PRセクションは既存のProfile/Tokushimaと同じ4列グリッドを使う。
- Intro / Golf / My skills / Figma / My work 2枚を配置する。
- Figmaカードは黒背景で、`https://www.figma.com/@shuntaro1` へリンクする。
- My workカードは仮置きとして `#d8d8d8` 背景とラベル、外部リンク風ボタンを表示する。
- 過度なレスポンシブ分岐は入れず、スマホでは1列、sm以上で2列、lg以上でPencilに近い4列配置にする。

## Test Plan

- `bun run build` でAstroビルドを確認する。
- `bun run dev` で `#pr` 表示を確認する。
