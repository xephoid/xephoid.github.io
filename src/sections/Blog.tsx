import { useState } from "react";
import { attributes as post1Attrs, html as post1Html } from "../posts/ai-assisted-development.md";
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
];

export function Blog() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activePost = posts.find((p) => p.slug === activeSlug);

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
              onClick={() => setActiveSlug(post.slug)}
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
            onClick={() => setActiveSlug(null)}
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
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: activePost.html }}
          />
        </div>
      )}
    </section>
  );
}
