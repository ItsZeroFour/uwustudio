"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default Cursor;
