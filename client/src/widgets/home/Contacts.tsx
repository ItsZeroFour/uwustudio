"use client";

import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { paths } from "@/paths";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { t } = useTranslation();

  return (
    <section className={style.contacts} id="contacts" ref={ref}>
      {inView && (
        <div className={style.contacts__wrapper__images}>
          <div className={style.contacts__wrapper__image__left} />
          <div className={style.contacts__wrapper__image__right} />
        </div>
      )}

      <div className="container">
        <div className={style.contacts__wrapper}>
          <div className={style.contacts__wrapper__main}>
            <aside className={style.contacts__form}>
              <form>
                <input type="text" placeholder={t("nameInput")} />
                <input type="text" placeholder={t("emailInput")} />
                <textarea placeholder={t("messageInput")} />
                <div className={style.contacts__policy}>
                  <input type="checkbox" id="contacts-policy" />
                  <label htmlFor="contacts-policy">
                    {t("contactsPolicyText")}{" "}
                    <Link href={paths.policy}>{t("contactsPolicy")}</Link>
                  </label>
                </div>
                <button type="submit">{t("sendButton")}</button>
              </form>
            </aside>

            <aside className={style.contacts__text}>
              <h2>{t("contactsTitle")}</h2>
              <p>{t("contactsText")}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
