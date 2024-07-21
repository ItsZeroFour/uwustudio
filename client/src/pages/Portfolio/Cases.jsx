import React from "react";
import style from "./style.module.scss";
import ArrowFromTopToRight from "../../../public/icons/ArrowFromTopToRight.svg";

import case1Image from "../../../public/images/portfolio/portfolio/5.png";
import case2Image from "../../../public/images/portfolio/portfolio/2.png";
import case3Image from "../../../public/images/portfolio/portfolio/3.png";
import case4Image from "../../../public/images/portfolio/portfolio/4.png";
import Image from "next/image";
import Link from "next/link";

const Cases = () => {
  const casesList = [
    {
      title: "Преобразование рекрутингового бизнеса: Лендинг для JobMaster",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Исследование рынка"],
      linkTo: "/jobmaster",
    },

    {
      title: "Симферопольский Политехнический колледж",
      image: case2Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/simfpoliteh",
    },

    {
      title: "Сайт приложения здорового питания Trumpick",
      image: case3Image,
      tags: ["Разработка", "Дизайн", "Анимации"],
      linkTo: "/trumpick",
    },

    {
      title: "Смарт зеркала BEWINTI",
      image: case4Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/bewinti",
    },

    // {
    //   title: "Магазин кроссовок в Симферополе",
    //   image: case1Image,
    //   tags: ["Разработка", "Дизайн", "Проектирование"],
    //   linkTo: "/",
    // },

    // {
    //   title: "Магазин кроссовок в Симферополе",
    //   image: case1Image,
    //   tags: ["Разработка", "Дизайн", "Проектирование"],
    //   linkTo: "/",
    // },
  ];

  return (
    <section className={style.portfolio__cases}>
      <div className="container">
        <div className={style.portfolio__cases__wrapper}>
          <h3 className={style.portfolio__block__title}>
            <ArrowFromTopToRight /> КЕЙСЫ СТУДИИ
          </h3>

          <ul>
            {casesList.map(({ title, image, tags, linkTo }, index) => (
              <li key={index}>
                <Link href={`/portfolio/cases/${linkTo}`}>
                  <Image src={image} />

                  <div>
                    <h2>{title}</h2>

                    <ul>
                      {tags.map((item, index) => (
                        <li key={index * Math.random()}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/portfolio/cases">Все работы студии</Link>
        </div>
      </div>
    </section>
  );
};

export default Cases;
