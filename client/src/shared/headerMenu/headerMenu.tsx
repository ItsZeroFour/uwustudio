import React from "react";
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

const HeaderMenu = () => {
  const firstList = [
    {
      image: User,
      title: "О нас",
      link: paths.about,
    },

    {
      image: Category,
      title: "Портфолио",
      link: paths.portfolio,
    },

    {
      image: Monitor,
      title: "Презентация",
      link: paths.presentation,
    },

    {
      image: InfoCircle,
      title: "FAQ",
      link: paths.faq,
    },

    {
      image: Row,
      title: "Блог",
      link: paths.blog,
    },

    {
      image: Bag,
      title: "Услуги",
      link: paths.services,
    },
  ];

  const secondList = [
    {
      image: Copy,
      title: "Документы",
      link: paths.about,
    },

    {
      image: Rocket,
      title: "Связаться с нами",
      link: paths.contacts,
    },

    {
      image: ChartSquare,
      title: "Презентация",
      link: paths.stages,
    },
  ];

  const thirdList = [
    {
      image: Lable,
      title: "Акции",
      link: paths.stock,
    },

    {
      image: EmojiSmile,
      title: "Отзывы о нас",
      link: paths.reviews,
    },

    {
      image: Lamp,
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
                <li>
                  <Link href={paths.about}>
                    <div className={style.menu__image}>
                      <User />
                    </div>

                    <p>О нас</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.menu__top__right}></div>
          </aside>
          <aside className={style.menu__bottom}>
            <div className={style.menu__bottom__main}></div>
            <div className={style.menu__bottom__other}></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeaderMenu;
