import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import SuccessImage from "../../../public/icons/notification/success.svg";
import UnsuccessImage from "../../../public/icons/notification/unseccess.svg";
import CloseImage from "../../../public/icons/notification/close.svg";

const Notification = ({ message, isSuccess, isVisible, setMessageIsSend }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isVisible) {
      setAnimationClass(style["slide-down"]);
    } else {
      setAnimationClass(style["slide-up"]);
    }
  }, [isVisible]);

  return (
    <aside className={`${style.notification} ${animationClass}`}>
      <div className={style.notification__content}>
        {isSuccess ? <SuccessImage /> : <UnsuccessImage />}

        <text>
          <h4>{isSuccess ? "Спасибо!" : "Ошибка!"}</h4>
          <p>{message}</p>
        </text>

        <button onClick={() => setMessageIsSend(false)}>
          <CloseImage />
        </button>
      </div>
    </aside>
  );
};

export default Notification;
