import { useState } from "react";
import { experience, earlierRoles } from "../data/experience";
import styles from "./Experience.module.css";

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (company: string) => {
    setExpanded((prev) => (prev === company ? null : company));
  };

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.prompt}>
          <span className={styles.user}>zeke@swepson</span>
          <span className={styles.sep}>:</span>
          <span className={styles.path}>~</span>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}> cat experience.md</span>
        </span>
      </div>

      <div className={styles.timeline}>
        {experience.map((role) => (
          <div key={role.company} className={styles.role}>
            <div
              className={styles.roleHeader}
              onClick={() => role.bullets && toggle(role.company)}
              role={role.bullets ? "button" : undefined}
              aria-expanded={expanded === role.company}
            >
              <div className={styles.roleMeta}>
                <span className={styles.company}>{role.company}</span>
                <span className={styles.divider}> — </span>
                <span className={styles.title}>{role.title}</span>
                <span className={styles.period}>{role.period}</span>
              </div>
              {role.bullets && (
                <span className={styles.toggle}>
                  {expanded === role.company ? "[-]" : "[+]"}
                </span>
              )}
            </div>

            <p className={styles.visible}>{role.visible}</p>

            {role.bullets && expanded === role.company && (
              <ul className={styles.bullets}>
                {role.bullets.map((b, i) => (
                  <li key={i}>
                    <span className={styles.bullet}>▸</span> {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className={styles.earlier}>
          <p className={styles.earlierLabel}>// earlier experience</p>
          {earlierRoles.map((r) => (
            <div key={r.company} className={styles.earlierRole}>
              <span className={styles.company}>{r.company}</span>
              <span className={styles.divider}> — </span>
              <span className={styles.title}>{r.title}</span>
              <span className={styles.period}>{r.period}</span>
              <p className={styles.earlierDesc}>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
