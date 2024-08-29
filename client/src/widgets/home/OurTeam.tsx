"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import OurTeamImage from "../../../public/images/home/our-team.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { paths } from "@/paths";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { t } = useTranslation();

  return (
    <section className={style.our__team} ref={ref} id="comand">
      <div className="container">
        <div className={style.our__team__wrapper}>
          {inView && (
            <motion.div
              className={style.our__team__wrapper__top}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={OurTeamImage} alt="our team" priority={true} />
            </motion.div>
          )}
        </div>

        <div className={style.our__team__text}>
          <h2>{t("ourTeam")}</h2>
          <p>{t("ourTeamText")}</p>
        </div>

        <div className={style.our__team__list}>
          <ul>
            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Даниил Андреев</h3>

                  <ul>
                    <li>CEO UWUSTUDIO</li>
                    <li>Fullstack разработчик</li>
                    <li>Дизайнер</li>
                  </ul>
                </div>

                <div>
                  <p>Опыт: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Михаил Бобров</h3>

                  <ul>
                    <li>Маркетолог</li>
                    <li>Бренд-менеджер</li>
                  </ul>
                </div>

                <div>
                  <p>Опыт: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Данила Власенко</h3>

                  <ul>
                    <li>Frontend Разработчик</li>
                    <li>UI/UX Дизайнер</li>
                    <li>SEO-специалист</li>
                  </ul>
                </div>

                <div>
                  <p>Опыт: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Сейдалиев Амет</h3>

                  <ul>
                    <li>Backend разработчик</li>
                    <li>DevOps</li>
                  </ul>
                </div>

                <div>
                  <p>Опыт: 3+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Семиволос Дарья</h3>

                  <ul>
                    <li>Веб-Аналитик</li>
                  </ul>
                </div>

                <div>
                  <p>Опыт: 3+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <Link href={paths.about}>{t("about")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
