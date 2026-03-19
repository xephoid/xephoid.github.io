import { useSequence } from "../hooks/useSequence";
import { TerminalWindow } from "../components";
import styles from "./Hero.module.css";

const SEQUENCE = [
  { prompt: true,  text: "whoami",                                          speed: 80,  pauseAfter: 300 },
  { prompt: false, text: "Zeke Swepson",                                    speed: 40,  pauseAfter: 500 },
  { prompt: true,  text: "cat role.txt",                                    speed: 80,  pauseAfter: 300 },
  { prompt: false, text: "Software Engineer & Engineering Lead — 19 years", speed: 30,  pauseAfter: 500 },
  { prompt: true,  text: "ls skills/",                                      speed: 80,  pauseAfter: 300 },
  { prompt: false, text: "node.js   react   typescript   postgres   aws",   speed: 25,  pauseAfter: 600 },
  { prompt: true,  text: "cat location.txt",                                speed: 80,  pauseAfter: 300 },
  { prompt: false, text: "San Francisco, CA — open to remote",              speed: 30,  pauseAfter: 800 },
];

const NAV = [
  { cmd: "cd ./experience", href: "#experience" },
  { cmd: "cd ./projects",   href: "#projects"   },
  { cmd: "cd ./blog",       href: "#blog"        },
  { cmd: "cd ./contact",    href: "#contact"     },
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

          {/* Blinking cursor after sequence */}
          <p className={styles.prompt}>
            <span className={styles.user}>zeke@swepson</span>
            <span className={styles.sep}>:</span>
            <span className={styles.path}>~</span>
            <span className={styles.dollar}>$</span>
            <span className={styles.cursor}>▋</span>
          </p>

          {/* Nav links shown after sequence completes */}
          {done && (
            <nav className={styles.nav}>
              {NAV.map(({ cmd, href }) => (
                <a key={href} href={href} className={styles.navLink}>
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