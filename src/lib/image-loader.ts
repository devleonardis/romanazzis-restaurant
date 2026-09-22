const repoName = "romanazzis-restaurant";
const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return isGithubPages ? `/${repoName}${src}` : src;
}
