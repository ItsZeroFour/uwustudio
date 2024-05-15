"use client";

import React from "react";
import style from "./style.module.scss";
import valuesImage1 from "../../../public/images/presentation/values-1.png";
import valuesImage2 from "../../../public/images/presentation/values-2.png";
import valuesImage3 from "../../../public/images/presentation/values-3.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const PresentationValues = () => {
  const { t } = useTranslation();

  const valuesItems = [
    {
      title: t("presentationValuesItem1Title"),
      text: t("presentationValuesItem1Desc"),
      image: valuesImage1,
    },

    {
      title: t("presentationValuesItem2Title"),
      text: t("presentationValuesItem2Desc"),
      image: valuesImage2,
    },

    {
      title: t("presentationValuesItem3Title"),
      text: t("presentationValuesItem3Desc"),
      image: valuesImage3,
    },
  ];

  return (
    <section className={style.presentation__values}>
      <div className="container">
        <div className={style.presentation__values__wrapper}>
          <h2>{t("presentationValuesTitle")}</h2>

          <ul>
            {valuesItems.map(({ title, text, image }, index) => (
              <li key={index}>
                <div className={style.presentation__image}>
                  <Image src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PresentationValues;
