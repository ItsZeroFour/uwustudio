import React from "react";
import style from "./style.module.scss";
import Logo from "../../../public/logo-wh.svg";
import Link from "next/link";
import { paths } from "@/paths";
import Socials from "@/shared/socials/Socials";

const Footer = () => {
  return (
    <div className={style.footer__wrapper}>
      <div className={style.footer__main}>
        <aside className={style.footer__left}>
          <Logo />
          <Link href="+79785688535">+7(978) 568-85-35</Link>
          <Link href="mailto:uwustudio@gmail.com">uwustudio@gmail.com</Link>
          <Link href="/authors">Авторы</Link>
        </aside>

        <aside className={style.footer__navs}>
          <nav>
            <ul>
              <li>
                <Link href={paths.home}>Главная</Link>
              </li>

              <li>
                <Link href={paths.about}>О нас</Link>
              </li>

              <li>
                <Link href={paths.portfolio}>Портфолио</Link>
              </li>

              <li>
                <Link href={paths.services}>Услуги</Link>
              </li>

              <li>
                <Link href={paths.faq}>FAQ</Link>
              </li>

              <li>
                <Link href={paths.blog}>Блог</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/#contacts">Контакты</Link>
              </li>

              <li>
                <Link href={paths.support}>Поддержка</Link>
              </li>

              <li>
                <Link href={paths.documents}>Документы</Link>
              </li>

              <li>
                <Link href={paths.stages}>Этапы разработки</Link>
              </li>

              <li>
                <Link href={paths.stages}>Акции</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <aside className={style.footer__socials}>
          <h2>Мы в соц. сетях</h2>

          <Socials />
        </aside>
      </div>

      <div className={style.footer__copyright}>
        <aside>
          <p>© {new Date().getFullYear()} UwUStudio</p>
          <p>ИП Маланин В.А. Все права защищены</p>
        </aside>

        <aside>
          <Link href={paths.policy}>Политика конфеденциальности</Link>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
