# 🚀 Portfolio - Next.js + Three.js

インタラクティブな3Dパーティクル背景を持つモダンなポートフォリオサイト。

**Live Demo:** https://shoma4646.github.io/next_portfolio/

## ✨ Features

- **3Dパーティクルアニメーション** - マウス追従するインタラクティブな背景
- **ワイヤーフレーム幾何学オブジェクト** - 浮遊するトーラス、八面体など
- **スクロール連動カメラ** - スクロールに合わせてカメラが動く
- **レスポンシブデザイン** - モバイル対応
- **サイバーパンク風UI** - グラデーション、グリッチエフェクト

## 🛠️ Tech Stack

| 技術 | 用途 |
|------|------|
| [Next.js 16](https://nextjs.org/) | Reactフレームワーク、静的サイト生成 |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | Three.jsのReactラッパー |
| [Three.js](https://threejs.org/) | 3Dグラフィックスライブラリ |
| [Tailwind CSS 4](https://tailwindcss.com/) | ユーティリティファーストCSS |
| [TypeScript](https://www.typescriptlang.org/) | 型安全なJavaScript |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト（フォント設定など）
│   ├── page.tsx        # メインページ
│   └── globals.css     # グローバルスタイル
├── components/
│   ├── Scene.tsx       # Three.js 3Dシーン ⭐
│   ├── Hero.tsx        # ヒーローセクション
│   ├── About.tsx       # 自己紹介
│   ├── Skills.tsx      # スキル一覧
│   ├── Hobbies.tsx     # 趣味
│   ├── Experience.tsx  # 経歴
│   ├── Contact.tsx     # お問い合わせ
│   ├── Navbar.tsx      # ナビゲーション
│   └── Footer.tsx      # フッター
└── data/
    └── profile.ts      # プロフィールデータ
```

## 🎮 Three.js / React Three Fiber 解説

### Scene.tsx の構成

```tsx
// 1. Canvasでシーンを作成
<Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
  <Particles />      // パーティクルシステム
  <Shapes />         // 幾何学オブジェクト
  <ScrollCamera />   // スクロール連動カメラ
</Canvas>
```

### パーティクルシステム

```tsx
// BufferGeometryで大量のパーティクルを効率的に描画
<points>
  <bufferGeometry>
    <bufferAttribute
      attach="attributes-position"
      args={[positions, 3]}  // Float32Array, itemSize
    />
  </bufferGeometry>
  <pointsMaterial size={0.5} vertexColors />
</points>
```

**ポイント:**
- `Float32Array` で頂点座標を格納（パフォーマンス最適化）
- `useFrame` フックで毎フレーム回転を更新
- マウス座標を `useRef` で追跡してインタラクティブに

### 幾何学オブジェクト

```tsx
// Three.jsのジオメトリをそのまま使用
new THREE.TorusGeometry(10, 3, 16, 100)  // トーラス
new THREE.OctahedronGeometry(8)          // 八面体
new THREE.IcosahedronGeometry(6)         // 二十面体
```

### スクロール連動

```tsx
function ScrollCamera() {
  const { camera } = useThree();  // カメラにアクセス

  useFrame(() => {
    camera.position.z = 30 + scrollY * 0.01;
    camera.rotation.y = scrollY * -0.0002;
  });
}
```

## ⚙️ GitHub Pages デプロイ設定

### next.config.ts

```ts
const nextConfig: NextConfig = {
  output: "export",           // 静的HTMLエクスポート
  basePath: "/next_portfolio", // GitHub Pagesのパス
  images: {
    unoptimized: true,        // 画像最適化を無効化（静的エクスポート用）
  },
};
```

### GitHub Actions (.github/workflows/deploy.yml)

1. `npm ci` で依存関係インストール
2. `npm run build` でビルド（`out/` に静的ファイル生成）
3. `upload-pages-artifact` でアーティファクトをアップロード
4. `deploy-pages` でGitHub Pagesにデプロイ

## 🚀 Getting Started

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 📚 学習リソース

### Next.js
- [Next.js Docs](https://nextjs.org/docs) - 公式ドキュメント
- [App Router](https://nextjs.org/docs/app) - 新しいルーティング方式

### Three.js / React Three Fiber
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Journey](https://threejs-journey.com/) - 有料だけど最高の教材
- [Drei](https://github.com/pmndrs/drei) - 便利なヘルパーコンポーネント集

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 📝 License

MIT
