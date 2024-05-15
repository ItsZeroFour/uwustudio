"use client";

import React from "react";
import style from "../style.module.scss";
import airbnbImage from "../../../../public/images/blog/small-business-movement/airbnb.png";
import bufferImage from "../../../../public/images/blog/small-business-movement/buffer.png";
import mozImage from "../../../../public/images/blog/small-business-movement/moz.png";
import nikeImage from "../../../../public/images/blog/small-business-movement/nike.webp";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SmallBusinessMovement = () => {
  const { t } = useTranslation();

  const contents = [
    {
      title: t("blog2Content1"),
      link: "#create",
    },

    {
      title: t("blog2Content2"),
      link: "#content",
    },

    {
      title: t("blog2Content3"),
      link: "#optimization",
    },

    {
      title: t("blog2Content4"),
      link: "#social",
    },

    {
      title: t("blog2Content5"),
      link: "#ad",
    },

    {
      title: t("blog2Content6"),
      link: "#conclusion",
    },
  ];

  return (
    <React.Fragment>
      <head>
        <title>
          5 стратегий эффективного онлайн-продвижения для малого бизнеса - UWUSTUDIO
        </title>
        <meta
          name="description"
          content="5 стратегий эффективного онлайн-продвижения для малого бизнеса. В наше время онлайн-продвижение стало неотъемлемой частью успешного бизнеса. Малым компаниям особенно важно освоить эффективные стратегии онлайн-продвижения для конкурентного выделения на рынке и привлечения целевой аудитории. В этой статье мы рассмотрим пять ключевых стратегий, которые помогут вашему малому бизнесу процветать в онлайн-среде. От создания привлекательного веб-сайта до оптимизации под поисковые системы и использования социальных медиа — давайте вместе узнаем, какие шаги сделать для успешного онлайн-присутствия вашего бизнеса."
        />
      </head>
      <section className={style.blog__head}>
        <div className="container">
          <div className={style.blog__head__wrapper}>
            <aside className={style.blog__head__left}>
              <h1>{t("blog2Title")}</h1>
              <p>{t("blog2Text")}</p>
              <p>17.04.2024</p>
            </aside>

            <aside className={style.blog__head__right}>
              <h2>{t("blog2Content")}</h2>

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
            <ul id="create">
              <li>
                <h3>{t("blog2StrategyTitle")}</h3>
              </li>

              <li>
                <p>{t("blog2StrategyText")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2StrategySubheading1")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2StrategySubheading1Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2StrategySubheading2")}</span>
                </p>
              </li>

              <li>
                <p>
                  <i>{t("blog2StrategySubheading2Text")}</i>
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2StrategySubheading3")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2StrategySubheading3Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2StrategySubheading4")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2StrategySubheading4Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2StrategyExamples")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2StrategyExamplesText")}</p>
              </li>

              <li>
                <Image src={airbnbImage} alt="airbnb" />
              </li>
            </ul>

            <ul id="content">
              <li>
                <h3>{t("blog2ContentTitle")}</h3>
              </li>

              <li>
                <p>{t("blog2ContentText")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2ContentSubheading1")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2ContentSubheading1Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2ContentSubheading2")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2ContentSubheading2Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2ContentSubheading3")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2ContentSubheading3Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2ContentSubheading4")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2ContentSubheading4Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2ContentSubheading5")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2ContentSubheading5Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2ContentSubheading6")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2ContentSubheading6Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2ContentExamples")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2ContentExamplesText")}</p>
              </li>

              <li>
                <Image src={bufferImage} alt="buffer" />
              </li>
            </ul>

            <ul id="optimization">
              <li>
                <h3>{t("blog2Strategy3Title")}</h3>
              </li>

              <li>
                <p>{t("blog2SeoImportanceText")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SeoImportanceSubtitle")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2SeoPrinciplesText")}</p>
              </li>

              <li>
                <p>
                  <i>{t("blog2SeoPrinciplesSubtitle")}</i>
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SeoPrinciple1Bold")}</span>:{" "}
                  {t("blog2SeoPrinciple1Text")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SeoPrinciple2Bold")}</span>:{" "}
                  {t("blog2SeoPrinciple2Text")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SeoPrinciple3Bold")}</span>:{" "}
                  {t("blog2SeoPrinciple3Text")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SeoPrinciple4Bold")}</span>:{" "}
                  {t("blog2SeoPrinciple4Text")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SeoToolsMethodsSubtitle")}</span>
                </p>
              </li>

              <li>
                <p>
                  <i>{t("blog2SeoToolsMethodsSubtitle2")}</i>
                </p>
              </li>

              <li>
                <p>{t("blog2SeoToolsMethodsText1")}</p>
              </li>

              <li>
                <p>{t("blog2SeoToolsMethodsText2")}</p>
              </li>

              <li>
                <p>{t("blog2SeoToolsMethodsText3")}</p>
              </li>

              <li>
                <p>{t("blog2SuccessfulCasesText")}</p>
              </li>

              <li>
                <p>{t("blog2SuccessfulCasesExampleText")}</p>
              </li>

              <li>
                <Image src={mozImage} alt="moz" />
              </li>
            </ul>

            <ul id="social">
              <li>
                <h3>{t("blog2Strategy4Title")}</h3>
              </li>

              <li>
                <p>{t("blog2SocialMediaImportanceText")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SocialMediaRoleSubtitle")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2SocialMediaRoleText")}</p>
              </li>

              <li>
                <p>
                  <span>
                    <i>{t("blog2EffectiveStrategiesSubtitle")}</i>
                  </span>
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2EffectiveStrategy1Bold")}</span>:{" "}
                  {t("blog2EffectiveStrategy1Text")}
                </p>
              </li>

              <li>
                <p>
                  <span>{t("blog2EffectiveStrategy2Bold")}</span>:{" "}
                  {t("blog2EffectiveStrategy2Text")}
                </p>
              </li>

              <li>
                <p>{t("blog2EffectiveStrategy3Text")}</p>
              </li>

              <li>
                <p>
                  <span>{t("blog2SuccessfulCampaignsSubtitle")}</span>
                </p>
              </li>

              <li>
                <p>{t("blog2SuccessfulCampaignsText")}</p>
              </li>

              <li>
                <Image src={nikeImage} alt="nike instagram" />
              </li>
            </ul>

            <ul id="ad">
              <li>
                <h3>{t("blog2Strategy5Title")}</h3>
              </li>

              <li>
                <p>{t("blog2InternetAdvertisingText")}</p>
              </li>

              <li>
                <p>{t("blog2InternetAdvertisingTypesText")}</p>
              </li>

              <li>
                <p>{t("blog2ChoosingStrategyText")}</p>
              </li>

              <li>
                <p>{t("blog2IncreasingEffectivenessText")}</p>
              </li>

              <li>
                <p>{t("blog2SuccessfulCampaignsText")}</p>
              </li>
            </ul>

            <ul id="conclusion">
              <li>
                <h3>{t("blog2ConclusionTitle")}</h3>
              </li>

              <li>
                <p>{t("blog2ConclusionText1")}</p>
              </li>

              <li>
                <p>{t("blog2ConclusionText2")}</p>
              </li>

              <li>
                <p>{t("blog2ConclusionText3")}</p>
              </li>

              <li>
                <p>{t("blog2ConclusionText4")}</p>
              </li>

              <li>
                <p>{t("blog2ConclusionText5")}</p>
              </li>

              <li>
                <p>{t("blog2ConclusionText6")}</p>
              </li>

              <li>
                <p>{t("blog2ConclusionText7")}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SmallBusinessMovement;
