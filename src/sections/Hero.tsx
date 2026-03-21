import { useSequence } from "../hooks/useSequence";
import { TerminalWindow } from "../components";
import styles from "./Hero.module.css";

const SEQUENCE = [
  { prompt: true,  text: "whoami",                                                        speed: 80, pauseAfter: 300 },
  { prompt: false, text: "Zeke Swepson",                                                  instant: true, pauseAfter: 500 },
  { prompt: true,  text: "cat role.txt",                                                  speed: 80, pauseAfter: 300 },
  { prompt: false, text: "Engineering Lead · 19 years · Open to full-time & fractional",  instant: true, pauseAfter: 500 },
  { prompt: true,  text: "ls languages/",                                                 speed: 80, pauseAfter: 200 },
  { prompt: false, text: "node.js   react   typescript   python   java   scala",          instant: true, pauseAfter: 300 },
  { prompt: true,  text: "ls infra/",                                                     speed: 80, pauseAfter: 200 },
  { prompt: false, text: "aws   gcp   docker   postgres   mysql   redis   heroku",        instant: true, pauseAfter: 300 },
  { prompt: true,  text: "ls tools/",                                                     speed: 80, pauseAfter: 200 },
  { prompt: false, text: "auth0   twilio   openai   jenkins   cypress   jira",            instant: true, pauseAfter: 500 },
  { prompt: true,  text: "cat location.txt",                                              speed: 80, pauseAfter: 300 },
  { prompt: false, text: "San Francisco, CA · remote-friendly",                           instant: true, pauseAfter: 800 },
];

const NAV = [
  { cmd: "cd ./experience",   href: "#experience"   },
  { cmd: "cd ./work-with-me", href: "#work-with-me" },
  { cmd: "cd ./projects",     href: "#projects"     },
  { cmd: "cd ./blog",         href: "#blog"         },
  { cmd: "open linkedin",     href: "https://linkedin.com/in/zeke-swepson-6bb2944", external: true },
  { cmd: "open github",       href: "https://github.com/xephoid", external: true },
];

export function Hero() {
  const { lines, done } = useSequence(SEQUENCE);

  return (
    <section className={styles.hero}>
      <TerminalWindow title="zeke@swepson:~" className={styles.window}>
        <div className={styles.body}>
          {lines.map((line, i) => (
            <p key={i} className={line.prompt ? styles.prompt : styles.output}>
              {line.prompt && (
                <>
                  <span className={styles.user}>zeke@swepson</span>
                  <span className={styles.sep}>:</span>
                  <span className={styles.path}>~</span>
                  <span className={styles.dollar}>$</span>{" "}
                </>
              )}
              <span className={line.prompt ? styles.cmd : styles.val}>
                {line.text}
              </span>
            </p>
          ))}

          {/* Blinking cursor — only show after sequence is complete */}
          {done && (
            <p className={styles.prompt}>
              <span className={styles.user}>zeke@swepson</span>
              <span className={styles.sep}>:</span>
              <span className={styles.path}>~</span>
              <span className={styles.dollar}>$</span>
              <span className={styles.cursor}>▋</span>
            </p>
          )}

          {/* Nav links shown after sequence completes */}
          {done && (
            <nav className={styles.nav}>
              {NAV.map(({ cmd, href, external }) => (
                <a
                  key={href}
                  href={href}
                  className={styles.navLink}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className={styles.dollar}>$</span> {cmd}
                </a>
              ))}
            </nav>
          )}
        </div>
      </TerminalWindow>
    </section>
  );
}