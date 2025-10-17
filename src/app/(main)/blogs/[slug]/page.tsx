import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import remarkGfm from "remark-gfm";
import { getPostBySlug, getRelatedPosts } from "@/content/posts";
import { MdxRenderer } from "./mdx-renderer"; // client component
import Link from "next/link";
import Image from "next/image";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const fs = await import("node:fs");
  const path = await import("node:path");
  const dir = path.join(process.cwd(), "content", "posts");
  const slugs = fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".mdx"))
    .map((f: string) => f.replace(/\.mdx$/, ""));
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedPosts(post, 5);

  return (
    <main className="md:px-10 lg:px-16 xl:px-20 px-4 py-12 bg-omniv-dark">
      <div className="grid gap-10 md:grid-cols-[1fr_320px] my-10 sm:my-0">
        <article className="prose prose-zinc dark:prose-invert">
          {post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.coverImage} alt={post.title} className="mb-6 w-full rounded" />
          ) : null}
          <h1 className="mb-2 sm:text-4xl text-xl font-bold tracking-tight">{post.title}</h1>
          <p className="mt-0 sm:text-sm text-[10px] text-muted-foreground">
            {new Date(post.date).toLocaleDateString()}
            {post.author ? <> • {post.author}</> : null}
            {post.updatedAt ? (
              <> • Updated {new Date(post.updatedAt).toLocaleDateString()}</>
            ) : null}
          </p>

          {/* ✅ Client MDX Renderer */}
          <MdxRenderer content={post.content} />
        </article>

        <aside className="top-24 h-max space-y-4 md:sticky">
          <div className="rounded-xl border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">Related</h3>
            <ul className="space-y-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <div>
                    <Link href={`/blogs/${p.slug}`} className="flex gap-3 group items-start">
                      <div className="w-[90px] h-[90px] flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={p.coverImage || ""}
                          alt={p.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex-1 p-1 hover:bg-muted/50 rounded-md">
                        <div className="text-sm font-medium group-hover:underline mb-1">{p.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(p.date).toLocaleDateString()}
                          {p.author ? <> • {p.author}</> : null}
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
