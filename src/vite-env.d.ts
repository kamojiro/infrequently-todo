/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // 他に定義している .env の変数があればここに追加
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
