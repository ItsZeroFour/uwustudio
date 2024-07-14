"use client";

import React, { useState, MouseEvent, useMemo } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Figure from "../../../public/images/home/head-main-image.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Socials = dynamic(() => import("@/shared/socials/Socials"), {
  ssr: false,
});
const ReactParallax = dynamic(
  () => import("react-parallax").then((mod) => mod.Parallax),
  { ssr: false }
);

const Head: React.FC = () => {
  const [mouseX, setMouseX] = useState<number | undefined>(0);

  const { t } = useTranslation();

  const handleMouseMove = (e: MouseEvent<HTMLElement>): void => {
    setMouseX(e.clientX);
  };

  const parallaxStyle = useMemo(
    () => ({
      width: "100%",
      transform: mouseX !== undefined ? `translateX(${mouseX / 90}px)` : "none",
    }),
    [mouseX]
  );

  return (
    <>
      <section className={style.head} onMouseMove={handleMouseMove}>
        <div className="container">
          <div className={style.head__wrapper}>
            <aside className={style.head__left}>
              <h1>{t("headTitle")}</h1>
              <p>{t("headText")}</p>

              <div className={style.head__links}>
                <Link href="/services" className="special-button">
                  {t("order")}
                </Link>
                <Link href="/presentation" className="special-button">
                  {t("presentation")}
                </Link>
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
                <div style={parallaxStyle}>
                  <Image
                    className={style.head__figure}
                    src={Figure}
                    alt="Abstract figure"
                    priority
                    loading="eager"
                  />
                </div>
              </ReactParallax>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
