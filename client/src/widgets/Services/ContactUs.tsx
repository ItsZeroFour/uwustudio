"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import StatueImage from "../../../public/images/services/services-statue.png";
import { paths } from "@/paths";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section className={style.services__contacts}>
      <div className="container">
        <div className={style.services__contacts__wrapper}>
          <aside className={style.servies__contacts__image}>
            <Image src={StatueImage} alt="statue" />
          </aside>

          <aside className={style.servies__contacts__text}>
            <h3>{t("servicesContactsTitle")}</h3>
            <p>{t("servicesContactsDesc")}</p>
            <Link href={paths.contacts}>{t("servicesContactsButton")}</Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
