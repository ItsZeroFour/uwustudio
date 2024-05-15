"use client";

import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { paths } from "@/paths";
import stagesImage1 from "../../../public/icons/about/stages-1.png";
import stagesImage2 from "../../../public/icons/about/stages-2.png";
import stagesImage3 from "../../../public/icons/about/stages-3.png";
import stagesImage4 from "../../../public/icons/about/stages-4.png";
import stagesImage5 from "../../../public/icons/about/stages-5.png";
import mainImage from "../../../public/images/about/how-we-work-image.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const HowWeWork = () => {
  const { t } = useTranslation();

  const stages = [
    {
      title: t("aboutWorkStagesItem1Title"),
      text: t("aboutWorkStagesItem1Desc"),
      image: stagesImage1,
    },

    {
      title: t("aboutWorkStagesItem2Title"),
      text: t("aboutWorkStagesItem2Desc"),
      image: stagesImage2,
    },

    {
      title: t("aboutWorkStagesItem3Title"),
      text: t("aboutWorkStagesItem3Desc"),
      image: stagesImage3,
    },

    {
      title: t("aboutWorkStagesItem4Title"),
      text: t("aboutWorkStagesItem4Desc"),
      image: stagesImage4,
    },

    {
      title: t("aboutWorkStagesItem5Title"),
      text: t("aboutWorkStagesItem5Desc"),
      image: stagesImage5,
    },
  ];

  return (
    <section className={style.how_we_work} id="stages">
      <div className="container">
        <div className={style.how_we_work__wrapper}>
          <aside className={style.how_we_work__left}>
            <h2>{t("aboutWorkTitle")}</h2>
            <p>{t("aboutWorkDesc")}</p>
            <Link href={paths.portfolio}>{t("aboutWorkPortfolioButton")}</Link>

            <Image src={mainImage} alt="statue" />
          </aside>
          <aside className={style.how_we_work__right}>
            <ul>
              {stages.map(({ title, text, image }) => (
                <li>
                  <Image src={image} alt={title} />

                  <div className={style.how_we_work__text}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
