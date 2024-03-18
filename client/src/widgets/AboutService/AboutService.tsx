"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { paths } from "@/paths";
import MainImage from "../../../public/images/aboutService/main-image.svg";
import HeadImage from "../../../public/images/aboutService/head.png";
import Image from "next/image";
import Quiz from "@/shared/quiz/Quiz";

interface StageItem {
  image: any;
  title: string;
  text: string;
}

interface ServiceData {
  title: string;
  text: string;
  categoryes: string[];
  types: string[];
  stages: {
    title: string;
    text: string;
    list: StageItem[];
  };
}

const AboutService: React.FC<{ data: ServiceData | null }> = ({ data }) => {
  const componentRef = useRef();

  useEffect(() => {
    // Функция обработки события прокрутки
    const handleScroll = () => {
      // Рассчитываем смещение списка на основе позиции прокрутки
      const scrollOffset = window.scrollY / 5;

      // Применяем смещение к стилям списка
      componentRef.current.style.transform = `translateY(-${scrollOffset}px)`;
    };

    // Добавляем обработчик события прокрутки при монтировании компонента
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик события прокрутки при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {data && (
        <React.Fragment>
          <section className={style.about__service__top}>
            <div className="container">
              <div className={style.about__service__top__wrapper}>
                <aside className={style.about__service__top__left}>
                  <h1>{data.title}</h1>
                  <p>{data.text}</p>

                  <ul>
                    {data.categoryes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <Link href={paths.contacts}>Обсудить проект</Link>
                </aside>

                <aside className={style.about__service__top__left}>
                  <MainImage />
                </aside>
              </div>
            </div>
          </section>

          <section className={style.about__service__types}>
            <div className="container">
              <div className={style.about__service__types__wrapper}>
                <Image src={HeadImage} alt="head" />

                <ul ref={componentRef}>
                  {data.types.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={style.about__service__stages}>
            <div className="container">
              <div className={style.about__service__stages__wrapper}>
                <h2>{data.stages.title}</h2>
                <p>{data.stages.text}</p>

                <ul>
                  {data.stages.list.map(({ image, title, text }, index) => (
                    <li
                      className={style.about__service__stages__item}
                      key={index}
                      data-index={`0${index + 1}`}
                    >
                      <div className={style.about__service__stages__item__top}>
                        <Image src={image} alt="title" />
                        <h3>{title}</h3>
                      </div>

                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Quiz />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AboutService;
