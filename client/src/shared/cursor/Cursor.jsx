import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { throttle } from "lodash";
import { usePathname } from "next/navigation";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverButton, setIsOverButton] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = throttle((e) => {
      updateCursorPosition(e);
    }, 100);

    const handleMouseEnterButton = () => {
      setIsOverButton(true);
    };

    const handleMouseLeaveButton = () => {
      setIsOverButton(false);
    };

    if (typeof window !== "undefined") {
      const buttons = document.querySelectorAll(".special-button");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", handleMouseEnterButton);
        button.addEventListener("mouseleave", handleMouseLeaveButton);
      });

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        buttons.forEach((button) => {
          button.removeEventListener("mouseenter", handleMouseEnterButton);
          button.removeEventListener("mouseleave", handleMouseLeaveButton);
        });
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [path]);

  return (
    <div
      className={`${styles.cursor} ${isOverButton ? styles.cursorLarge : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {isOverButton && <div className={styles.cursorText}>Открыть</div>}
    </div>
  );
};

export default Cursor;
