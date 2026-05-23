# Profile Bento Grid 実装計画

## Summary

Pencilで確認した `docs/design/hero.pen` の `Profile` フレームを基準に、`src/components/contents/ProfileContent.astro` にbento-gridを実装する。Pencil上のメモ通り、左上プロフィールカードは画像貼り付けではなくHTML/Tailwindで再構成する。

## Key Changes

- Profileセクション全体は背景 `#f7f1f1`、中央寄せのbento-grid、カード間隔はPencilの規則に近い余白で構成する。
- デスクトップではPencilの寸法比を基準に、約 `231px` 単位の列を組み合わせる。プロフィール / Tokushima / Bookは横2列相当、Spotify / GitHub / My work / YouTuberは横1列相当として配置する。
- カード角丸は主に `rounded-4xl` を基準にし、Pencilの `32px` / `34px` に寄せる必要がある箇所だけ任意値を使う。内側余白は `p-8` を基準にTailwindで実装する。
- 左上プロフィールカードは `src/assets/images/profile-avatar.png`、英日テキスト、太字名を使ってコード化する。
- SpotifyカードはAPI連携なしの静的表示で、`都落ち / ヨルシカ` を表示する。
- Tokushimaカードは薄グレー背景、白枠、下部ラベル `live in Tokushima 🏝️` を配置する。
- GitHubカードは黒背景、中央アイコン、左下の外部リンクボタンを配置する。
- Book / Podcast / YouTuberカードはPencilの文言・階層・ボタン色 `#007aff` を反映する。BookとPodcastのグレー矩形は、現時点ではPencil通りのプレースホルダーとして再現する。
- YouTuberカードの画像枠は、画像がある場合は差し替え、未配置の場合はPencilの空画像枠に近い見た目で実装する。
- My workカード2枚はグレー代替ではなく画像カードとして実装する。ビルド安定性を優先し、画像は `public/works/work-01.png` と `public/works/work-02.png` のように `public/` 配下のパス参照にする。画像未配置時はグレー背景と `My work` 表示にフォールバックする。
- スマホ幅ではカードを縦並びにし、Pencilの厳密な段組みよりも読みやすさを優先する。過度なレスポンシブ分岐は入れない。

## Public Interfaces / Assets

- 追加予定: `public/works/` 配下の作品画像
  - `public/works/work-01.png`
  - `public/works/work-02.png`
- 変更対象: `src/components/contents/ProfileContent.astro`, `src/components/cards/*.astro`
- 既存変更済みの `Header.astro` と `me.png` は巻き戻さない。

## Layout Notes

- Pencilのトップフレームは `Profile`、サイズは `1440 x 1478`、背景色は `#f7f1f1`。
- 主要カードの比率:
  - Profile: `465 x 228`
  - Spotify: `231 x 231`
  - Tokushima: `465 x 465`
  - GitHub: `231 x 231`
  - My work: `231 x 485`
  - Podcast: `486 x 187`
  - Book: `465 x 187`
  - YouTuber: `256 x 231`
- 実装ではピクセルパーフェクトではなく、上記の比率とカード同士の規則性を優先する。

## Test Plan

- `bun run build` でAstroビルド確認。
- `bun run dev` で表示確認。
- 確認項目:
  - Pencilのカード配置、色、角丸、文字階層に近い。
  - 左上プロフィールカードが画像ではなくHTML要素で再現されている。
  - 作品画像カードが表示される。
  - スマホ幅では最低限読みやすい縦並びになる。
  - Headerの既存挙動が壊れていない。
- 可能であればブラウザでデスクトップ幅とスマホ幅のスクリーンショットを確認し、カードの重なり・文字はみ出し・余白崩れがないか見る。

## Assumptions

- Pencil確認済みのトップフレームは `Profile`、背景色は `#f7f1f1`。
- Pencilの主な色は `#ffffff`, `#ebe5e5`, `#d8d8d8`, `#242424`, `#6ad2b3`, `#007aff`。
- フォントは既存CSSと同じ `Satoshi` / `Noto Sans JP` を使う。
- Spotify APIは今回は実装しない。
- My work用画像は実装前後どちらで追加しても壊れないよう、`public/works/` のパス参照とフォールバック表示で扱う。
