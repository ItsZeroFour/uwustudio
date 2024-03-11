"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import AboutImage from "../../../public/images/about/about-image-1.png";
import Link from "next/link";
import { paths } from "@/paths";

const About = () => {
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
              <p>
                Мы — команда энтузиастов, страстно преданных искусству
                веб-разработки и дизайна. Наша история началась с цели изменить
                взгляд на веб-пространство, делая его не просто функциональным,
                но и визуально захватывающим. Мы не просто создаем сайты; мы
                строим виртуальные миры, которые воплощают и усиливают
                уникальность вашего бренда.
              </p>
              <p>
                В основе нашего подхода лежат ценности, которые отражают наше
                стремление к совершенству. Мы верим в бесконечные возможности
                технологии и используем инновации, чтобы ваш бизнес выделялся на
                фоне конкурентов. Наше творчество не имеет границ – мы видим в
                каждом проекте шанс воплотить уникальные идеи в жизнь. Наши
                клиенты не просто получают веб-решение; они достигают
                результатов, которые преобразуют их онлайн-присутствие.
              </p>
              <p>
                Наш коллектив - единое целое, направленное на помощь вашему
                бизнесу в цифровом мире. От опытных веб-дизайнеров до гениальных
                разработчиков и опытных SEO-специалистов, мы создаем
                партнерства, основанные на доверии, инновациях и успешных
                результатах. Давайте вместе сделаем ваш бизнес выдающимся!
              </p>
            </div>

            <div className={style.about__wrapper__progress}>
              <div className={style.about__wrapper__progress_1}>
                <p>Удобство пользования</p>
              </div>

              <div className={style.about__wrapper__progress_2}>
                <p>Лучшая практика</p>
              </div>

              <div className={style.about__wrapper__progress_3}>
                <p>Производительность</p>
              </div>

              <div className={style.about__wrapper__progress_4}>
                <p>SEO оптимизация</p>
              </div>
            </div>

            <Link href={paths.presentation}>Презентация</Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
