import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Logo from "../../public/logo.svg";

const Loader = ({ loadingLanguage }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (loadingLanguage === false) {
      setTimeout(() => {
        setHide(true);
        document.body.style = "overflow-y: auto";
      }, 2000);
    } else {
      document.body.style = "overflow-y: hidden";
    }
  }, [loadingLanguage]);

  return (
    <></>
    // <div className={style.loader} style={hide ? { top: "-200%" } : { top: 0 }}>
    //   <div className={style.loader__wrapper}>
    //     <Logo />
    //   </div>
    // </div>
  );
};

export default Loader;
