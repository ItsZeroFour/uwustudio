import React from "react";
import style from "./style.module.scss";
import case1Image from "../../../../public/images/portfolio/portfolio/1.png";
import case2Image from "../../../../public/images/portfolio/portfolio/2.png";
import case3Image from "../../../../public/images/portfolio/portfolio/3.png";
import case4Image from "../../../../public/images/portfolio/portfolio/4.png";
import Image from "next/image";
import Link from "next/link";

const Cases = () => {
  const casesList = [
    {
      title: "Магазин кроссовок в Симферополе",
      image: case1Image,
      tags: ["Разработка", "Дизайн", "Проектирование"],
      linkTo: "/sneakers",
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
    <section className={style.cases}>
      <div className="container">
        <div className={style.cases__wrapper}>
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
        </div>
      </div>
    </section>
  );
};

export default Cases;
