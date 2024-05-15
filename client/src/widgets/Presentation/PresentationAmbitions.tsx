"use client";

import React from "react";
import ambitionsImages from "../../../public/images/presentation/ambitions.png";
import style from "./style.module.scss";
import Image from "next/image";
import Socials from "@/shared/socials/Socials";
import { useTranslation } from "react-i18next";

const PresentationAmbitions = () => {
  const { t } = useTranslation();

  return (
    <section className={style.presentation__ambitions}>
      <div className="container">
        <div className={style.presentation__ambitions__wrapper}>
          <aside className={style.presentation__ambitions__left}>
            <p>{t("presentationAmbitionsDesc1")}</p>

            <p>{t("presentationAmbitionsDesc2")}</p>

            <Socials />
          </aside>
          <aside className={style.presentation__ambitions__right}>
            <h2>{t("presentationAmbitionsTitle")}</h2>
            <Image src={ambitionsImages} alt="laptop" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PresentationAmbitions;
