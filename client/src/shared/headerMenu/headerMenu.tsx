import React, { useEffect } from "react";
import style from "./style.module.scss";
import User from "../../../public/icons/menu/User.svg";

import Category from "../../../public/icons/menu/Category.svg";
import Monitor from "../../../public/icons/menu/Monitor.svg";
import InfoCircle from "../../../public/icons/menu/Info-Circle.svg";
import Row from "../../../public/icons/menu/Row.svg";
import Bag from "../../../public/icons/menu/Bag.svg";
import Copy from "../../../public/icons/menu/Copy.svg";
import Rocket from "../../../public/icons/menu/Rocket.svg";
import ChartSquare from "../../../public/icons/menu/Chart-Square.svg";
import Lable from "../../../public/icons/menu/Lable.svg";
import EmojiSmile from "../../../public/icons/menu/Emoji-Smile.svg";
import Lamp from "../../../public/icons/menu/Lamp.svg";

import Link from "next/link";
import { paths } from "@/paths";
import Socials from "../socials/Socials";

const HeaderMenu = () => {
  const firstList = [
    {
      image: <User />,
      title: "О нас",
      link: paths.about,
    },

    {
      image: <Category />,
      title: "Портфолио",
      link: paths.portfolio,
    },

    {
      image: <Monitor />,
      title: "Презентация",
      link: paths.presentation,
    },

    {
      image: <InfoCircle />,
      title: "FAQ",
      link: paths.faq,
    },

    {
      image: <Row />,
      title: "Блог",
      link: paths.blog,
    },

    {
      image: <Bag />,
      title: "Услуги",
      link: paths.services,
    },
  ];

  const secondList = [
    {
      image: <Copy />,
      title: "Документы",
      link: paths.about,
    },

    {
      image: <Rocket />,
      title: "Связаться с нами",
      link: paths.contacts,
    },

    {
      image: <ChartSquare />,
      title: "Презентация",
      link: paths.stages,
    },
  ];

  const thirdList = [
    {
      image: <Lable />,
      title: "Акции",
      link: paths.stock,
    },

    {
      image: <EmojiSmile />,
      title: "Отзывы о нас",
      link: paths.reviews,
    },

    {
      image: <Lamp />,
      title: "Почему мы?",
      link: paths.whyWe,
    },
  ];

  return (
    <section className={style.menu}>
      <div className="container">
        <div className={style.menu__wrapper}>
          <aside className={style.menu__top}>
            <div className={style.menu__top__left}>
              <ul>
                {firstList.slice(0, 3).map(({ image, title, link }) => (
                  <li className={style.menu__item} key={title}>
                    <Link href={link}>
                      <div className={style.menu__image}>{image}</div>

                      <p>{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>

              <ul>
                {firstList
                  .slice(3, firstList.length)
                  .map(({ image, title, link }) => (
                    <li className={style.menu__item} key={title}>
                      <Link href={link}>
                        <div className={style.menu__image}>{image}</div>

                        <p>{title}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={style.menu__top__right}>
              <ul>
                {secondList.map(({ image, title, link }) => (
                  <li className={style.menu__item} key={title}>
                    <Link href={link}>
                      <div className={style.menu__image}>{image}</div>

                      <p>{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <aside className={style.menu__bottom}>
            <div className={style.menu__bottom__main}>
              <ul>
                {thirdList.slice(0, 2).map(({ image, title, link }) => (
                  <li className={style.menu__item} key={title}>
                    <Link href={link}>
                      <div className={style.menu__image}>{image}</div>

                      <p>{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>

              <ul>
                {thirdList.slice(2, 3).map(({ image, title, link }) => (
                  <li className={style.menu__item} key={title}>
                    <Link href={link}>
                      <div className={style.menu__image}>{image}</div>

                      <p>{title}</p>
                    </Link>
                  </li>
                ))}

                <li>
                  <Link href={paths.services}>Заказать</Link>
                </li>
              </ul>
            </div>
            <div className={style.menu__bottom__other}>
              <Socials />
              <Link className={style.menu__bottom__policy} href={paths.policy}>
                Политика конфеденциальности
              </Link>
              <Link href="mailto:uwustudio@gmail.com">uwustudio@gmail.com</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeaderMenu;
