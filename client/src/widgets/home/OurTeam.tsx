"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import OurTeamImage from "../../../public/images/home/our-team.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const OurTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className={style.our__team} ref={ref}>
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
              <Image src={OurTeamImage} alt="our team" />
            </motion.div>
          )}
        </div>

        <div className={style.our__team__text}>
          <h2>Наша команда</h2>
          <p>
            Мы - объединение творческих профессионалов, стремящихся к инновациям
            и выдающимся результатам. Состоящие из экспертов в различных
            областях, мы поднимаем ваши идеи на новый уровень. Уникальные навыки
            каждого члена команды дополняют друг друга, обеспечивая гармоничное
            взаимодействие. Мы предлагаем стильные и инновационные веб-решения,
            созданные с любовью к деталям.
          </p>
        </div>

        <div className={style.our__team__list}>
          <ul>
            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Даниил Андреев</h3>

                  <ul>
                    <li>Генеральный директор</li>
                    <li>Fullstack разработчик</li>
                    <li>Дизайнер</li>
                  </ul>
                </div>

                <div>
                  <p>Стаж: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Даниил Андреев</h3>

                  <ul>
                    <li>Генеральный директор</li>
                    <li>Fullstack разработчик</li>
                    <li>Дизайнер</li>
                  </ul>
                </div>

                <div>
                  <p>Стаж: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Даниил Андреев</h3>

                  <ul>
                    <li>Генеральный директор</li>
                    <li>Fullstack разработчик</li>
                    <li>Дизайнер</li>
                  </ul>
                </div>

                <div>
                  <p>Стаж: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Даниил Андреев</h3>

                  <ul>
                    <li>Генеральный директор</li>
                    <li>Fullstack разработчик</li>
                    <li>Дизайнер</li>
                  </ul>
                </div>

                <div>
                  <p>Стаж: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.our__team__list__item}>
                <div>
                  <h3>Даниил Андреев</h3>

                  <ul>
                    <li>Генеральный директор</li>
                    <li>Fullstack разработчик</li>
                    <li>Дизайнер</li>
                  </ul>
                </div>

                <div>
                  <p>Стаж: 4+ лет</p>
                </div>
              </div>
            </li>

            <li>
              <Link href="/about">О нас</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
