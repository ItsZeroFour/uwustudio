import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { paths } from "@/paths";
import stagesImage1 from "../../../public/icons/about/stages-1.png";
import stagesImage2 from "../../../public/icons/about/stages-2.png";
import stagesImage3 from "../../../public/icons/about/stages-3.png";
import stagesImage4 from "../../../public/icons/about/stages-4.png";
import stagesImage5 from "../../../public/icons/about/stages-5.png";
import mainImage from "../../../public/images/about/how-we-work-image.png";
import Image from "next/image";

const HowWeWork = () => {
  const stages = [
    {
      title: "Изучение",
      text: "Прежде чем приступить к вашему проекту, мы тщательно исследуем бизнес-рынок. Анализируем тренды, конкуренцию и потребительский запрос, чтобы разработать стратегию, которая выделяет ваш бизнес на фоне остальных. Это ключ к успешному воплощению идей в реальности.",
      image: stagesImage1,
    },

    {
      title: "Анализ",
      text: "Перед тем как взяться за ваш проект, мы глубоко исследуем конкурентное поле. Анализируем стратегии, выделяем сильные стороны и находим уникальные возможности для вашего бизнеса. Специалисты нашей команды приступают к работе, чтобы ваш проект был не просто впечатляющим, а безусловным лидером.",
      image: stagesImage2,
    },

    {
      title: "Дизайн",
      text: "В процессе разработки дизайна наша команда переводит вашу идею в визуальную реальность. Наши дизайнеры не только талантливы, но и преданы пониманию вашего бренда. Мы создаем уникальные и эстетичные дизайны, объединяя визуальное впечатление с эффективностью взаимодействия с пользователем.",
      image: stagesImage3,
    },

    {
      title: "Разработка",
      text: "При разработке вашего сайта мы сочетаем опыт и передовые технологии. Наша команда гарантирует не только визуальную привлекательность, но и максимальную функциональность. Ваш сайт с нами станет не просто визитной карточкой, а эффективным инструментом для достижения ваших целей",
      image: stagesImage4,
    },

    {
      title: "Тестирование и запуск",
      text: "Тщательное тестирование и бесперебойный запуск – наши обязательства. Профессиональная проверка и исправление дефектов перед запуском обеспечивают надежность вашего проекта. Мы гарантируем, что ваш сайт стартует успешно и предоставляет пользователям отличный опыт.",
      image: stagesImage5,
    },
  ];

  return (
    <section className={style.how_we_work} id="stages">
      <div className="container">
        <div className={style.how_we_work__wrapper}>
          <aside className={style.how_we_work__left}>
            <h2>Как мы будем реализовывать ваш проект?</h2>
            <p>
              Воплощение вашей идеи в реальность - это наша миссия. Мы
              предоставляем выдающийся сервис, который объединяет опыт,
              творчество и технологии. Наша команда готова воплотить ваш проект
              в жизнь, обеспечивая уникальность и эффективность в каждой детали.
              Давайте вместе сделаем уникальный продукт!
            </p>
            <Link href={paths.portfolio}>Портфолио</Link>

            <Image src={mainImage} alt="statue" />
          </aside>
          <aside className={style.how_we_work__right}>
            <ul>
              {stages.map(({ title, text, image }) => (
                <li>
                  <Image src={image} alt={title} />

                  <div className={style.how_we_work__text}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
