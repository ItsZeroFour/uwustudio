"use client";

import React from "react";
import style from "./style.module.scss";
import depositsImage from "../../../public/images/presentation/deposits-img.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const PresentationDeposits = () => {
  const { t } = useTranslation();

  return (
    <section className={style.presentation__deposits}>
      <div className="container">
        <div className={style.presentation__deposits__wrapper}>
          <aside className={style.presentation__deposits__left}>
            <h2>{t("presentationDepositsTitle")}</h2>

            <ul>
              <li>
                <p>{t("presentationDepositsDesc")}</p>
              </li>
              <li>
                <p>{t("presentationDepositsDesc2")}</p>
              </li>
              <li>
                <p>{t("presentationDepositsDesc3")}</p>
              </li>
            </ul>
          </aside>
          <aside className={style.presentation__deposits__right}>
            <Image src={depositsImage} alt="developers" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PresentationDeposits;
