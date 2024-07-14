"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { paths } from "@/paths";
import { useTranslation } from "react-i18next";
import axios from "../../utils/axios";
import Notification from "../../shared/notification/Notification";
import leftHeadImg from "../../../public/images/home/contacts-head-left.png";
import rightHeadImg from "../../../public/images/home/contacts-head-right.png";
import Image from "next/image";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userIsAgreePolicy, setUserIsAgreePolicy] = useState(false);

  const [messageIsSend, setMessageIsSend] = useState(false);
  const [messageSendSuccess, setMessageSendSuccess] = useState(false);
  const [messageText, setMessageText] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { t } = useTranslation();

  const submitForm = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setMessageText("Пожалуйста, заполните все поля");
      setMessageSendSuccess(false);
      setMessageIsSend(true);
      return;
    }

    if (!userIsAgreePolicy) {
      setMessageText(
        "Подтвердите, что вы согласны с политикой конфиденциальности"
      );
      setMessageSendSuccess(false);
      setMessageIsSend(true);
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/email/sendMail`, {
        name,
        email,
        message,
      });
      setMessageText("Письмо успешно отправлено!");
      setMessageSendSuccess(true);
      setMessageIsSend(true);
      setName("");
      setMessage("");
      setEmail("");
    } catch (error) {
      setMessageText(`Произошла ошибка, ${error}`);
      setMessageSendSuccess(false);
      setMessageIsSend(true);
    }
  };

  useEffect(() => {
    if (messageIsSend) {
      const timeoutId = setTimeout(() => {
        setMessageIsSend(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [messageIsSend]);

  console.log(inView);

  return (
    <React.Fragment>
      {messageIsSend && (
        <Notification
          isSuccess={messageSendSuccess}
          message={messageText}
          isVisible={messageIsSend}
          setMessageIsSend={setMessageIsSend}
        />
      )}
      <section className={style.contacts} id="contacts" ref={ref}>
        {inView && (
          <div className={style.contacts__wrapper__images}>
            <Image
              className={style.contacts__wrapper__image__left}
              src={leftHeadImg}
              alt="left head"
              loading="eager"
            />
            <Image
              className={style.contacts__wrapper__image__right}
              src={rightHeadImg}
              alt="right head"
              loading="eager"
            />
          </div>
        )}

        <div className="container">
          <div className={style.contacts__wrapper}>
            <div className={style.contacts__wrapper__main}>
              <aside className={style.contacts__form}>
                <form>
                  <input
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    placeholder={t("nameInput")}
                  />
                  <input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t("emailInput")}
                  />
                  <textarea
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={t("messageInput")}
                  />
                  <div className={style.contacts__policy}>
                    <input
                      type="checkbox"
                      onClick={() => setUserIsAgreePolicy(!userIsAgreePolicy)}
                      id="contacts-policy"
                    />
                    <label htmlFor="contacts-policy">
                      {t("contactsPolicyText")}{" "}
                      <Link href={paths.policy}>{t("contactsPolicy")}</Link>
                    </label>
                  </div>
                  <button
                    onClick={submitForm}
                    disabled={!userIsAgreePolicy}
                    style={
                      !userIsAgreePolicy
                        ? { background: "#d9d9d9" }
                        : { background: "#fff" }
                    }
                    type="submit"
                  >
                    {t("sendButton")}
                  </button>
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
    </React.Fragment>
  );
};

export default Contacts;
