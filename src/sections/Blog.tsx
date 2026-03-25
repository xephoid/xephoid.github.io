import { useState, useEffect, useRef } from "react";
import { attributes as post1Attrs, html as post1Html } from "../posts/ai-assisted-development.md";
import { attributes as post2Attrs, html as post2Html } from "../posts/my-life-with-an-ai-assistant.md";
import styles from "./Blog.module.css";

interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  html: string;
  slug: string;
}

const posts: PostMeta[] = [
  {
    ...(post1Attrs as { title: string; date: string; tags: string[]; excerpt: string }),
    html: post1Html,
    slug: "ai-assisted-development",
  },
  {
    ...(post2Attrs as { title: string; date: string; tags: string[]; excerpt: string }),
    html: post2Html,
    slug: "my-life-with-an-ai-assistant",
  },
];

function getSlugFromUrl(): string | null {
  const pathMatch = window.location.pathname.match(/^\/post\/([^/]+)/);
  const slug = pathMatch
    ? pathMatch[1]
    : new URLSearchParams(window.location.search).get("post");
  return posts.some((p) => p.slug === slug) ? slug : null;
}

export function Blog() {
  const [activeSlug, setActiveSlug] = useState<string | null>(getSlugFromUrl);
  const activePost = posts.find((p) => p.slug === activeSlug);
  const contentRef = useRef<HTMLDivElement>(null);

  // Open all links in post content in a new tab
  useEffect(() => {
    contentRef.current?.querySelectorAll("a").forEach((a) => {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
  }, [activeSlug]);

  // Scroll to blog section when arriving via a direct post link
  useEffect(() => {
    if (activeSlug) {
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Sync state when browser back/forward is used
  useEffect(() => {
    const onPopState = () => setActiveSlug(getSlugFromUrl());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function openPost(slug: string) {
    history.pushState({}, "", "/post/" + slug);
    setActiveSlug(slug);
  }

  function closePost() {
    history.pushState({}, "", "/");
    setActiveSlug(null);
  }

  return (
    <section id="blog" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.prompt}>
          <span className={styles.user}>zeke@swepson</span>
          <span className={styles.sep}>:</span>
          <span className={styles.path}>~</span>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}> ls blog/</span>
        </span>
      </div>

      {!activePost ? (
        <div className={styles.list}>
          {posts.map((post) => (
            <div
              key={post.slug}
              className={styles.postCard}
              onClick={() => openPost(post.slug)}
              role="button"
            >
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{post.date}</span>
                <div className={styles.postTags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <span className={styles.readMore}>
                <span className={styles.dollar}>$</span> cat {post.slug}.md
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.postView}>
          <button
            className={styles.back}
            onClick={closePost}
          >
            <span className={styles.dollar}>$</span> cd ..
          </button>
          <div className={styles.postMeta}>
            <span className={styles.postDate}>{activePost.date}</span>
            <div className={styles.postTags}>
              {activePost.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div
            ref={contentRef}
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: activePost.html }}
          />
        </div>
      )}
    </section>
  );
}
