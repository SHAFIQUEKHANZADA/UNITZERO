import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/content/posts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Latest insights and stories from UNITZERO on AI automation and product updates.",
  alternates: { canonical: "/blogs" },
  robots: { index: true, follow: true },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="md:px-16 lg:px-20 px-4 py-12 bg-omniv-dark">
      <h1 className="mb-10 sm:text-4xl text-xl font-bold tracking-tight sm:mt-0 mt-8">Insights & Stories</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group rounded-xl border bg-card p-4 transition hover:shadow-lg"
          >
            {post.coverImage ? (
              <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : null}
            <h2 className="text-xl font-semibold leading-snug group-hover:underline">
              {post.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              {post.author ? <span>• {post.author}</span> : null}
              {post.readingTime ? <span>• {post.readingTime} min read</span> : null}
            </div>
            {post.excerpt ? (
              <p className="mt-3 line-clamp-3 text-sm text-foreground/80">{post.excerpt}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </main>
  );
}
