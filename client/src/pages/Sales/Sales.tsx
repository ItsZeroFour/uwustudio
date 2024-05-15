"use client";

import React from "react";
import style from "./style.module.scss";
import image1 from "../../../public/images/sales/sales-1.png";
import image2 from "../../../public/images/sales/sales-2.png";
import image3 from "../../../public/images/sales/sales-3.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Sales = () => {
  const { t } = useTranslation();

  const sales = [
    {
      image: image1,
      title: t("salesSale1Title"),
      texts: [
        t("salesSale1Text1"),
        t("salesSale1Text2"),
        t("salesSale1Text3"),
        t("salesSale1Text4"),
      ],
    },

    {
      image: image2,
      title: t("salesSale2Title"),
      texts: [t("salesSale2Text1"), t("salesSale2Text2")],
    },

    {
      image: image3,
      title: t("salesSale3Title"),
      texts: [
        t("salesSale3Text1"),
        t("salesSale3Text2"),
        t("salesSale3Text3"),
        t("salesSale3Text4"),
        t("salesSale3Text5"),
      ],
    },
  ];

  return (
    <React.Fragment>
      <head>
        <title>Акции - UWUSTUDIO</title>
        <meta name="description" content="Узнайте о наших актуальных акциях и специальных предложениях. Получите выгоду при заказе услуг веб-студии." />
      </head>
      <section className={style.sales}>
        <div className="container">
          <div className={style.sales__wrapper}>
            <h1>{t("salesTitle")}</h1>
            <p>
              <span>*</span> {t("salesAnnotation")}
            </p>

            <ul>
              {sales.map(({ image, title, texts }, index) => (
                <li key={index}>
                  <aside className={style.sales__left}>
                    <h2>{title}</h2>
                    {texts.map((textItem: string) => (
                      <p>{textItem}</p>
                    ))}
                    <Link href="/#contacts">{t("salesButtonContacts")}</Link>
                  </aside>
                  <aside className={style.sales__right}>
                    <Image src={image} alt={title} />
                  </aside>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sales;
