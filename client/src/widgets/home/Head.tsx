"use client";

import React, { useState, MouseEvent } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Socials from "@/shared/socials/Socials";
import Figure from "../../../public/images/home/head-main-image.png";
import Image from "next/image";
import { Parallax as ReactParallax } from "react-parallax";

const Head: React.FC = () => {
  const [mouseX, setMouseX] = useState<number | undefined>(0);

  const handleMouseMove = (e: MouseEvent<HTMLElement>): void => {
    const mouseX = e.clientX;
    setMouseX(mouseX);
  };

  return (
    <section className={style.head} onMouseMove={handleMouseMove}>
      <div className="container">
        <div className={style.head__wrapper}>
          <aside className={style.head__left}>
            <h1>Цифровая эстетика</h1>
            <p>
              Мы - веб-студия по разработке Гармоничного Дизайна и
              Профессиональных Веб-сайтов. Переосмысливаем Веб-Пространство для
              Вас. Элегантный Дизайн, Эффективная Функциональность: Наш Подход к
              Веб-Разработке
            </p>

            <div className={style.head__links}>
              <Link href="/services">Заказать</Link>
              <Link href="/presentation">Презентация</Link>
            </div>

            {/* SOCIALS LINKS */}
            <Socials />
          </aside>
          <aside className={style.head__right}>
            <ReactParallax
              strength={20000}
              style={{
                height: "100%",
                width: "725px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  transform:
                    mouseX !== undefined
                      ? `translateX(${mouseX / 90}px)`
                      : "none",
                }}
              >
                <Image src={Figure} alt="Abstract figure" />
              </div>
            </ReactParallax>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Head;
