"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const OurServices = React.memo(() => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const { t } = useTranslation();

  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true, // Убедимся, что анимация запускается только один раз
  });

  const requestRef = useRef<number>();
  const startRef = useRef<number>();
  const previousTimestampRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return; // Не запускаем анимацию, если компонент не в области видимости

    const target1 = 12 + 1;
    const target2 = 100 + 1;
    const duration = 3000;

    const updateCounters = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;

      if (timestamp - previousTimestampRef.current > 1000 / 60) {
        previousTimestampRef.current = timestamp;

        if (elapsed < duration) {
          const progress = Math.min(1, elapsed / duration);
          setCount1(Math.floor(progress * target1));
          setCount2(Math.floor(progress * target2));
          requestRef.current = requestAnimationFrame(updateCounters);
        } else {
          setCount1(target1 - 1); // Обеспечим точное конечное значение
          setCount2(target2 - 1);
          cancelAnimationFrame(requestRef.current!);
        }
      } else {
        requestRef.current = requestAnimationFrame(updateCounters);
      }
    };

    requestRef.current = requestAnimationFrame(updateCounters);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [inView]);

  return (
    <section className={style.our__services} ref={ref}>
      <div className="container">
        <div className={style.our__services__wrapper}>
          <aside className={style.our__services__services}>
            <ul>
              <li>
                <h2>{t("webDevelop")}</h2>
                <p>{t("webDevelopText")}</p>
              </li>

              <li>
                <h2>{t("webDesign")}</h2>
                <p>{t("webDesignText")}</p>
              </li>

              <li>
                <h2>{t("SEO")}</h2>
                <p>{t("SEOText")}</p>
              </li>

              <li>
                <h2>{t("marketing")}</h2>
                <p>{t("marketingText")}</p>
              </li>
            </ul>
          </aside>

          <aside className={style.our__services__advantages}>
            <p>{t("headAdvantages")}</p>

            <ul>
              <li>
                <h3>{count1}+</h3>
                <p>{t("completeWork")}</p>
              </li>

              <li>
                <h3>{count2}%</h3>
                <p>{t("happyClient")}</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
});

export default OurServices;
