"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import WhoWeAreImage from "../../../public/images/home/who-we-are.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className={style.whoweare} ref={ref}>
      <div className="container">
        <motion.div
          className={style.whoweare__wrapper}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <aside className={style.whoweare__main}>
            <h2>{t("whowe")}</h2>

            <div className={style.whoweare__text}>
              <p>{t("whoweText1")}</p>

              <p>{t("whoweText2")}</p>

              <p>{t("whoweText3")}</p>
            </div>

            <div className={style.whoweare__links}>
              <Link href="/services">{t("order")}</Link>
              <Link href="/#contacts">{t("contact")}</Link>
            </div>
          </aside>

          <aside className={style.whoweare__image}>
            <Image
              src={WhoWeAreImage}
              alt="statue"
              className={style.about_statue}
              loading="eager"
            />
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
