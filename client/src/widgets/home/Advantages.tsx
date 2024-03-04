import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import AdvantagesIamge from "../../../public/images/home/advantages-image.png";

const Advantages = () => {
  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <aside className={style.advantages__image}>
            <Image src={AdvantagesIamge} alt="advantages statue" />
          </aside>

          <aside className={style.advantages__list}>
            <h2>Наши преимущества</h2>

            <ul>
              <li>
                Мы создаем веб-решения, отражающие уникальные потребности
                каждого клиента, обеспечивая индивидуальный подход и эффективные
                результаты
              </li>

              <li>
                Наша команда экспертов применяет передовые технологии для
                разработки веб-проектов, гарантируя высокий уровень технической
                компетентности.
              </li>
              <li>
                Расположенные в Крыму, мы обслуживаем клиентов во всех странах
                СНГ, обеспечивая удобство сотрудничества.
              </li>
              <li>
                Мы сочетаем креативный дизайн с передовыми технологиями,
                создавая привлекательные и высокофункциональные веб-решения.
              </li>
              <li>
                Мы не только разрабатываем сайты, но и предоставляем комплексные
                решения в цифровом маркетинге, включая SEO оптимизацию, чтобы
                выводить ваш сайт в топы
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
