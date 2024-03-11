"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import PortfolioImage1 from "../../../public/images/blog/blog-image-1.png";
import Image from "next/image";

const Portfolio = () => {
  const listRef = useRef<HTMLUListElement>();
  const listRef2 = useRef<HTMLUListElement>();

  const portfolioList = [
    {
      image: PortfolioImage1,
      title: "Portfolio",
      link: "/",
    },

    {
      image: PortfolioImage1,
      title: "Portfolio",
      link: "/",
    },

    {
      image: PortfolioImage1,
      title: "Portfolio",
      link: "/",
    },

    {
      image: PortfolioImage1,
      title: "Portfolio",
      link: "/",
    },

    {
      image: PortfolioImage1,
      title: "Portfolio",
      link: "/",
    },

    {
      image: PortfolioImage1,
      title: "Portfolio",
      link: "/",
    },

    {
      image: PortfolioImage1,
      title: "Portfolio",
      link: "/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Получаем текущую позицию прокрутки
      const scrollY = window.scrollY;

      if (listRef.current) {
        listRef.current.style.transform = `translateX(-${scrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Получаем текущую позицию прокрутки
      const scrollY = window.scrollY;

      if (listRef2.current) {
        listRef2.current.style.transform = `translateX(${scrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <section className={style.portfolio__top}>
        <div className="container">
          <div className={style.portfolio__top__wrapper}>
            <h1>Наше портфолио</h1>
            <p>
              Здесь вы найдете эстетически привлекательные дизайны,
              инновационные технологические решения и успешные стратегии
              привлечения аудитории. Наше портфолио отражает нашу способность не
              только понимать уникальные потребности каждого клиента, но и
              трансформировать их в результативные веб-проекты. Мы приглашаем
              вас окунуться в этот цифровой мир, где каждый элемент несет смысл
              и цель. Познакомьтесь с нашим опытом, дайте себе вдохновение, и
              давайте вместе создадим ваше следующее веб-приключение!
            </p>
          </div>
        </div>
      </section>
      <section className={style.portfolio__list}>
        <ul ref={listRef}>
          {portfolioList.map(({ image }, index) => (
            <li key={index}>
              <Image src={image} alt={`portfolio image ${index + 1}`} />
            </li>
          ))}
        </ul>

        <ul ref={listRef2}>
          {portfolioList.map(({ image }, index) => (
            <li key={index}>
              <Image src={image} alt={`portfolio image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
