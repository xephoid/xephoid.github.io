import React from "react";
import styles from "./PromptLine.module.css";

interface Props {
  user?: string;
  path?: string;
  command?: string;
  showCursor?: boolean;
}

export function PromptLine({
  user = "zeke@swepson",
  path = "~",
  command,
  showCursor = false,
}: Props) {
  return (
    <p className={styles.prompt}>
      <span className={styles.user}>{user}</span>
      <span className={styles.sep}>:</span>
      <span className={styles.path}>{path}</span>
      <span className={styles.dollar}>$</span>
      {command && <span className={styles.command}> {command}</span>}
      {showCursor && <span className={styles.cursor}>▋</span>}
    </p>
  );
}