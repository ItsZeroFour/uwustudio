"use client";

import React from "react";
import style from "../style.module.scss";
import cocacolaImage from "../../../../public/images/blog/unique-brand/cocacola.png";
import legoImage from "../../../../public/images/blog/unique-brand/lego.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const UniqueBrand = () => {
  const { t } = useTranslation();

  const contents = [
    {
      title: t("blog3Content1"),
      link: "#definition",
    },

    {
      title: t("blog3Content2"),
      link: "#study",
    },

    {
      title: t("blog3Content3"),
      link: "#brand-definition",
    },

    {
      title: t("blog3Content4"),
      link: "#unique-style",
    },

    {
      title: t("blog3Content5"),
      link: "#communication",
    },

    {
      title: t("blog3Content6"),
      link: "#legend-develop",
    },

    {
      title: t("blog3Content7"),
      link: "#reputation",
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
              <h1>{t("blog3Title")}</h1>
              <p>{t("blog3Text")}</p>
              <p>12.05.2024</p>
            </aside>

            <aside className={style.blog__head__right}>
              <h2>{t("blog3Content")}</h2>

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
            <ul id="definition">
              <li>
                <h3>{t("blog3DefinitionTitle")}</h3>
              </li>

              <li>
                <p>
                  <i>{t("blog3DefinitionText")}</i>
                </p>
              </li>

              <li>
                <p>
                  <i>{t("blog3DefinitionSecondTitle")}</i>
                </p>
              </li>

              <li>
                <p>{t("blog3DefinitionSecondText")}</p>
              </li>

              <li>
                <p>
                  <i>{t("blog3BrandDefinitionQuestions")}</i>
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog3BrandDefinitionQuestion1")}</span>:{" "}
                  {t("blog3BrandDefinitionAnswer1")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog3BrandDefinitionQuestion2")}</span>:{" "}
                  {t("blog3BrandDefinitionAnswer2")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog3BrandDefinitionQuestion3")}</span>:{" "}
                  {t("blog3BrandDefinitionAnswer3")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog3BrandDefinitionQuestion4")}</span>:{" "}
                  {t("blog3BrandDefinitionAnswer4")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog3BrandDefinitionQuestion5")}</span>:{" "}
                  {t("blog3BrandDefinitionAnswer5")}
                </p>
              </li>

              <li>
                <p>{t("blog3BrandDefinitionConclusion")}</p>
              </li>
            </ul>

            <ul id="study">
              <li>
                <h3>{t("studyTitle")}</h3>
              </li>

              <li>
                <p>
                  <i>{t("studyText")}</i>
                </p>
              </li>

              <li>
                <p>
                  <i>{t("studyQuestions")}</i>
                </p>
              </li>

              <li>
                <p>
                  <span>{t("studyQuestion1")}</span>: {t("studyAnswer1")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("studyQuestion2")}</span>: {t("studyAnswer2")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("studyQuestion3")}</span>: {t("studyAnswer3")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("studyQuestion4")}</span>: {t("studyAnswer4")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("studyQuestion5")}</span>: {t("studyAnswer5")}
                </p>
              </li>

              <li>
                <p>{t("studyConclusion")}</p>
              </li>
            </ul>

            <ul id="brand-definition">
              <li>
                <h3>{t("brandDefinitionTitle")}</h3>
              </li>

              <li>
                <p>
                  <i>{t("brandDefinitionText")}</i>
                </p>
              </li>

              <li>
                <p>
                  <i>{t("brandDefinitionQuestions")}</i>
                </p>
              </li>

              <li>
                <p>
                  <span>{t("brandDefinitionQuestion1")}</span>:{" "}
                  {t("brandDefinitionAnswer1")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("brandDefinitionQuestion2")}</span>:{" "}
                  {t("brandDefinitionAnswer2")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("brandDefinitionQuestion3")}</span>:{" "}
                  {t("brandDefinitionAnswer3")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("brandDefinitionQuestion4")}</span>:{" "}
                  {t("brandDefinitionAnswer4")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("brandDefinitionQuestion5")}</span>:{" "}
                  {t("brandDefinitionAnswer5")}
                </p>
              </li>

              <li>
                <p>{t("brandDefinitionConclusion")}</p>
              </li>
            </ul>

            <ul id="unique-style">
              <li>
                <h3>{t("uniqueStyleTitle")}</h3>
              </li>

              <li>
                <p>
                  <i>{t("uniqueStyleText")}</i>
                </p>
              </li>

              <li>
                <p>{t("uniqueStyleStep1")}</p>
              </li>

              <li>
                <p>{t("uniqueStyleStep2")}</p>
              </li>

              <li>
                <p>{t("uniqueStyleStep3")}</p>
              </li>

              <li>
                <p>{t("uniqueStyleStep4")}</p>
              </li>

              <li>
                <p>{t("uniqueStyleConclusion")}</p>
              </li>
            </ul>

            <ul id="communication">
              <li>
                <h3>{t("communicationTitle")}</h3>
              </li>

              <li>
                <p>{t("communicationText")}</p>
              </li>

              <li>
                <p>
                  <i>{t("communicationKeyAspects")}</i>
                </p>
              </li>

              <li>
                <p>
                  <span>{t("communicationAspect1")}</span>:{" "}
                  {t("communicationAspect1Description")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("communicationAspect2")}</span>:{" "}
                  {t("communicationAspect2Description")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("communicationAspect3")}</span>:{" "}
                  {t("communicationAspect3Description")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("communicationAspect4")}</span>:{" "}
                  {t("communicationAspect4Description")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("communicationAspect5")}</span>:{" "}
                  {t("communicationAspect5Description")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("communicationAspect6")}</span>:{" "}
                  {t("communicationAspect6Description")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("communicationAspect7")}</span>:{" "}
                  {t("communicationAspect7Description")}
                </p>
              </li>

              <li>
                <p>{t("communicationConclusion")}</p>
              </li>

              <li>
                <p>{t("communicationExample1")}</p>
              </li>

              <li>
                <p>{t("communicationExample2")}</p>
              </li>

              <li>
                <p>{t("communicationExample3")}</p>
              </li>

              <li>
                <Image src={cocacolaImage} alt="Coca-Cola" />
              </li>
            </ul>

            <ul id="legend-develop">
              <li>
                <h3>{t("legendDevelopTitle")}</h3>
              </li>
              <li>
                <p>
                  <i>{t("legendDevelopText")}</i>
                </p>
              </li>
              <li>
                <p>
                  <span>{t("legendDevelopStep1")}: </span>
                  {t("legendDevelopStep1Description")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("legendDevelopStep2")}: </span>
                  {t("legendDevelopStep2Description")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("legendDevelopStep3")}: </span>
                  {t("legendDevelopStep3Description")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("legendDevelopStep4")}: </span>
                  {t("legendDevelopStep4Description")}
                </p>
              </li>
              <li>
                <p>
                  <span>{t("legendDevelopStep5")}: </span>
                  {t("legendDevelopStep5Description")}
                </p>
              </li>
              <li>
                <p>{t("legendDevelopConclusion")}</p>
              </li>
              <li>
                <p>{t("legendDevelopExample")}</p>
              </li>
              <li>
                <Image src={legoImage} alt={t("legoImageAlt")} />
              </li>
              <li>
                <p>{t("legoExampleText")}</p>
              </li>
              <li>
                <p>{t("legoExampleText2")}</p>
              </li>
              <li>
                <p>{t("legoExampleText3")}</p>
              </li>
            </ul>

            <ul id="reputation">
              <li>
                <h3>{t("reputationTitle")}</h3>
              </li>

              <li>
                <p>
                  <span>{t("reputationSubtitle")}</span> -{" "}
                  {t("reputationSubtitleDescription")}
                </p>
              </li>

              <li>
                <p>{t("reputationImportance1")}</p>
              </li>

              <li>
                <p>{t("reputationImportance2")}</p>
              </li>

              <li>
                <p>{t("reputationImportance3")}</p>
              </li>
            </ul>

            <ul>
              <li>
                <h3>{t("blog3conclusionTitle")}</h3>
              </li>
              <li>
                <p>{t("blog3conclusionText1")}</p>
              </li>
              <li>
                <p>{t("blog3conclusionText2")}</p>
              </li>
              <li>
                <p>{t("blog3conclusionText3")}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UniqueBrand;
