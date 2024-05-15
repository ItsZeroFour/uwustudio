"use client"

import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import WhoWeAreImage from "../../../public/images/home/who-we-are.png";
import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const { t } = useTranslation();

  return (
    <section className={style.whoweare}>
      <div className="container">
        <div className={style.whoweare__wrapper}>
          <aside className={style.whoweare__main}>
            <h2>{t("whowe")}</h2>

            <div className={style.whoweare__text}>
              <p>{t("whoweText1")}</p>

              <p>{t("whoweText2")}</p>

              <p>{t("whoweText3")}</p>
            </div>

            <div className={style.whoweare__links}>
              <Link href="/services">{t("order")}</Link>
              <Link href="/#contacts">{t("contact")}</Link>
            </div>
          </aside>

          <aside className={style.whoweare__image}>
            <Image src={WhoWeAreImage} alt="statue" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
