import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  // Core dates
  date: string; // ISO string
  updatedAt?: string; // ISO string
  // Author & taxonomy
  author?: string;
  category?: string;
  parkSlug?: string;
  keywords?: string[];
  // Content summary & media
  excerpt?: string; // summary/description
  coverImage?: string; // hero image url
  image?: string; // alias supported in some posts
  // Controls & canonical
  published?: boolean;
  canonicalUrl?: string;
  // Optional explicit slug in frontmatter
  slug?: string;
};

export type PostListItem = {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  coverImage?: string;
  author?: string;
  readingTime?: number;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "posts");

function ensureContentDir(): void {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }
}

export function listPostSlugs(): string[] {
  ensureContentDir();
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  ensureContentDir();
  // Try direct filename match first
  const directPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (fs.existsSync(directPath)) {
    return readPostFromPath(directPath, slug);
  }
  // Otherwise, search all files for matching frontmatter slug
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  for (const fileName of files) {
    const fullPath = path.join(CONTENT_DIR, fileName);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const fm = data as Partial<PostFrontmatter>;
    const fmSlug = fm.slug || fileName.replace(/\.mdx$/, "");
    if (fmSlug === slug) {
      return buildPostFromMatter(fm, content, fmSlug);
    }
  }
  return null;
}

export async function getAllPosts(): Promise<PostListItem[]> {
  ensureContentDir();
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const items = files
    .map((fileName) => {
      const fullPath = path.join(CONTENT_DIR, fileName);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(raw);
      const fm = data as Partial<PostFrontmatter>;
      if (fm.published === false) return null;
      const effectiveSlug = (fm.slug || fileName.replace(/\.mdx$/, "")) as string;
      return {
        slug: effectiveSlug,
        title: (fm.title || effectiveSlug) as string,
        excerpt: fm.excerpt,
        date: (fm.date || new Date().toISOString()) as string,
        coverImage: fm.coverImage || fm.image,
        author: fm.author,
        readingTime: (fm as { readingTime?: number }).readingTime,
      } as PostListItem;
    })
    .filter((v): v is PostListItem => v !== null);

  return items.sort((a, b) => (a.date > b.date ? -1 : 1));
}

function readPostFromPath(filePath: string, fallbackSlug: string): Post | null {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as Partial<PostFrontmatter>;
  if (fm.published === false) return null;
  const effectiveSlug = fm.slug || fallbackSlug;
  return buildPostFromMatter(fm, content, effectiveSlug);
}

function buildPostFromMatter(fm: Partial<PostFrontmatter>, content: string, slug: string): Post {
  return {
    slug,
    title: (fm.title || slug) as string,
    date: (fm.date || new Date().toISOString()) as string,
    updatedAt: fm.updatedAt,
    author: fm.author,
    category: fm.category,
    parkSlug: fm.parkSlug,
    keywords: fm.keywords,
    excerpt: fm.excerpt,
    coverImage: fm.coverImage || fm.image,
    published: fm.published ?? true,
    canonicalUrl: fm.canonicalUrl,
    content,
  } as Post;
}

export function getRelatedPosts(base: Post, limit = 5): PostListItem[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const baseKeywords = new Set((base.keywords || []).map((k) => k.toLowerCase()));
  const candidates: Array<{ score: number; item: PostListItem }> = [];

  for (const fileName of files) {
    const fullPath = path.join(CONTENT_DIR, fileName);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);
    const fm = data as Partial<PostFrontmatter>;
    if (fm.published === false) continue;
    const slug = (fm.slug || fileName.replace(/\.mdx$/, "")) as string;
    if (slug === base.slug) continue;

    let score = 0;
    if (fm.category && fm.category === base.category) score += 3;
    if (fm.parkSlug && fm.parkSlug === base.parkSlug) score += 2;
    if (fm.keywords && fm.keywords.length) {
      const overlap = fm.keywords.filter((k) => baseKeywords.has(String(k).toLowerCase())).length;
      score += overlap;
    }

    const item: PostListItem = {
      slug,
      title: (fm.title || slug) as string,
      excerpt: fm.excerpt,
      date: (fm.date || new Date().toISOString()) as string,
      coverImage: fm.image,
      author: fm.author,
      readingTime: (fm as { readingTime?: number }).readingTime,
    };
    candidates.push({ score, item });
  }

  return candidates
    .sort((a, b) => b.score - a.score || (a.item.date > b.item.date ? -1 : 1))
    .slice(0, limit)
    .map((c) => c.item);
}


