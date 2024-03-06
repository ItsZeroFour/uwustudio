"use client";

import React, { useState } from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { paths } from "@/paths";
import HeaderMenu from "@/shared/headerMenu/headerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className={style.header__wrapper}>
      <nav>
        <ul>
          <li className={style.header__contact}>
            <Link href="/#contacts">
              <span>Связаться с нами</span>
            </Link>
          </li>

          <li>
            <Link href={paths.portfolio}>Наше портфолио</Link>
          </li>
        </ul>
      </nav>

      <Link className={style.header__logo} href="/">
        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={paths.services}>Услуги</Link>
          </li>

          <li>
            <Link href={paths.about}>О нас</Link>
          </li>

          <li>
            <div className={style.header__language}>
              <div className={style.current__language}>
                <p>РУС</p>
              </div>
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

      {openMenu && <HeaderMenu />}
    </div>
  );
};

export default Header;
