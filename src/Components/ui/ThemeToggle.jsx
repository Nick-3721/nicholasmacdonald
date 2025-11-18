import React from "react";
import { useTheme } from "@/styles/ThemeProvider";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { changeTheme } = useTheme();

  return (
    <button
      className={styles.themeButton}
      onClick={changeTheme}
      // data-cursor="hover"
    >
      <div className={styles.border} />
      <div className={styles.buttonBall} />
      <p>New Theme</p>
      {/* <p>Switch it up</p> */}
      <div className={styles.buttonArrowContainer}>
        <div className={styles.buttonArrow}>→</div>
      </div>
    </button>
  );
}
