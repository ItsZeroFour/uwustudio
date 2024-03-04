import React from "react";
import style from "./style.module.scss";

interface childrenProps {
  children: React.ReactNode;
}

const Lines: React.FC<childrenProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className={style.lines__wrapper}>
          <ul className={style.lines}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      {children}
    </React.Fragment>
  );
};

export default Lines;
