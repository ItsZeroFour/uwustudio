import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import topImage from "../../../public/images/presentation/top-image.png";

const PresentationTop = () => {
  return (
    <section className={style.presentation__top}>
      <div className="container">
        <h1>Кто мы и как мы работаем?</h1>

        <div className={style.presentation__top__wrapper}>
          <aside className={style.presentation__top__text}>
            <p>
              Мы - творчая веб-студия, сфокусированная на создании уникальных и
              привлекательных веб-решений. Наша команда состоит из опытных
              профессионалов в области веб-разработки, дизайна и маркетинга,
              готовых превратить ваши идеи в цифровую реальность
            </p>

            <p>
              Мы работаем с каждым клиентом индивидуально, тщательно выслушивая
              его потребности и цели. Наш процесс начинается с глубокого
              понимания бизнеса заказчика, что позволяет нам создавать не просто
              сайты, а эффективные инструменты для достижения бизнес-целей
            </p>

            <p>
              Наша методология включает в себя тесное взаимодействие с клиентом
              на всех этапах разработки - от концепции до запуска. Мы
              придерживаемся высоких стандартов качества, стремясь к тому, чтобы
              каждый проект не только соответствовал ожиданиям, но и превзошел
              их
            </p>
          </aside>
          <aside className={style.presentation__top__image}>
            <Image src={topImage} alt="laptop" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PresentationTop;
