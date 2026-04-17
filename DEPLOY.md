# PhysicalGo デプロイ手順

## Supabase セットアップ

### 1. DBスキーマ作成
Supabase SQL Editorで要件ドキュメントのSQLを実行（physicalgoスキーマ作成〜RLSポリシーまで）

### 2. Storage バケット作成
- バケット名: `physicalgo`
- Public: true（または適切なRLSポリシー設定）

### 3. Auth設定
- Google OAuth プロバイダーを有効化
- Redirect URL に `https://physicalgo.vercel.app/auth/callback` を追加

## Vercel 環境変数

```
NEXT_PUBLIC_SUPABASE_URL=（CareGoプロジェクトと同じ）
NEXT_PUBLIC_SUPABASE_ANON_KEY=（CareGoプロジェクトと同じ）
NEXT_PUBLIC_SITE_URL=https://physicalgo.vercel.app
ANTHROPIC_API_KEY=（共通）
```

## デプロイコマンド

```bash
git push origin main
# Vercelに接続済みの場合は自動デプロイ
```
