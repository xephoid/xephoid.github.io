import { readFileSync, mkdirSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";

const postsDir = "src/posts";
const outDir = "docs";
const baseHtml = readFileSync(join(outDir, "index.html"), "utf8");
const baseUrl = "https://zekeswepson.com";

function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!m) return {};
  return Object.fromEntries(
    m[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const [k, ...v] = line.split(":");
        return [k.trim(), v.join(":").trim().replace(/^["']|["']$/g, "")];
      })
  );
}

for (const file of readdirSync(postsDir).filter((f) => f.endsWith(".md"))) {
  const slug = basename(file, ".md");
  const { title, excerpt, image } = parseFrontmatter(
    readFileSync(join(postsDir, file), "utf8")
  );
  const postUrl = `${baseUrl}/post/${slug}`;
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/zeke.jpg`;

  const html = baseHtml
    .replace(/(<meta property="og:title"[^>]*content=")[^"]*(")/,      `$1${title}$2`)
    .replace(/(<meta property="og:description"[^>]*content=")[^"]*(")/,`$1${excerpt}$2`)
    .replace(/(<meta property="og:url"[^>]*content=")[^"]*(")/,        `$1${postUrl}$2`)
    .replace(/(<meta property="og:type"[^>]*content=")[^"]*(")/,       `$1article$2`)
    .replace(/(<meta property="og:image"[^>]*content=")[^"]*(")/,      `$1${ogImage}$2`)
    .replace(/(<meta name="twitter:image"[^>]*content=")[^"]*(")/,     `$1${ogImage}$2`)
    .replace(/(<title>)[^<]*(<\/title>)/,                               `$1${title}$2`);

  const dir = join(outDir, "post", slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`  generated /post/${slug}/index.html`);
}
