import React from "react";
import styles from "./TerminalWindow.module.css";

interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({ title = "zeke@swepson:~", children, className }: Props) {
  return (
    <div className={`${styles.window} ${className ?? ""}`}>
      <div className={styles.header}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}