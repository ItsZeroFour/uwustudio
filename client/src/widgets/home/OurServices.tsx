"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useInView } from "react-intersection-observer";

const OurServices = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      const target1 = 11;
      const target2 = 101;
      const duration = 3000;

      const start = Date.now();

      const updateCounters = () => {
        const elapsed = Date.now() - start;

        if (elapsed < duration) {
          const progress = Math.min(1, elapsed / duration);
          setCount1(Math.floor(progress * target1));
          setCount2(Math.floor(progress * target2));
          requestAnimationFrame(updateCounters);
        }
      };

      updateCounters();
    }
  }, [inView]);

  return (
    <section className={style.our__services} ref={ref}>
      <div className="container">
        <div className={style.our__services__wrapper}>
          <aside className={style.our__services__services}>
            <ul>
              <li>
                <h2>Разработка сайтов</h2>
                <p>
                  Создаем сайты с нуля: анализ, дизайн, разработка.
                  Интуитивно-понятные, стильные и функциональные веб-решения для
                  вашего успеха
                </p>
              </li>

              <li>
                <h2>UI/UX Дизайн</h2>
                <p>
                  Мы так же создаем уникальные и интуитивно-понятные интерфейсы,
                  обеспечивая неповторимый пользовательский опыт для вашего
                  сайта
                </p>
              </li>

              <li>
                <h2>SEO оптимизация</h2>
                <p>
                  Улучшаем видимость вашего сайта в поиске. Ключевые слова,
                  технический SEO, эффективные контент-стратегии для
                  максимальных результатов
                </p>
              </li>

              <li>
                <h2>Маркетинг</h2>
                <p>
                  С нашим маркетингом выделяйтесь в толпе. От стратегий до
                  выполнения - создаем результативные кампании для привлечения
                  внимания и удержания клиентов.
                </p>
              </li>
            </ul>
          </aside>

          <aside className={style.our__services__advantages}>
            <p>
              Мы грамотно оцениваем поставленную перед нами задачу. Проводим
              анализ и выстраиваем план по воплащению Ваших идей в реальность
            </p>

            <ul>
              <li>
                <h3>{count1}+</h3>
                <p>Выполненных работ</p>
              </li>

              <li>
                <h3>{count2}%</h3>
                <p>Довольных клиентов</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
