"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import AdvantagesIamge from "../../../public/images/home/advantages-image.png";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation();

  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <aside className={style.advantages__image}>
            <Image src={AdvantagesIamge} alt="advantages statue" className={style.adv_statue_iamge} />
          </aside>

          <aside className={style.advantages__list}>
            <h2>{t("ourAdvantages")}</h2>

            <ul>
              <li>{t("ourAdvantagesText1")}</li>
              <li>{t("ourAdvantagesText2")}</li>
              <li>{t("ourAdvantagesText3")}</li>
              <li>{t("ourAdvantagesText4")}</li>
              <li>{t("ourAdvantagesText5")}</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
