"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import ArrowRight from "../../../public/icons/Arrow-Right.svg";
import { useTranslation } from "react-i18next";

const ServicesList = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { t } = useTranslation();

  const servicesItems = [
    {
      title: t("servicesDevelop"),
      description: t("servicesDevelopDesc"),
      link: "about-service/develop-website",
    },

    {
      title: t("servicesDesign"),
      description: t("servicesDesignDesc"),
      link: "about-service/design",
    },

    {
      title: t("servicesSEO"),
      description: t("servicesSEODesc"),
      link: "about-service/seo",
    },

    {
      title: t("servicesMarketing"),
      description: t("servicesMarketingDesc"),
      link: "about-service/marketing",
    },

    {
      title: t("servicesSocial"),
      description: t("servicesSocialDesc"),
      link: "about-service/socials",
    },

    {
      title: t("servicesRevision"),
      description: t("servicesRevisionDesc"),
      link: "about-service/revision",
    },

    {
      title: t("servicesPresentation"),
      description: t("servicesPresentationDesc"),
      link: "about-service/presentation",
    },

    {
      title: t("servicesAnalysis"),
      description: t("servicesAnalysisDesc"),
      link: "about-service/analysis",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section className={style.services}>
      <div className="container">
        <div className={style.servies__wrapper}>
          <h1>{t("servicesTitle")}</h1>
          <p>{t("servicesDesc")}</p>

          <ul>
            {servicesItems.map(({ title, description, link }, index) => (
              <li
                key={title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={link}>
                  <h2>{title}</h2>
                  <p style={{ opacity: hoveredItem === index ? 1 : 0 }}>
                    {description}
                  </p>
                  <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
