"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import topImage from "../../../public/images/presentation/top-image.png";
import { useTranslation } from "react-i18next";

const PresentationTop = () => {
  const { t } = useTranslation();

  return (
    <section className={style.presentation__top}>
      <div className="container">
        <h1>{t("presentationTopTitle")}</h1>

        <div className={style.presentation__top__wrapper}>
          <aside className={style.presentation__top__text}>
            <p>{t("presentationTopText1")}</p>

            <p>{t("presentationTopText2")}</p>

            <p>{t("presentationTopText3")}</p>
          </aside>
          <aside className={style.presentation__top__image}>
            <Image src={topImage} alt="laptop" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PresentationTop;
