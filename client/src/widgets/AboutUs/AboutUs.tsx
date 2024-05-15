"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import AboutImage from "../../../public/images/about/about-image-1.png";
import Link from "next/link";
import { paths } from "@/paths";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

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
    <section className={style.about} ref={componentRef}>
      <div className="container">
        <div className={style.about__wrapper}>
          <aside className={style.about__wrapper__image}>
            <Image src={AboutImage} alt="statue" />
          </aside>

          <aside className={style.about__wrapper__main}>
            <div className={style.about__wrapper__text}>
              <p>{t("aboutUsText1")}</p>
              <p>{t("aboutUsText2")}</p>
              <p>{t("aboutUsText3")}</p>
            </div>

            <div className={style.about__wrapper__progress}>
              <div className={style.about__wrapper__progress_1}>
                <p>{t("aboutProgress1")}</p>
              </div>

              <div className={style.about__wrapper__progress_2}>
                <p>{t("aboutProgress2")}</p>
              </div>

              <div className={style.about__wrapper__progress_3}>
                <p>{t("aboutProgress3")}</p>
              </div>

              <div className={style.about__wrapper__progress_4}>
                <p>{t("aboutProgress4")}</p>
              </div>
            </div>

            <Link href={paths.presentation}>{t("aboutProgressButton")}</Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
