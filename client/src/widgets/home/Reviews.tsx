"use client";

import React from "react";
import style from "./style.module.scss";
import Star from "../../../public/icons/Star.svg";
import Image from "next/image";
import ReviewsImage from "../../../public/images/home/reviews-statue.png";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { t } = useTranslation();

  const reviews = [
    {
      starsCount: [1, 2, 3, 4, 5],
      text: t("review1"),
      author: t("reviewAuthor1"),
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: t("review2"),
      author: t("reviewAuthor2"),
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: t("review3"),
      author: t("reviewAuthor3"),
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: t("review4"),
      author: t("reviewAuthor4"),
    },

    {
      starsCount: [1, 2, 3, 4, 5],
      text: t("review5"),
      author: t("reviewAuthor5"),
    },
  ];

  return (
    <section className={style.reviews} ref={ref} id="reviews">
      <div className="container">
        <div className={style.reviews__wrapper}>
          <h2>{t("reviewsTitle")}</h2>
          <p>{t("reviewsText")}</p>

          <div className={style.reviews__content}>
            {inView && (
              <div className={style.reviews__main}>
                <aside className={style.reviews__main__list}>
                  <ul>
                    {reviews.map(({ starsCount, text, author }, index) => (
                      <li key={index}>
                        <ul className={style.reviews__stars}>
                          {starsCount.map((item) => (
                            <li key={item}>
                              <Star />
                            </li>
                          ))}

                          <h3>{starsCount.length}.0</h3>
                        </ul>

                        <p>{text}</p>
                        <h3>{author}</h3>
                      </li>
                    ))}

                    <li className={style.reviews__portfolio}>
                      <Link href="/" target="_blank">
                        {t("readMoreReviews")}
                      </Link>
                    </li>
                  </ul>
                </aside>

                <aside className={style.reviews__main__image}>
                  <Image src={ReviewsImage} alt="statue" />
                </aside>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
