"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import ideaImage1 from "../../../public/images/presentation/idea-1.png";
import ideaImage2 from "../../../public/images/presentation/idea-2.png";
import ideaImage3 from "../../../public/images/presentation/idea-3.png";
import { useTranslation } from "react-i18next";

const PresentationIdea = () => {
  const { t } = useTranslation();

  return (
    <section className={style.presentation__idea}>
      <div className="container">
        <h2>{t("presentationIdeaTitle")}</h2>

        <div className={style.presentation__idea__wrapper}>
          <aside className={style.presentation__left}>
            <p>{t("presentationIdeaDesc")}</p>

            <div className={style.presentation__left__image}>
              <Image src={ideaImage1} alt="idea 1" />
              <Image src={ideaImage2} alt="idea 2" />
            </div>

            <p>{t("presentationIdeaDesc2")}</p>
          </aside>
          <aside className={style.presentation__right}>
            <Image src={ideaImage3} alt="idea 3" />
            <p>{t("presentationIdeaDesc3")}</p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PresentationIdea;
