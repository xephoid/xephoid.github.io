import styles from "./Output.module.css";

interface Props {
  children: React.ReactNode;
  dim?: boolean;
}

export function Output({ children, dim = false }: Props) {
  return (
    <p className={`${styles.output} ${dim ? styles.dim : ""}`}>
      {children}
    </p>
  );
}