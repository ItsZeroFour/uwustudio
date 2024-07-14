"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const { t } = useTranslation();

  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      const target1 = 12 + 1;
      const target2 = 100 + 1;
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
};

export default OurServices;
