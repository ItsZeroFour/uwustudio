import React from "react";
import style from "./style.module.scss";
import broccoliImg from "../../../../../public/images/portfolio/cases/trumpick/head-img.png";
import screen1Img from "../../../../../public/images/portfolio/cases/trumpick/1.png";
import screen2Img from "../../../../../public/images/portfolio/cases/trumpick/2.png";
import screen3Img from "../../../../../public/images/portfolio/cases/trumpick/3.png";
import Link from "next/link";
import Image from "next/image";

const Trumpick = () => {
  return (
    <React.Fragment>
      <head>
        <title>Сайт приложения здорового питания Trumpick - UWUSTUDIO</title>
        <meta
          name="description"
          content="Trumpick - это приложение для здорового питания, разработанное UWUSTUDIO. Наш сайт предоставляет интуитивно понятный интерфейс, адаптивный дизайн и функциональные возможности для планирования питания, отслеживания прогресса и получения персонализированных рекомендаций. Узнайте больше о нашем приложении и улучшите своё питание."
        />

        <meta
          name="keywords"
          content="здоровое питание, приложение для питания, интерфейс пользователя, UX/UI дизайн, адаптивный веб-дизайн, разработка сайта, SEO оптимизация, питание и диета, планирование питания, пользовательский опыт, UI/UX решения, дизайн для здоровья"
        />
      </head>
      <section className={style.case__head}>
        <div className="container">
          <div className={style.case__head__wrapper}>
            <aside className={style.case__head__left}>
              <h1>Сайт приложения здорового питания Trumpick</h1>

              <ul>
                <li>Разработка Анимаций</li>
                <li>Верстка</li>
                <li>Разработка прототипа</li>
                <li>SEO Оптимизация</li>
                <li>Дизайн</li>
              </ul>

              <Link className={style.case__head__button} href="#first">
                <svg className="circle" viewBox="0 0 100 100">
                  <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />

                  <text>
                    <textPath href="#circle">просомтретьпросомтреть</textPath>
                  </text>
                </svg>
              </Link>
            </aside>
            <aside className={style.case__head__right}>
              <Image src={broccoliImg} alt="broccoli" />
            </aside>
          </div>
        </div>
      </section>

      <section className={style.case__structure} id="first">
        <div className="container">
          <div className={style.case__structure__wrapper}>
            <Image src={screen1Img} alt="screen 1" />

            <h2>Планирование и структура</h2>

            <p>
              Планирование и структура являются ключевыми аспектами в создании
              успешного сайта для приложения здорового питания TrumPick. Этот
              этап включает в себя определение основных разделов сайта,
              разработку удобной навигации и проектирование пользовательского
              пути.
            </p>

            <p>
              Первым шагом является создание карты сайта, которая поможет
              определить основные разделы и страницы. Главная страница должна
              содержать краткое и яркое описание приложения, его основных
              функций и преимуществ. Важно также включить разделы, такие как
              "Функционал", где будут подробно описаны возможности TrumPick,
              "Отзывы" с реальными откликами пользователей, "Блог" с полезными
              статьями о здоровом питании, и "Контакты" для обратной связи.
            </p>

            <p>
              Навигация должна быть интуитивно понятной и легкой для
              пользователя. Проектирование логичного пользовательского пути
              включает в себя анализ того, как посетитель будет перемещаться по
              сайту. Цель состоит в том, чтобы обеспечить простой доступ к
              информации и мотивировать пользователя к установке приложения.
              Важно учитывать, что каждый раздел должен легко находиться через
              главное меню или ссылки на главной странице.
            </p>

            <p>
              Дизайн и планирование структуры сайта должны основываться на
              предпочтениях целевой аудитории. Например, молодые пользователи
              могут ценить минималистичный и современный дизайн, в то время как
              более старшая аудитория может предпочесть более традиционный и
              информативный подход. Поэтому важно провести анализ предпочтений
              пользователей, чтобы сайт был максимально удобен и привлекателен
              для них.
            </p>

            <p>
              Кроме того, важно учесть адаптивность сайта, чтобы он корректно
              отображался на различных устройствах — от настольных компьютеров
              до смартфонов и планшетов. Это обеспечит максимальный охват
              аудитории и удобство использования в любых условиях.
            </p>

            <p>
              Таким образом, тщательное планирование и продуманная структура
              являются основополагающими элементами для создания эффективного и
              привлекательного сайта для TrumPick, который будет соответствовать
              потребностям пользователей и способствовать достижению
              поставленных целей.
            </p>
          </div>
        </div>
      </section>

      <section className={style.case__develop}>
        <div className="container">
          <div className={style.case__develop__wrapper}>
            <div className={style.case__develop__block}>
              <aside className={style.case__develop__left}>
                <h2>Дизайн и разработка</h2>
                <p>
                  Этапы дизайна и разработки являются ключевыми в создании сайта
                  для приложения здорового питания TrumPick, поскольку именно
                  они определяют внешний вид, функциональность и удобство
                  использования веб-ресурса.
                </p>

                <h3>Дизайн</h3>
                <p>
                  На этапе дизайна важно создать визуально привлекательный и
                  функциональный интерфейс, который будет соответствовать
                  потребностям целевой аудитории и целям проекта. Первым шагом
                  является разработка визуального стиля, который включает в себя
                  выбор цветовой палитры, типографики, иконок и иллюстраций. Для
                  TrumPick подходящими могут быть свежие и яркие цвета,
                  ассоциирующиеся со здоровьем и природой, такие как зеленый и
                  светло-желтый.
                </p>
              </aside>

              <aside className={style.case__develop__right}>
                <Image src={screen2Img} alt="screen 2" />
              </aside>
            </div>

            <p>
              После определения визуального стиля создаются прототипы страниц
              сайта. Начинается все с низкоуровневых прототипов (wireframes),
              которые помогают определить расположение элементов на страницах и
              логическую структуру. Далее разрабатываются высокоуровневые
              прототипы с более детальной проработкой визуальных элементов. Это
              позволяет согласовать дизайн и структуру сайта с клиентом до
              начала разработки.
            </p>

            <h3>Разработка</h3>

            <p>
              Этап разработки включает в себя как фронтенд, так и бэкенд работу.
              Фронтенд-разработка фокусируется на создании адаптивного
              интерфейса, который будет корректно отображаться на различных
              устройствах. Для этого используются современные технологии, такие
              как HTML5, CSS3 и JavaScript. Особое внимание уделяется
              адаптивному дизайну, чтобы сайт был удобен для пользователей на
              мобильных устройствах, планшетах и настольных компьютерах.
            </p>

            <div className={style.case__develop__block}>
              <aside className={style.case__develop__left2}>
                <Image src={screen3Img} alt="screen 3" />
              </aside>

              <aside className={style.case__develop__right3}>
                <p>
                  Кроме того, на этапе разработки проводится тестирование сайта.
                  Это включает в себя проверку на кроссбраузерную совместимость,
                  чтобы убедиться, что сайт корректно работает во всех основных
                  браузерах. Также проводится тестирование производительности и
                  исправление ошибок, выявленных в процессе тестирования.
                </p>

                <p>
                  Эффективное взаимодействие между дизайнерами и разработчиками
                  является ключевым для успешного завершения проекта. На всех
                  этапах разработки важно поддерживать постоянное общение и
                  сотрудничество между командами, чтобы убедиться, что конечный
                  продукт соответствует изначальной концепции и ожиданиям
                  клиента. Регулярные встречи и обсуждения помогают оперативно
                  решать возникающие вопросы и вносить необходимые
                  корректировки.
                </p>
              </aside>
            </div>

            <p>
              Таким образом, этапы дизайна и разработки играют решающую роль в
              создании успешного сайта для TrumPick. Внимательное отношение к
              деталям на каждом из этих этапов позволяет создать функциональный,
              эстетически привлекательный и удобный для пользователя ресурс,
              который будет способствовать достижению целей проекта и
              удовлетворению потребностей целевой аудитории.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Trumpick;
