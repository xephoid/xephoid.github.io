import styles from "./WorkWithMe.module.css";

const WHAT_I_DO = [
  "Architecture decisions and technical roadmaps",
  "Hiring, onboarding, and mentoring engineers",
  "Process and team structure for early-stage teams",
  "Hands-on coding when needed — Node.js, React, TypeScript, PostgreSQL",
  "Vendor evaluation and tech due diligence",
];

export function WorkWithMe() {
  return (
    <section id="work-with-me" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.prompt}>
          <span className={styles.user}>zeke@swepson</span>
          <span className={styles.sep}>:</span>
          <span className={styles.path}>~</span>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}> cat work-with-me.txt</span>
        </span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.tagline}>From scrappy to scalable.</h2>
        <p className={styles.body}>
          19 years helping startup engineering teams build the right things the right way.
          I've worked across fintech, healthcare, education, and social impact —
          bringing structure to messy systems and leadership to growing teams.
        </p>

        <div className={styles.whatIDo}>
          <p className={styles.label}>// what I do</p>
          <ul className={styles.list}>
            {WHAT_I_DO.map((item, i) => (
              <li key={i}>
                <span className={styles.bullet}>▸</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.cta}>
          <p className={styles.label}>// let's talk</p>
          <p className={styles.ctaText}>
            Available for fractional CTO engagements and full-time roles.
          </p>
          <a href="mailto:contact@zekeswepson.com" className={styles.ctaLink}>
            <span className={styles.dollar}>$</span> contact@zekeswepson.com
          </a>
          <a href="https://linkedin.com/in/zeke-swepson-6bb2944" target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
            <span className={styles.dollar}>$</span> linkedin.com/in/zeke-swepson-6bb2944
          </a>
          <a href="https://github.com/xephoid" target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
            <span className={styles.dollar}>$</span> github.com/xephoid
          </a>
        </div>
      </div>
    </section>
  );
}
