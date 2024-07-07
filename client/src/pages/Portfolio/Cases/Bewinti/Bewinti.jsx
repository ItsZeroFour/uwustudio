import React from "react";
import style from "./style.module.scss";
import mirrorImg from "../../../../../public/images/portfolio/cases/bewinti/head-img.png";
import screen1Img from "../../../../../public/images/portfolio/cases/bewinti/1.png";
import screen2Img from "../../../../../public/images/portfolio/cases/bewinti/2.png";
import Link from "next/link";
import Image from "next/image";

const Bewinti = () => {
  return (
    <React.Fragment>
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
              <Image src={mirrorImg} alt="broccoli" />
            </aside>
          </div>
        </div>
      </section>

      <section className={style.case__design} id="first">
        <div className="container">
          <div className={style.case__design__wrapper}>
            <h2>Дизайн</h2>
            <p>
              Дизайн веб-сайта "Смарт зеркала Bewinti" выдержан в стиле,
              объединяющем темные и красные тона. Эта цветовая палитра не только
              создает элегантный и современный вид, но и передает ощущение
              технологичности и уюта. Темные оттенки фонов и элементов
              интерфейса создают подчеркнутый контраст для выделения важных
              деталей и контента. Красные акценты вносят динамизм и привлекают
              внимание к ключевым элементам интерактивности и функциональности,
              подчеркивая инновационный характер продукта. Дизайн "Смарт зеркала
              Bewinti" не только эстетически привлекателен, но и функционально
              оптимизирован для удобства пользователей и эффективной навигации
              по сайту.
            </p>

            <Image src={screen1Img} alt="screen 1" />
          </div>
        </div>
      </section>

      <section className={style.case__special}>
        <div className="container">
          <div className={style.case__special__wrapper}>
            <h2>Особенности и функциональность</h2>
            <p>
              Сайт "Смарт зеркала Bewinti" представляет собой воплощение
              передовых технологий в области интерьерного дизайна и умных
              решений. Основными особенностями и функциональностью сайта
              являются:
            </p>

            <ol>
              <li>
                Интерактивные элементы и анимации: Пользователи могут
                интерактивно взаимодействовать с элементами интерфейса, открывая
                для себя возможности управления освещением, температурой и
                другими параметрами с помощью смарт-технологий.
              </li>

              <li>
                Галереи проектов: Подробные галереи проектов демонстрируют
                разнообразие реализованных идей и решений, позволяя клиентам
                легко находить вдохновение и выбирать подходящие решения для
                своих интерьеров.
              </li>

              <li>
                Форма обратной связи: Интегрированная форма обратной связи
                обеспечивает прямой контакт с потенциальными клиентами, упрощая
                процесс консультации и заказа услуг.
              </li>

              <li>
                SEO-оптимизация и аналитика: Сайт оптимизирован для поисковых
                систем, что способствует повышению его видимости и привлечению
                новых клиентов. Аналитика использования сайта позволяет следить
                за эффективностью его работы и вносить необходимые коррективы
                для улучшения пользовательского опыта.
              </li>

              <li>
                Совокупность этих особенностей делает сайт "Смарт зеркала
                Bewinti" не только стильным и современным, но и практически
                полезным инструментом для клиентов, стремящихся преобразить свой
                интерьер с использованием инновационных технологий.
              </li>
            </ol>

            <div className={style.case__special__image}>
              <Image src={screen2Img} alt="screen 2" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Bewinti;
