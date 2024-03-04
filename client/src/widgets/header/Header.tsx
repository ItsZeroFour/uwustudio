import React from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Logo from "../../../public/logo.svg";

const Header = () => {
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
            <Link href="/portfolio">Наше портфолио</Link>
          </li>
        </ul>
      </nav>

      <Link className={style.header__logo} href="/">
        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/services">Услуги</Link>
          </li>

          <li>
            <Link href="/about-us">О нас</Link>
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

      <div className={style.header__menu}>
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
    </div>
  );
};

export default Header;
