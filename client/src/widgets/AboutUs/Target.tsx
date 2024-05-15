"use client";

import React from "react";
import style from "./style.module.scss";
import { paths } from "@/paths";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Target = () => {
  const { t } = useTranslation();

  return (
    <section className={style.target}>
      <div className="container">
        <div className={style.target__wrapper}>
          <h2>{t("aboutTargetTitle")}</h2>
          <p>{t("aboutTargetDesc")}</p>
          <Link href={paths.contacts}>{t("abutTargetButtonContacts")}</Link>
        </div>
      </div>
    </section>
  );
};

export default Target;
