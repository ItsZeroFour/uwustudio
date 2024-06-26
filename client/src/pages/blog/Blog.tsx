"use client";

import React from "react";
import style from "./style.module.scss";
import Ticket from "../../../public/icons/blog/ticket.svg";
import Calendar from "../../../public/icons/blog/Calendar.svg";
// import BlogImage from "../../../public/images/blog/blog-image-1.png";
import IncreasedConversionImage from "../../../public/images/blog/increased-conversion/main-image.jpg";
import promotionBusinessImage from "../../../public/images/blog/small-business-movement/main-image.jpg";
import brandMainImage from "../../../public/images/blog/unique-brand/main-image.jpg";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const blogItems = [
    {
      title: t("blog1Title"),
      text: t("blog1Text"),
      image: brandMainImage,
      readPostLink: "unique-brand",
      tags: [t("blog3Tag1"), t("blog3Tag2")],
    },

    {
      title: t("blog2Title"),
      text: t("blog2Text"),
      image: promotionBusinessImage,
      readPostLink: "small-business-movement",
      tags: ["SEO", t("blog2Tag1"), t("blog2Tag2")],
    },

    {
      title: t("blog3Title"),
      text: t("blog2Text"),
      image: IncreasedConversionImage,
      readPostLink: "increased-conversion",
      tags: [t("blog1Tag1"), t("blog1Tag2"), t("blog1Tag3")],
    },
  ];

  return (
    <React.Fragment>
      <section className={style.blog__panel}>
        <div className="container">
          <div className={style.blog__panel__wrapper}>
            <aside>
              <input type="text" placeholder={t("blogSearchPlaceholder")} />
            </aside>

            <aside>
              <div className={style.blog__select}>
                <div className={style.blog__select__main}>
                  <p>{t("blogTagSearch")}</p>
                  <Ticket />
                </div>

                <div className={style.blog__select__options}></div>
              </div>

              <div className={style.blog__date}>
                <Calendar />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={style.blog__list}>
        <div className="container">
          <div className={style.blog__list__wrapper}>
            <ul>
              {blogItems.map(
                ({ title, text, image, readPostLink, tags }, index) => (
                  <li key={index}>
                    <aside className={style.blog__list__image}>
                      <Image src={image} alt={title} />
                    </aside>
                    <aside className={style.blog__list__main}>
                      <h2>{title}</h2>
                      <p>{text}</p>
                      <ul>
                        {tags.map((item) => (
                          <li>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>

                      <div className={style.blog__buttons}>
                        <Link href={`/blog/${readPostLink}`}>
                          {t("blogReadPost")}
                        </Link>
                        <button>{t("blogSendPost")}</button>
                      </div>
                    </aside>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
