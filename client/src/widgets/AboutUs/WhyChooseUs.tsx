"use client";

import React from "react";
import style from "./style.module.scss";
import ListImage1 from "../../../public/icons/about/experince.png";
import ListImage2 from "../../../public/icons/about/quality.png";
import ListImage3 from "../../../public/icons/about/communications.png";
import ListImage4 from "../../../public/icons/about/services.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className={style.why_choose_us} id="why-we">
      <div className="container">
        <div className={style.why_choose_us__wrapper}>
          <h2>{t("aboutChooseTitle")}</h2>
          <p>{t("aboutChooseDesc")}</p>

          <ul>
            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage1} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>{t("aboutChooseListItem1Title")}</h3>
                <p>{t("aboutChooseListItem1Desc")}</p>
              </div>
            </li>

            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage2} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>{t("aboutChooseListItem2Title")}</h3>
                <p>{t("aboutChooseListItem2Desc")}</p>
              </div>
            </li>

            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage3} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>{t("aboutChooseListItem3Title")}</h3>
                <p>{t("aboutChooseListItem3Desc")}</p>
              </div>
            </li>

            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage4} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>{t("aboutChooseListItem4Title")}</h3>
                <p>{t("aboutChooseListItem4Desc")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
