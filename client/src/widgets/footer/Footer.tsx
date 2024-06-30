"use client";

import React from "react";
import style from "./style.module.scss";
import Logo from "../../../public/logo-wh.svg";
import Link from "next/link";
import { paths } from "@/paths";
import Socials from "@/shared/socials/Socials";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={style.footer__wrapper}>
      <div className={style.footer__main}>
        <aside className={style.footer__left}>
          <Logo className={style.footer__logo} />
          <Link href="tel:+79785688535">+7(978) 568-85-35</Link>
          <Link href="mailto:uwustudio@gmail.com">uwustudio@gmail.com</Link>
          <Link href="/authors">{t("footerAuthors")}</Link>
        </aside>

        <aside className={style.footer__navs}>
          <nav>
            <ul>
              <li>
                <Link href={paths.home}>{t("footerHome")}</Link>
              </li>

              <li>
                <Link href={paths.about}>{t("about")}</Link>
              </li>

              <li>
                <Link href={paths.portfolio}>{t("portfolio")}</Link>
              </li>

              <li>
                <Link href={paths.services}>{t("service")}</Link>
              </li>

              <li>
                <Link href={paths.faq}>FAQ</Link>
              </li>

              <li>
                <Link href={paths.blog}>{t("blog")}</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/#contacts">{t("footerContacts")}</Link>
              </li>

              <li>
                <Link href={paths.support}>{t("support")}</Link>
              </li>

              <li>
                <Link href={paths.documents}>{t("documents")}</Link>
              </li>

              <li>
                <Link href={paths.stages}>{t("footerStages")}</Link>
              </li>

              <li>
                <Link href={paths.stock}>{t("sales")}</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <aside className={style.footer__socials}>
          <h2>{t("footerSocials")}</h2>

          <Socials />
        </aside>
      </div>

      <div className={style.footer__copyright}>
        <aside>
          <p>© {new Date().getFullYear()} UwUStudio</p>
          <p>{t("footerIP")}</p>
        </aside>

        <aside>
          <Link href={paths.policy}>{t("policy")}</Link>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
