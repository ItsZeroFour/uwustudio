"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getLastBlogItems } from "@/data/blog";

const Blog = () => {
  const { t } = useTranslation();
  const lastBlogItems = getLastBlogItems(t);

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
                    <Image src={imagePath} alt={title} loading="eager" />

                    <h3>{title}</h3>
                    <p className={style.blog__article_subtitle}>
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
