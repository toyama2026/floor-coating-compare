# floor compare — フロアコーティング比較案内所

日本のフロアコーティングを、種類・料金の目安・施工会社の条件から見比べるための単一ページの Web アプリです。画面上のサイト名は `floor / compare`（フロアコーティング比較）です。

ライセンスは `package.json` の `MIT` です。このリポジトリには、この README を書く前の README はありません。デザイン方針は `ideas.md`、他サイトの観察は `research-notes.md`、診断モーダルの戻る操作のチェックリストは `todo.md` にあります。

## 概要

`client/src/pages/Home.tsx` がトップ（`/`）を組み立てます。掲載するコーティング 4 種類と施工会社 4 社、診断の質問は `client/src/components/home/data.ts` の固定データです。診断フォームの送信や「詳しく見る」「無料見積もりを依頼」は、画面上のトーストと完了表示にとどまり、API へは送りません。

HTML のタイトルは「floor compare — フロアコーティング比較案内所」、説明文は「フロアコーティングの種類・価格・耐久性を、暮らしとの相性から比較する案内所。」です（`client/index.html`）。`lang` は `ja` です。

## 目的・背景

`ideas.md` では、候補だった 3 方向（Quiet Material Library / Warm Home Signal / Spec Sheet Atelier）のうち **Quiet Material Library** を採用方針として記録しています。ブランドの一文は「住まいの床選びを、価格だけでなく暮らしとの相性で比べたい人のための、フロアコーティング比較案内所。」です。差し色は Deep Jade `#0F5B57`、見出し書体は Cormorant Garamond、本文は Noto Sans JP、ワードマークは小文字の `floor` / `compare` の二段組み、と書かれています。`client/index.html` と `client/src/index.css` はこの色と 2 書体を使っています。

`research-notes.md` は、日本のフロアコーティング比較サイトや他ジャンルの比較サイトを見たメモです。価格・耐久・光沢・保証・対応エリアなどを比較軸にする観察と、当時の画面に対する改善案が書かれています。現行の画面は、その後のコミット「Rework toward a comparison-media site (kakaku.com-style)」で、比較表・料金概算・施工会社の絞り込み・比較基準の説明を持つ構成になっています。メモの時点の「まだ薄い」という記述と、今の静的データ上の項目（保証年数、対応エリア、施工実績など）は一致しません。実装の現状はソースを優先してください。

## 主な機能・ページ構成

ルーティングは wouter の `Switch` です（`client/src/App.tsx`）。

| パス | 画面 | 内容 |
| --- | --- | --- |
| `/` | `Home` | 下表のセクションを 1 ページに並べた比較案内 |
| `/404` | `NotFound` | 英語の 404（「Page Not Found」と Home へ戻るボタン） |
| 上記以外 | `NotFound` | 同じ 404 をフォールバック表示 |

トップ内のアンカーは次のとおりです。ヘッダーの「コラム」はフッターの `id="column"` へ飛び、コラム記事の一覧はありません。ヘッダーの「施工事例」は施工会社一覧（`#companies`）へ飛びます。

| アンカー | セクション | 実装されていること |
| --- | --- | --- |
| `#top` | ヒーロー | 「30秒でおすすめ診断」で診断モーダルを開く。「施工会社を比較する」で `#companies` へスクロール |
| `#diagnosis` | 診断バナー | 「無料で診断をはじめる」で同じモーダルを開く |
| `#price` | 料金相場 | 4 種類の 20 畳（`basePrice20jo`）の目安表。面積（㎡、初期値 33）から、種類ごとの `pricePerSqm` の最小・最大を掛け、千円単位に丸めた概算を表示 |
| `#types` | 種類の比較表 | 耐久性・光沢・滑りにくさ・傷耐性・価格・おすすめ。星と文言は `data.ts` の値 |
| `#results` | 種類カード | 4 種類の画像・星評価・耐用年数・価格目安・タグ。「詳しく見る」は「詳細ページはモックアップです」というトースト |
| `#purpose` | 目的から探す | 6 つの目的ボタン。いずれも診断モーダルを開く。「すべての目的を見る」は `#types` |
| `#region` | 地域から探す | 6 地方のラベル表示。「都道府県から施工会社を探す」は「都道府県選択はモックアップです」というトースト |
| `#floor` | 床材から探す | 5 種の床材ボタン。トーストで「比較はモックアップです」と表示。「すべての床材を見る」は `#types` |
| `#companies` | 施工会社を探す | 都道府県（福岡県・東京都・大阪府・愛知県）、コーティング種別、こだわりで絞り込み。並びはおすすめ順（評価の数値）・価格が安い順・口コミ順（件数）・保証順。0 件のときは空状態の文言。各カードの「無料見積もりを依頼」は詳細ページがモックである旨のトースト |
| `#trust` | 比較基準について | 掲載基準・評価方法・価格調査方法・ランキング算出方法と編集方針の固定文。表示上の情報更新日は 2026年9月1日。ページ上部の帯には「比較基準・料金目安を2026年9月に更新」とある |
| `#column` | フッター | サイト名、キャッチコピー「正しい比較で、納得の床選び。」、`© 2026 Floor Coating Guide / 運営会社 / プライバシーポリシー`。運営会社ページやプライバシーポリシーページへのリンク先ファイルはリポジトリに無い |

診断モーダル（`DiagnosisModal.tsx`）の質問は次の 5 つです。回答はコンポーネントの state に保持し、2 問目以降は「前の質問へ」で戻れます。初回は戻るボタンを出しません。

1. ご入居のタイミングは？
2. 床を守りたい理由は？
3. 理想の仕上がりは？
4. 気になる床材は？
5. お住まいの地域は？

5 問のあとメールアドレス入力があり、送信すると完了画面とトースト「診断内容を受け付けました」を出します。完了文には「このモックアップでは完了画面を表示しています。実運用時は診断結果と見積もり候補をお送りします。」とあります。診断バナーの文言は「AIが条件を比較して判定します」ですが、回答からおすすめ種類を算出する処理はソースにありません。Escape で閉じ、Tab はモーダル内に閉じ込めます。`prefers-reduced-motion` では診断ステップのアニメーションを切ります。

ページ下部の CTA は「簡単1分！無料で一括見積もり」で同じ診断モーダルを開きます。幅 650px 以下ではヘッダーが追従し、下部に「診断・見積もり」の固定バーが出ます。

`data.ts` のコーティングは、ガラス / UV / シリコン / ペット対応の 4 件です。施工会社は REALIFE（リアライフ）、株式会社 フロアエージェント、株式会社 コーティングLab、ペットライフコートの 4 件で、評価・価格・保証年数・施工実績・対応エリアも同ファイルの固定値です。画像は `images.unsplash.com` の URL です。

アプリ全体は `ErrorBoundary` で包み、開発時（Vite の `import.meta.env.DEV`）だけエラーの stack を表示します。テーマは `ThemeProvider` の `defaultTheme="light"` で、切り替え用の `switchable` はコメントアウトされています。

## 技術スタック

`package.json` と設定ファイルから読めるものです。Node.js の版は `engines` にも `.nvmrc` にも書かれていません。パッケージマネージャは `packageManager` フィールドの pnpm `10.4.1` です。

| 区分 | 内容 |
| --- | --- |
| UI | React `^19.2.1`、react-dom `^19.2.1` |
| ルーティング | wouter。ロックファイルは `3.7.1`。`patches/wouter@3.7.1.patch` を pnpm の `patchedDependencies` で当てる。パッチは、ブラウザ上で各 `Route` の `path` を `window.__WOUTER_ROUTES__` に集める |
| ビルド | Vite `^7.1.7`（`@vitejs/plugin-react`）、本番サーバー用に esbuild で `server/index.ts` を `dist/index.js` へバンドル |
| スタイル | Tailwind CSS `^4.1.14`（`@tailwindcss/vite`）、`tw-animate-css`。画面の見た目の大半は `client/src/index.css` の独自クラス |
| コンポーネント | shadcn/ui 設定（`components.json`、style は `new-york`、RSC は false）。ソースにある UI 部品は `button` / `card` / `tooltip` / `sonner`。Radix は `@radix-ui/react-slot` と `@radix-ui/react-tooltip`。アイコンは `lucide-react`。トーストは `sonner`（`next-themes` の `useTheme` を参照） |
| サーバー | Express `^4.21.2`。静的ファイル配信と、それ以外のパスへの `index.html` 返却 |
| 言語 | TypeScript `5.6.3`（`strict: true`）。`pnpm check` は `tsc --noEmit` |
| 整形 | Prettier `^3.6.2`（`.prettierrc`：セミコロンあり、ダブルクォート、printWidth 80） |
| テスト | `vitest` は devDependency にある。`test` スクリプトは無く、`*.test.ts` もリポジトリに無い |
| パスエイリアス | `@` → `client/src`、`@shared` → `shared`。Vite のみ `@assets` → `attached_assets`（そのディレクトリはリポジトリに無い） |

開発時だけ有効な Vite プラグインが `vite.config.ts` にあります。

- `vite-plugin-manus-runtime` は `command === "serve"` のときだけ読み込む。コメントには、本番の `index.html` へ React を同梱しないため、とある。
- `vitePluginManusDebugCollector` は、`NODE_ENV === "production"` 以外で `client/public/__manus__/debug-collector.js` を head に差し込む。`POST /__manus__/logs` を受け、`.manus-logs/` 以下のログへ追記する（1 ファイル 1MB を超えると新しい行を残して切り詰める）。
- `vitePluginStorageProxy` は開発サーバーの `/manus-storage` で、後述の Forge API に署名付き URL を問い合わせ、307 で転送する。

`template.json` は id `web-static`、name「Web App (static only)」のスキャフォールドです。中に埋め込まれた `package.json` や `Home.tsx` は、現行の依存関係とトップページとは一致しません。

## ディレクトリ構成

```
.
├── client/
│   ├── index.html
│   ├── public/
│   │   └── __manus__/debug-collector.js   # 開発時に head へ挿入されるログ収集スクリプト
│   └── src/
│       ├── main.tsx                       # 起動と、設定時のみの解析スクリプト挿入
│       ├── App.tsx                        # ルート、テーマ、トースト
│       ├── const.ts                       # 共有定数の再エクスポートとログイン URL 生成
│       ├── index.css
│       ├── pages/                         # Home、NotFound
│       ├── components/home/               # トップの各セクションと data.ts
│       ├── components/ui/                 # button, card, tooltip, sonner
│       ├── components/ErrorBoundary.tsx
│       ├── contexts/ThemeContext.tsx
│       └── lib/utils.ts                   # cn()
├── server/index.ts                        # 本番用の静的配信
├── shared/const.ts                        # COOKIE_NAME, ONE_YEAR_MS
├── patches/wouter@3.7.1.patch
├── ideas.md
├── research-notes.md
├── todo.md
├── template.json
├── components.json
├── package.json
├── pnpm-lock.yaml
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

`shared/const.ts` の `COOKIE_NAME`（値は `app_session_id`）と `ONE_YEAR_MS` を参照している画面はありません。`client/src/const.ts` の `getLoginUrl` も、他ファイルから import されていません。

## セットアップ・ローカル起動

パッケージマネージャは pnpm です（`package.json` の `packageManager` は `pnpm@10.4.1`）。

```bash
pnpm install
pnpm dev
```

`dev` は `vite --host` です。`vite.config.ts` の開発サーバーは `port: 3000`、`host: true`、`strictPort: false` です。3000 が使用中のときは Vite が次の空きポートを使います。`allowedHosts` には `localhost`、`127.0.0.1`、および `manuspre.computer` / `manus.computer` / `manus-asia.computer` / `manuscomputer.ai` / `manusvm.computer` の各サブドメインが列挙されています。Vite の `root` は `client/` です。

その他のスクリプト:

```bash
pnpm check     # tsc --noEmit
pnpm build     # vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
pnpm start     # NODE_ENV=production node dist/index.js
pnpm preview   # vite preview --host
pnpm format    # prettier --write .
```

`pnpm start` は `dist/index.js` を起動します。先に `pnpm build` が必要です。Express は `process.env.PORT` または `3000` で待ち受け、ログに `Server running on http://localhost:<port>/` と出します。配信ディレクトリは、バンドル後の `__dirname`（`dist/`）から見て `../public`、つまりリポジトリ直下の `public/` です。

`pnpm build` の Vite 側の `outDir` はリポジトリ直下の `public/` で、`emptyOutDir: true` です。`public/` と `dist/` は `.gitignore` に含まれます。

## 環境変数

`.env.example` は無く、値はリポジトリに入っていません。名前と、コード上の用途だけを書きます。

| 名前 | どこで読むか | 用途 |
| --- | --- | --- |
| `VITE_ANALYTICS_ENDPOINT` | `client/src/main.tsx` | 設定されているとき、`${値}/umami` を script の `src` にする。未設定なら script を挿入しない |
| `VITE_ANALYTICS_WEBSITE_ID` | 同上 | 上記と両方が非空のときだけ、script の `data-website-id` に入れる |
| `VITE_OAUTH_PORTAL_URL` | `client/src/const.ts` の `getLoginUrl` | `${値}/app-auth` に `appId`・`redirectUri`・`state`・`type=signIn` を付けた URL を組み立てる。現行の画面からは呼ばれていない |
| `VITE_APP_ID` | 同上 | その URL の `appId`。同じく現行の画面からは呼ばれていない |
| `PORT` | `server/index.ts` | Express の待受ポート。無いときは `3000`。Vite の開発ポートは、この変数ではなく設定ファイルの `3000` |
| `NODE_ENV` | `pnpm start` が `production` を付けて起動。`vite.config.ts` のデバッグ収集プラグイン | `production` のときは debug-collector.js を HTML に差し込まない。Express の静的パスはこの変数では分岐しない |
| `BUILT_IN_FORGE_API_URL` | 開発サーバーの `/manus-storage` | 末尾スラッシュを除いたうえで `v1/storage/presign/get` を呼び、返った URL へ 307 する。空なら「Storage proxy not configured」 |
| `BUILT_IN_FORGE_API_KEY` | 同上 | そのリクエストの `Authorization: Bearer` に使う。空ならプロキシは設定不足として応答する |

Vite の `envDir` はリポジトリ直下です。`.env` および `.env.local` などの変種は `.gitignore` に入っています。

## デプロイ

`render.yaml`、`Dockerfile`、GitHub Actions のワークフローはリポジトリにありません。公開先の URL もソースからは分かりません。

分かっているのはビルド出力の置き場所です。`vite.config.ts` のコメントとコミット「Point build output at repo-root public/ for Render static-site deploy」では、Render の静的サイトが既定でリポジトリ直下の `public` を公開し、作成後は MCP からビルドコマンドを変えられない、そのため Vite の `outDir` を `public/` に合わせた、と説明しています。

同じリポジトリには、ビルド後に Node で静的ファイルを出す経路もあります。

```bash
pnpm build
pnpm start
```

この経路は `public/` を Express が配信し、クライアント側ルートには `index.html` を返します。待受ポートは `PORT`（既定 `3000`）です。ホスト名の指定は `listen` の引数にありません。

## 関連リポジトリ・外部サービス

このリポジトリから別リポジトリへの参照（サブモジュールやドキュメント内のリポジトリ URL）はありません。コードと HTML が参照する外部のものは次のとおりです。

| 相手 | 接続の仕方 |
| --- | --- |
| Google Fonts | `client/index.html` が Cormorant Garamond と Noto Sans JP の CSS を読み込む |
| Unsplash | ヒーロー背景と、コーティング・施工会社カードの `img` が `images.unsplash.com` を参照する |
| Umami | `VITE_ANALYTICS_ENDPOINT` と `VITE_ANALYTICS_WEBSITE_ID` が両方あるときだけ、`main.tsx` が `${endpoint}/umami` を挿入する。`template.json` に埋め込まれた古い `index.html` は、ビルド時置換の `%VITE_ANALYTICS_ENDPOINT%/umami` を直接書いていたが、現行の `client/index.html` にはその script タグは無い |
| Manus 向けの開発支援 | `vite-plugin-manus-runtime`、debug-collector、`/__manus__/logs`、開発サーバーの `allowedHosts`。本番ビルドには runtime プラグインを含めない |
| Forge のストレージ API | 開発サーバーの `/manus-storage` が `BUILT_IN_FORGE_API_URL` の `v1/storage/presign/get` を呼ぶ。画面コンポーネントからの呼び出しは無い |
| OAuth ポータル | `getLoginUrl` が `VITE_OAUTH_PORTAL_URL` の `/app-auth` を組み立てる。画面からは未使用。リダイレクト先として `/api/oauth/callback` を URL に含めるが、そのルートを実装したサーバーコードは無い |

`research-notes.md` には、調査時に見た比較サイトの URL が表で残っています。アプリのリンク先ではありません。

## 現状・注意点

- トップの料金・評価・会社情報は `data.ts` の固定値です。掲載基準や編集方針の文章もコンポーネント内の固定文です。画面上部の帯は「全国の施工店を公開基準で比較できます」と表示します。データ上の施工会社は 4 社、都道府県フィルタの選択肢は福岡県・東京都・大阪府・愛知県です。
- 診断の送信、種類の詳細、床材別比較、都道府県選択、会社への見積もり依頼は、トーストまたはモーダル内の完了表示です。バックエンドの問い合わせ API はありません。Express がしているのは静的ファイルと `index.html` の配信です。
- 診断バナーは AI 判定と書いています。実装は 5 問の選択を state に貯め、メール欄のあと完了画面を出すところまでです。
- ヘッダーの「コラム」、フッターの「運営会社」「プライバシーポリシー」に対応するページはソースにありません。
- `getLoginUrl`、`COOKIE_NAME`、`ONE_YEAR_MS` は定義のみで、画面は使っていません。
- `vitest` は依存関係に含まれ、テストファイルと `test` スクリプトはありません。
- `template.json` は現行の `package.json` や `Home.tsx` と内容が違います。依存の一覧は `package.json` を見てください。
- `todo.md` の診断の戻る操作はチェック済みです。未チェックは「チェックポイントを保存して共有する」の 1 項目です。
- `.gitignore` には `.env*`、`public/`、`dist/`、`client/public/__manus__/version.json` が含まれます。
