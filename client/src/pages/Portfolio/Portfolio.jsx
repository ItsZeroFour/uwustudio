"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import headImage1 from "../../../public/images/portfolio/head/1.png";
import headImage2 from "../../../public/images/portfolio/head/2.png";
import headImage3 from "../../../public/images/portfolio/head/3.png";
import headImage4 from "../../../public/images/portfolio/head/4.png";
import headImage5 from "../../../public/images/portfolio/head/5.png";
import headImage6 from "../../../public/images/portfolio/head/6.png";

import Cases from "./Cases";

import ArrowRight from "../../../public/icons/Arrow-Right.svg";
import ArrowFromTopToRight from "../../../public/icons/ArrowFromTopToRight.svg";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { getLastBlogItems } from "@/data/blog";
import { paths } from "@/paths";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { t } = useTranslation();
  const lastBlogItems = getLastBlogItems(t);

  const servicesItems = [
    {
      title: t("servicesDevelop"),
      description: t("servicesDevelopDesc"),
      link: "about-service/develop-website",
    },

    {
      title: t("servicesDesign"),
      description: t("servicesDesignDesc"),
      link: "about-service/design",
    },

    {
      title: t("servicesSEO"),
      description: t("servicesSEODesc"),
      link: "about-service/seo",
    },

    {
      title: t("servicesSocial"),
      description: t("servicesSocialDesc"),
      link: "about-service/socials",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <React.Fragment>
      <head>
        <title>Портфолио - UWUSTUDIO</title>
        <meta name="description" content="Портфолио UWUSTUDIO: примеры наших работ в веб-дизайне, графическом дизайне, брендинге и разработке логотипов. Узнайте больше о наших проектах в Крыму и Симферополе." />
        <meta name="keywords" content="портфолио, примеры работ, дизайн проекты, веб-дизайн проекты, графический дизайн проекты, брендинг проекты, разработка логотипов, uwustudio, Крым, Симферополь, дизайн студия Крым, веб-дизайн Крым, графический дизайн Крым, брендинг Крым, дизайн студия Симферополь, веб-дизайн Симферополь, графический дизайн Симферополь, брендинг Симферополь" />
      </head>
      <section className={style.portfolio__head}>
        <div className="container">
          <div className={style.portfolio__head__top}>
            <h1>Наши реализованные проекты</h1>

            <div>
              <p>
                Добро пожаловать в наше портфолио! Здесь вы найдете примеры
                наших работ, демонстрирующие наше мастерство и творческий подход
                к каждому проекту.
              </p>

              <ul>
                <li>Разработка</li>
                <li>Дизайн</li>
                <li>Продвижение</li>
              </ul>
            </div>
          </div>

          <div className={style.portfolio__head__images}>
            <Image src={headImage1} alt="portfolio head image" />

            <div className={style.portfolio__head__images__block1}>
              <Image src={headImage2} alt="portfolio head image 2" />
              <Image src={headImage3} alt="portfolio head image 3" />
            </div>

            <div className={style.portfolio__head__images__block2}>
              <Image src={headImage4} alt="portfolio head image 4" />
              <Image src={headImage5} alt="portfolio head image 5" />
            </div>

            <Image src={headImage6} alt="portfolio head image 6" />
          </div>
        </div>
      </section>

      <section className={style.portfolio__services}>
        <div className="container">
          <div className={style.portfolio__services__wrapper}>
            <h3 className={style.portfolio__block__title}>
              <ArrowFromTopToRight /> НАШИ УСЛУГИ
            </h3>

            <ul>
              {servicesItems.map(({ title, description, link }, index) => (
                <li
                  key={title}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={link}>
                    <h2>{title}</h2>
                    <p style={{ opacity: hoveredItem === index ? 1 : 0 }}>
                      {description}
                    </p>
                    <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Cases />

      <section className={style.blog}>
        <div className="container">
          <div className={style.blog__wrapper}>
            <ul>
              {lastBlogItems.map(
                ({ title, text, date, imagePath, link }, index) => (
                  <li key={index}>
                    <Link href={`/blog/${link}`}>
                      <Image src={imagePath} alt={title} />

                      <h3>{title}</h3>
                      <p>
                        {text.length > 300 ? `${text.slice(0, 300)}...` : text}
                      </p>
                      <h4>{date}</h4>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className={style.portfolio__getintouch}>
        <div className="container">
          <div className={style.portfolio__getintouch__wrapper}>
            <h4>СВЯЖИСЬ С НАМИ</h4>
            <h2>Давайте воплатим Ваши идеи в реальность!</h2>
            <Link href={paths.contacts}>Связаться с нами</Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
