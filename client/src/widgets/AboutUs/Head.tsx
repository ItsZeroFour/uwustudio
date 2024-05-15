"use client";

import React from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Head = () => {
  const { t } = useTranslation();

  const text = t("aboutUsTitle");

  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 3) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 2,
        stiffness: 10,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 2,
        stiffness: 10,
      },
    },
  };

  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <motion.div
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1>
              {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <p className={style.head__text}>{t("abutUsDesc")}</p>
        </div>
      </div>
    </section>
  );
};

export default Head;
