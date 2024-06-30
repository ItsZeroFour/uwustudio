import React from "react";
import style from "./style.module.scss";
import ArrowFromTopToRight from "../../../public/icons/ArrowFromTopToRight.svg";

import case1Image from "../../../public/images/portfolio/portfolio/1.png";
import Image from "next/image";
import Link from "next/link";

const Cases = () => {
  const casesList = [
    {
      title: "Магазин кроссовок в Симферополе",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/",
    },

    {
      title: "Магазин кроссовок в Симферополе",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/",
    },

    {
      title: "Магазин кроссовок в Симферополе",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/",
    },

    {
      title: "Магазин кроссовок в Симферополе",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/",
    },

    {
      title: "Магазин кроссовок в Симферополе",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/",
    },

    {
      title: "Магазин кроссовок в Симферополе",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/",
    },
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
                <Link href={linkTo}>
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

          <Link href="/">Все работы студии</Link>
        </div>
      </div>
    </section>
  );
};

export default Cases;
