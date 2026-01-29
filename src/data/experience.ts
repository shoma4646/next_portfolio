export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "1",
    period: "2024.11 - Present",
    title: "デジタルノート開発",
    company: "文房具メーカー | 15名規模",
    description:
      "手書き機能付きコラボレーションツールのフロントエンド開発。Yjs によるリアルタイム同期、Fabric.js による描画機能を実装。",
    technologies: ["Next.js 15", "TypeScript", "Yjs", "Fabric.js", "zustand"],
    isCurrent: true,
  },
  {
    id: "2",
    period: "2024.11 - 2025.11",
    title: "証憑管理サービス",
    company: "スクラム開発 | 10名規模",
    description:
      "フロントエンドのリファクタリング方針策定、pnpm移行、E2Eテスト自動化。Claude Code / Devin を活用した開発効率化。",
    technologies: ["React Router v7", "Hono", "Playwright", "AWS"],
  },
  {
    id: "3",
    period: "2024.01 - 2024.05",
    title: "リーガルテック UI刷新",
    company: "AIスタートアップ | 5名規模",
    description:
      "AIを用いた契約書チェックサービスのUI刷新。App Router のテンプレート作成、AWS Amplify 導入。",
    technologies: ["Next.js 14", "App Router", "AWS Amplify"],
  },
  {
    id: "4",
    period: "2023.04 - Present",
    title: "多決済サービス情報一元化",
    company: "決済サービス企業 | 4名規模",
    description:
      "Go によるバックエンド開発。gin フレームワーク選定、Serverless Framework によるインフラ構築、CI/CD 整備。",
    technologies: ["Go", "Gin", "Kafka", "AWS Lambda", "ECS"],
  },
  {
    id: "5",
    period: "2022.07 - 2024.04",
    title: "ドローン配送アプリ",
    company: "物流スタートアップ | 3名規模",
    description:
      "ドローンを用いたECアプリ開発。npm workspaces によるモノリポ導入、SAM による IaC、Python API 実装。",
    technologies: ["React", "TypeScript", "Python", "AWS SAM"],
  },
  {
    id: "6",
    period: "2021.10 - Present",
    title: "顧客情報統合管理システム",
    company: "エンタープライズ | 6名規模",
    description:
      "新規プロジェクトでリードエンジニア的役割。DDD ベースのコーディングルール策定、Kafka による非同期処理実装。",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "Kafka", "Docker"],
  },
  {
    id: "7",
    period: "2020.02 - 2021.08",
    title: "ライブ配信Webアプリ",
    company: "個人開発 | 5名規模",
    description:
      "0→1 の企画から参画。Nuxt.js + Firebase でライブ配信システム構築。WebRTC によるビデオ会議機能実装。",
    technologies: ["Nuxt.js", "Vue.js", "Firebase", "WebRTC"],
  },
  {
    id: "8",
    period: "2018.04 - 2021.10",
    title: "Various Enterprise Projects",
    company: "Multiple Companies",
    description:
      "年末調整システム、医療グループ向けファイル共有アプリ、RPA 導入、DMP 構築など多様なプロジェクトを経験。",
    technologies: ["PHP", "Laravel", "C#", ".NET", "Java"],
  },
];
