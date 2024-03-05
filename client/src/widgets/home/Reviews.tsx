"use client";

import React from "react";
import style from "./style.module.scss";
import Star from "../../../public/icons/Star.svg";
import Image from "next/image";
import ReviewsImage from "../../../public/images/home/reviews-statue.png";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const reviews = [
    {
      starsCount: [1, 2, 3, 4, 5],
      text: `Сотрудничество с "UWUSTUDIO" стало настоящим открытием для меня.
      Команда профессионалов внимательно выслушала мои пожелания,
      превратив их в реальность. Индивидуальный подход, креативные идеи,
      и, конечно, потрясающий дизайн - я в восторге! Не только рекомендую,
      но и планирую в дальнейшем продолжить сотрудничество.`,
      author: "Anonimus",
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: `Мое первое обращение в вэб-студию оказалось удивительным опытом.
      Задача была не простой - создание привлекательного лендинга. Однако,
      ребята взялись за нее с энтузиазмом и профессионализмом. Быстро, качественно,
      и самое главное - с огромным вниманием к деталям. Результат меня порадовал,
      рекомендую!`,
      author: "Виктор А. В.",
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: `Профессионализм команды, высокий уровень сервиса и индивидуальный подход
      - все великолепно. Мои идеи были не только услышаны, но и воплощены в потрясающий
      веб-проект. Рекомендую всем, кто ищет не просто исполнителя, а настоящих специалистов своего дела!`,
      author: "Андрей Г. Ю.",
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: `
      Спасибо команде за великолепную SEO оптимизацию!
      Подняли наш сайт в поисковых результатах, привлекли новых клиентов.
      Результаты ощутимы, рекомендую!
      `,
      author: "Anonimus",
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: `Долго выбирал подходящую вэб-студию, и остановил свой выбор на этой команде.
      Ребята профессионалы своего дела. Индивидуальный подход, креативные решения и
      качественная работа - всё, что нужно для успешного веб-проекта. Спасибо за ваш вклад
      в развитие моего бизнеса!`,
      author: "Anonimus",
    },
  ];

  return (
    <section className={style.reviews} ref={ref}>
      <div className="container">
        <div className={style.reviews__wrapper}>
          <h2>Что наши клиенты говорят о нас?</h2>
          <p>
            Отзывы наших клиентов - это лучшая награда. "Совершенно
            потрясающе!", "Профессионализм на высшем уровне!" - вот лишь малая
            часть теплых слов, которые подтверждают нашу преданность качеству и
            уникальности.Ознакомьтесь с последними из отзывов и присоединяйтесь
            к нашему списку довольных клиентов и дайте свой голос в этой
            виртуальной симфонии успеха!
          </p>

          {inView && (
            <div className={style.reviews__main}>
              <aside className={style.reviews__main__list}>
                <ul>
                  {reviews.map(({ starsCount, text, author }, index) => (
                    <li key={index}>
                      <ul className={style.reviews__stars}>
                        {starsCount.map((item) => (
                          <li key={item}>
                            <Star />
                          </li>
                        ))}

                        <h3>{starsCount.length}.0</h3>
                      </ul>

                      <p>{text}</p>
                      <h3>{author}</h3>
                    </li>
                  ))}

                  <li className={style.reviews__portfolio}>
                    <Link href="/portfolio">Посомтреть наше портфолио</Link>
                  </li>
                </ul>
              </aside>

              <aside className={style.reviews__main__image}>
                <Image src={ReviewsImage} alt="statue" />
              </aside>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
