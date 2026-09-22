import type { NextConfig } from "next";

const repoName = "romanazzis-restaurant";
const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
