"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { paths } from "@/paths";
import HeaderMenu from "@/shared/headerMenu/headerMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openLangaugeList, setOpenLangaugeList] = useState<boolean>(false);
  const [language, setLanguage] = useState(() => {
    const lang = window.localStorage.getItem("language");

    return lang ? lang : "ru";
  });

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    setLanguage(language);
  };

  useEffect(() => {
    i18n.changeLanguage(language === "en" ? "en" : "ru");
    window.localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openMenu]);

  return (
    <div className={style.header__wrapper}>
      <nav>
        <ul>
          <li className={style.header__contact}>
            <Link href="/#contacts">
              <span>{t("contact")}</span>
            </Link>
          </li>

          <li>
            <Link href={paths.portfolio}>{t("portfolio")}</Link>
          </li>
        </ul>
      </nav>

      <Link className={style.header__logo} href="/">
        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={paths.services}>{t("service")}</Link>
          </li>

          <li>
            <Link href={paths.about}>{t("about")}</Link>
          </li>

          <li>
            <div className={style.header__language}>
              <div
                className={style.current__language}
                onClick={() => setOpenLangaugeList(!openLangaugeList)}
              >
                <p>{language === "en" ? "ENG" : "РУС"}</p>
              </div>

              {openLangaugeList && (
                <ul className={style.header__language__list}>
                  <li>
                    <button
                      onClick={() => {
                        changeLanguage("ru");
                        setOpenLangaugeList(false);
                      }}
                    >
                      РУС
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        changeLanguage("en");
                        setOpenLangaugeList(false);
                      }}
                    >
                      ENG
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div
        className={`${
          !openMenu
            ? `${style.header__menu}`
            : `${style.header__menu} ${style.header__active}`
        }`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
        <div className={style.header__menu__box}></div>
      </div>

      {openMenu && <HeaderMenu openMenu={openMenu} />}
    </div>
  );
};

export default Header;
