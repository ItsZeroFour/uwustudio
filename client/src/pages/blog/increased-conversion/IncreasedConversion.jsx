"use client";

import React from "react";
import style from "../style.module.scss";
import percentsImage from "../../../../public/images/blog/increased-conversion/percents.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const IncreasedConversion = () => {
  const { t } = useTranslation();

  const contents = [
    {
      title: t("blog1ContentItem1"),
      link: "#speed",
    },

    {
      title: t("blog1ContentItem2"),
      link: "#design",
    },

    {
      title: t("blog1ContentItem3"),
      link: "#mobile",
    },

    {
      title: t("blog1ContentItem4"),
      link: "#content",
    },

    {
      title: t("blog1ContentItem5"),
      link: "#confidence",
    },
  ];

  return (
    <React.Fragment>
      <head>
        <title>Как создать уникальный бренд - UWUSTUDIO</title>
        <meta
          name="description"
          content="Как создать уникальный бренд: секреты брендинга для малого бизнеса. Брендинг играет ключевую роль в успехе любого бизнеса, особенно для малых компаний, стремящихся выделиться на рынке и привлечь внимание своей целевой аудитории. В этом посте мы рассмотрим основные секреты брендинга, которые помогут малым бизнесам создать уникальный и привлекательный бренд, способный конкурировать в современной бизнес-среде."
        />
      </head>
      <section className={style.blog__head}>
        <div className="container">
          <div className={style.blog__head__wrapper}>
            <aside className={style.blog__head__left}>
              <h1>{t("blog1Title")}</h1>
              <p>{t("blog1Text")}</p>
              <p>11.04.2024</p>
            </aside>

            <aside className={style.blog__head__right}>
              <h2>{t("blog1Content")}</h2>

              <ul>
                {contents.map(({ title, link }, index) => (
                  <li key={index}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={style.blog__main}>
        <div className="container">
          <div className={style.blog__main__wrapper}>
            <ul id="speed">
              <li>
                <h3>{t("blog1SpeedTitle")}</h3>
              </li>
              <li>
                <p>{t("blog1SpeedText")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog1SpeedText2Bold")}</span>:{" "}
                  {t("blog1SpeedText2")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog1SpeedText3Bold")}</span>:{" "}
                  {t("blog1SpeedText3")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog1SpeedText4Bold")}</span>:{" "}
                  {t("blog1SpeedText4")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog1SpeedText5Bold")}</span>:{" "}
                  {t("blog1SpeedText5")}
                </p>
              </li>

              <li>
                <p>{t("blog1SpeedText6")}</p>
              </li>

              <li>
                <Image src={percentsImage} alt="percentage" />
              </li>

              <li>
                <p>{t("blog1SpeedText7")}</p>
              </li>
            </ul>

            <ul id="design">
              <li>
                <h3>{t("blog1designTitle")}</h3>
              </li>
              <li>
                <p>{t("blog1designText")}</p>
              </li>
              <li>
                <p>
                  <span>{t("blog1designText1Bold")}</span>:{" "}
                  {t("blog1designText1")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1designText2Bold")}</span>:{" "}
                  {t("blog1designText2")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1designText3Bold")}</span>:{" "}
                  {t("blog1designText3")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1designText4Bold")}</span>:{" "}
                  {t("blog1designText4")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1designText5Bold")}</span>:{" "}
                  {t("blog1designText5")}
                </p>
              </li>
              <li>
                <p>{t("blog1designText6")}</p>
              </li>
            </ul>

            <ul id="mobile">
              <li>
                <h3>{t("blog1mobileTitle")}</h3>
              </li>
              <li>
                <p>{t("blog1mobileText")}</p>
              </li>
              <li>
                <p>
                  <span>{t("blog1mobileText1Bold")}</span>:{" "}
                  {t("blog1mobileText1")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1mobileText2Bold")}</span>:{" "}
                  {t("blog1mobileText2")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1mobileText3Bold")}</span>:{" "}
                  {t("blog1mobileText3")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1mobileText4Bold")}</span>:{" "}
                  {t("blog1mobileText4")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1mobileText5Bold")}</span>:{" "}
                  {t("blog1mobileText5")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1mobileText6Bold")}</span>:{" "}
                  {t("blog1mobileText6")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1mobileText7Bold")}</span>:{" "}
                  {t("blog1mobileText7")}
                </p>
              </li>
            </ul>

            <ul id="content">
              <li>
                <h3>{t("blog1contentTitle")}</h3>
              </li>
              <li>
                <p>{t("blog1contentText")}</p>
              </li>
              <li>
                <p>
                  <span>{t("blog1contentText1Bold")}</span>:{" "}
                  {t("blog1contentText1")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1contentText2Bold")}</span>:{" "}
                  {t("blog1contentText2")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1contentText3Bold")}</span>:{" "}
                  {t("blog1contentText3")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1contentText4Bold")}</span>:{" "}
                  {t("blog1contentText4")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1contentText5Bold")}</span>:{" "}
                  {t("blog1contentText5")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("blog1contentText6Bold")}</span>:{" "}
                  {t("blog1contentText6")}
                </p>
              </li>
            </ul>

            <ul id="confidence">
              <li>
                <h3>{t("blog1confidenceTitle")}</h3>
              </li>
              <li>
                <p>{t("blog1confidenceText1")}</p>
              </li>
              <li>
                <p>{t("blog1confidenceText2")}</p>
              </li>
              <li>
                <p>{t("blog1confidenceText3")}</p>
              </li>
              <li>
                <p>{t("blog1confidenceText4")}</p>
              </li>
              <li>
                <p>{t("blog1confidenceText5")}</p>
              </li>
              <li>
                <p>{t("blog1confidenceText6")}</p>
              </li>
              <li>
                <p>{t("blog1confidenceText7")}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IncreasedConversion;
