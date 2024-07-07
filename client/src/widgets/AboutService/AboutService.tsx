"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { paths } from "@/paths";
import mainImage from "../../../public/images/aboutService/main-image.png";
import HeadImage from "../../../public/images/aboutService/head.png";
import Image from "next/image";
import Quiz from "@/shared/quiz/Quiz";
import aboutServiceContactsImage from "../../../public/images/aboutService/about-service-contacts.png";
import { useTranslation } from "react-i18next";

interface StageItem {
  image: any;
  title: string;
  text: string;
}

interface ServiceData {
  title: string;
  text: string;
  categoryes: string[];
  types: string[];
  stages: {
    title: string;
    text: string;
    list: StageItem[];
  };
}

const AboutService: React.FC<{ data: ServiceData | null }> = ({ data }) => {
  const { t } = useTranslation();

  const componentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollOffset = window.scrollY / 5;
        componentRef.current.style.transform = `translateY(-${scrollOffset}px)`;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <React.Fragment>
      {data && (
        <React.Fragment>
          <head>
            <title>{data.title}</title>
          </head>
          <section className={style.about__service__top}>
            <div className="container">
              <div className={style.about__service__top__wrapper}>
                <aside className={style.about__service__top__left}>
                  <h1>{data.title}</h1>
                  <p>{data.text}</p>

                  <ul>
                    {data.categoryes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <Link href={paths.contacts}>
                    {t("aboutServiceButtonDiscus")}
                  </Link>
                </aside>

                <aside className={style.about__service__top__right}>
                  <Image src={mainImage} alt="main img" />
                </aside>
              </div>
            </div>
          </section>

          <section className={style.about__service__types}>
            <div className="container">
              <div className={style.about__service__types__wrapper}>
                <Image src={HeadImage} alt="head" />

                <ul ref={componentRef}>
                  {data.types.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={style.about__service__stages}>
            <div className="container">
              <div className={style.about__service__stages__wrapper}>
                <h2>{data.stages.title}</h2>
                <p>{data.stages.text}</p>

                <ul>
                  {data.stages.list.map(({ image, title, text }, index) => (
                    <li
                      className={style.about__service__stages__item}
                      key={index}
                      data-index={`0${index + 1}`}
                    >
                      <div className={style.about__service__stages__item__top}>
                        <Image src={image} alt="title" />
                        <h3>{title}</h3>
                      </div>

                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Quiz />

          <section className={style.about__service__contacts}>
            <div className="container">
              <div className={style.about__service__contacts__wrapper}>
                <aside className={style.about__service__contacts__left}>
                  <Image src={aboutServiceContactsImage} alt="contacts" />
                </aside>
                <aside className={style.about__service__contacts__right}>
                  <h2>{t("aboutServiceContactsTitle")}</h2>
                  <p>{t("aboutServiceContactsDesc")}</p>

                  <div className={style.about__service__contacts__buttons}>
                    <Link href={paths.contacts}>
                      {t("aboutServiceContactsButtonContacts")}
                    </Link>
                    <Link href={paths.about}>
                      {t("aboutServiceContactsButtonAbout")}
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AboutService;
