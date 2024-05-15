"use client";

import React from "react";
import style from "./style.module.scss";
import IncreasedConversionImage from "../../../public/images/blog/increased-conversion/main-image.jpg";
import promotionBusinessImage from "../../../public/images/blog/small-business-movement/main-image.jpg";
import brandMainImage from "../../../public/images/blog/unique-brand/main-image.jpg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const lastBlogItems = [
    {
      title: t("blog1Title"),
      text: t("blog1Text"),
      date: "12.05.2024",
      imagePath: brandMainImage,
      link: "unique-brand",
    },

    {
      title: t("blog2Title"),
      text: t("blog2Text"),
      date: "17.04.2024",
      imagePath: promotionBusinessImage,
      link: "small-business-movement",
    },

    {
      title: t("blog3Title"),
      text: t("blog3Text"),
      date: "11.04.2024",
      imagePath: IncreasedConversionImage,
      link: "increased-conversion",
    },
  ];

  return (
    <section className={style.blog}>
      <div className="container">
        <div className={style.blog__wrapper}>
          <h2>{t("blogTitle")}</h2>
          <p>{t("blogText")}</p>
          <ul>
            {lastBlogItems.map(
              ({ title, text, date, imagePath, link }, index) => (
                <li key={index}>
                  <Link href={`/blog/${link}`}>
                    <Image src={imagePath} alt={title} />

                    <h3>{title}</h3>
                    <p>
                      {text.length > 300 ? `${text.slice(0, 300)}...` : text}
                    </p>
                    <h4>{date}</h4>
                  </Link>
                </li>
              )
            )}
          </ul>

          <Link href="/blog">{t("blogSeeMore")}</Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
