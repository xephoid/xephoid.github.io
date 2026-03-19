import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.prompt}>
          <span className={styles.user}>zeke@swepson</span>
          <span className={styles.sep}>:</span>
          <span className={styles.path}>~</span>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}> ls projects/</span>
        </span>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.title}>
                  {project.title}
                  {project.status && (
                    <span className={styles.status}> ({project.status})</span>
                  )}
                </h3>
                <p className={styles.type}>{project.type}</p>
              </div>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span className={styles.dollar}>$</span> {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
