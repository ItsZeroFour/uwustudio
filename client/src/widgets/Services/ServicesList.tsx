"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import ArrowRight from "../../../public/icons/Arrow-Right.svg";

const ServicesList = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const servicesItems = [
    {
      title: "Разработка сайта “Под ключ”",
      description:
        "Разработка сайта 'Под ключ' - наша главная услуга. Мы берем на себя всю работу, создавая для вас готовый и выразительный веб-сайт от концепции до запуска",
      link: "about-service/develop-website",
    },

    {
      title: "UI/UX Дизайн",
      description:
        "Наши услуги по UI/UX дизайну призваны сделать ваш сайт уникальным и удобным для пользователей. Мы объединяем креативный дизайн с легкостью использования",
      link: "about-service/design",
    },

    {
      title: "SEO оптимизация",
      description:
        "Услуга направлена на поднятие вашего сайта в поисковых результатах. Мы проводим анализ ключевых слов, оптимизируем технические аспекты и создаем контентные стратегии для максимальной видимости",
      link: "about-service/seo",
    },

    {
      title: "Маркетинг",
      description:
        "Мы создаем комплексные кампании, включая цифровой маркетинг, социальные медиа и контент-стратегии. Наша цель - сделать ваш бренд заметным и укрепить ваше позиционирование на рынке",
      link: "about-service/marketing",
    },

    {
      title: "Упаковка соц. сетей",
      description:
        "Оптимизация настроек для эффективного взаимодействия вашего бренда в соц.сетях. Мы формируем стратегии, которые подчеркивают вашу уникальность и укрепляют присутствие в социальных медиа",
      link: "about-service/socials",
    },

    {
      title: "Доработка сайта",
      description:
        "Дорабатываем сайты для повышения их эффективности. Оптимизируем функционал, улучшаем интерфейс и производительность. Обеспечиваем ваш веб-ресурс современными и конкурентоспособными решениями",
      link: "about-service/revision",
    },

    {
      title: "Оформление презентаций вашего бизнеса",
      description:
        "Разработка привлекательной презентации под общую стилистику сайта в формате pdf, pptx или встроеть прямо в сайт",
      link: "about-service/presentation",
    },

    {
      title: "Анализ и оценка имеющегося сайта",
      description:
        "Анализ и оценка вашего сайта для определения возможностей улучшений. Получите подробный обзор и рекомендации для повышения эффективности вашего веб-присутствия",
      link: "about-service/analysis",
    },

    {
      title: "Продающий текст для имеющегося сайта",
      description:
        "Наши продающие тексты — это мощный инструмент для привлечения внимания и повышения конверсии. Доверьте нам написание контента, и улучшите свое веб-присутствие",
      link: "about-service/text",
    },

    {
      title: "Оптимизация загрузки",
      description:
        "Оптимизация загрузки: ускорьте сайт, оптимизируя изображения и код. Повысьте эффективность веб-ресурса с нашей помощью",
      link: "about-service/optimization",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section className={style.services}>
      <div className="container">
        <div className={style.servies__wrapper}>
          <h1>Наши услуги</h1>
          <p>
            Мы предлагаем не просто услуги, а интегрированные решения, которые
            поднимают ваш бизнес на новый уровень. Наш опыт и творческий подход
            объединяются, чтобы создать веб-пространство, которое не только
            отражает вашу уникальность, но и обеспечивает реальные результаты.
            Ознакомьтесь с нашим разнообразным спектром услуг, нацеленных на
            эффективное развитие вашего онлайн-профиля.
          </p>

          <ul>
            {servicesItems.map(({ title, description, link }, index) => (
              <li
                key={title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={link}>
                  <h2>{title}</h2>
                  <p style={{ opacity: hoveredItem === index ? 1 : 0 }}>
                    {description}
                  </p>
                  <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
