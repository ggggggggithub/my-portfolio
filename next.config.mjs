/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // 정적 사이트로 내보내기
  assetPrefix: isProd ? "/my-portfolio" : "",
  basePath: isProd ? "/my-portfolio" : "",
};
export default nextConfig;
