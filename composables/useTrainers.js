import { useFetch, useRuntimeConfig } from "#app";

//ヒント06のフロントエンド側から用意したサーバーAPIを取得するコードサンプル参考
export default () => {
  const config = useRuntimeConfig();
  const response = useFetch("/api/trainers", {
    default: () => [],
    server: false,   // ブラウザ側でのみデータ取得する(単純な実装にしておく目的)
    baseURL: config.public.backendOrigin,  // `npm run dev:express`しないなら省略可
  });
  return response;
};
