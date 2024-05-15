"use client";

import React from "react";
import style from "./style.module.scss";
import ArrowRight from "../../../public/icons/Arrow-Right.svg";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { paths } from "../../paths";

const Documents = () => {
  const { t } = useTranslation();

  const documentsList = [
    {
      title: t("documentsListItem1"),
      link: "",
    },

    {
      title: t("documentsListItem2"),
      link: "",
    },

    {
      title: t("documentsListItem3"),
      link: "",
    },

    {
      title: t("documentsListItem4"),
      link: "",
    },

    {
      title: t("documentsListItem5"),
      link: "",
    },

    {
      title: t("documentsListItem6"),
      link: "",
    },

    {
      title: t("documentsListItem7"),
      link: "",
    },

    {
      title: t("documentsListItem8"),
      link: "",
    },

    {
      title: t("documentsListItem9"),
      link: paths.presentation,
    },
  ];

  const documentsStages = [
    t("documentsStage1"),
    t("documentsStage2"),
    t("documentsStage3"),
    t("documentsStage4"),
    t("documentsStage5"),
    t("documentsStage6"),
    t("documentsStage7"),
  ];

  return (
    <React.Fragment>
      <head>
        <title>Документы - UWUSTUDIO</title>
        <meta
          name="description"
          content="
Документы UWUSTUDIO: реквизиты ИП, договоры, презентации. Подготовка, создание, подписание, хранение, распределение и мониторинг документов."
        />
      </head>
      <section className={style.documents}>
        <div className="container">
          <div className={style.documents__wrapper}>
            <h1>{t("documentsTitle")}</h1>
            <p>{t("documentsDescription")}</p>

            <aside className={style.documents__list}>
              <h2>{t("documentsListTitle")}</h2>

              <ul>
                {documentsList.map(({ title, link }, index) => (
                  <li key={index}>
                    <Link href={link}>
                      <p>{title}</p>
                      <ArrowRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <aside className={style.documents__stages}>
              <h2>{t("documentsSatgesTitle")}</h2>
              <ul>
                {documentsStages.map((item, index) => (
                  <li key={index}>
                    <p>
                      {index + 1 >= 10 ? (
                        <span>{index + 1}</span>
                      ) : (
                        <>
                          0<span>{index + 1}</span>
                        </>
                      )}
                    </p>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Documents;
