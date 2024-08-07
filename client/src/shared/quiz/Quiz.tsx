"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import questionIcon1 from "../../../public/icons/quiz/quiz-image-1.png";
import questionIcon2 from "../../../public/icons/quiz/quiz-image-2.png";
import questionIcon3 from "../../../public/icons/quiz/quiz-image-3.png";
import questionOtherImage from "../../../public/icons/quiz/quiz-image-4.png";

import questionIcon5 from "../../../public/icons/quiz/quiz-image-5.png";
import questionIcon6 from "../../../public/icons/quiz/quiz-image-6.png";
import questionIcon7 from "../../../public/icons/quiz/quiz-image-7.png";

import questionIcon8 from "../../../public/icons/quiz/quiz-image-8.png";
import questionIcon9 from "../../../public/icons/quiz/quiz-image-9.png";
import questionIcon10 from "../../../public/icons/quiz/quiz-image-10.png";

import questionIcon11 from "../../../public/icons/quiz/quiz-image-11.png";
import questionIcon12 from "../../../public/icons/quiz/quiz-image-12.png";
import questionIcon13 from "../../../public/icons/quiz/quiz-image-13.png";

import questionIcon14 from "../../../public/icons/quiz/quiz-image-14.png";
import questionIcon15 from "../../../public/icons/quiz/quiz-image-15.png";
import questionIcon16 from "../../../public/icons/quiz/quiz-image-16.png";

import questionIcon17 from "../../../public/icons/quiz/quiz-image-17.png";
import ArrowRight from "../../../public/icons/Arrow-Right.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import axios from "../../utils/axios";
import Link from "next/link";
import { paths } from "@/paths";
import Notification from "../notification/Notification";

const Quiz = () => {
  const [quizResults, setQuizResults] = useState({});

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [contactType, setContactType] = useState("email");
  const [userIsAgreePolicy, setUserIsAgreePolicy] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [messageIsSend, setMessageIsSend] = useState(false);
  const [messageSendSuccess, setMessageSendSuccess] = useState(false);
  const [messageText, setMessageText] = useState("");

  const { t } = useTranslation();

  const quizItems = [
    {
      questionTitle: t("quiz1Title"),
      questionText: t("quiz1Desc"),
      items: [
        {
          title: t("quiz1ListItem1Title"),
          text: t("quiz1ListItem1Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz1ListItem2Title"),
          text: t("quiz1ListItem2Desc"),
          icon: questionIcon2,
        },

        {
          title: t("quiz1ListItem3Title"),
          text: t("quiz1ListItem3Desc"),
          icon: questionIcon3,
        },

        {
          title: t("quiz1ListItem4Title"),
          text: t("quiz1ListItem4Desc"),
          icon: questionOtherImage,
        },
      ],

      index: 1,
    },

    {
      questionTitle: t("quiz2Title"),
      questionText: t("quiz2Desc"),
      items: [
        {
          title: t("quiz2ListItem1Title"),
          text: t("quiz2ListItem1Desc"),
          icon: questionIcon5,
        },

        {
          title: t("quiz2ListItem2Title"),
          text: t("quiz2ListItem2Desc"),
          icon: questionIcon6,
        },

        {
          title: t("quiz2ListItem3Title"),
          text: t("quiz2ListItem3Desc"),
          icon: questionIcon7,
        },

        {
          title: t("quiz2ListItem4Title"),
          text: t("quiz2ListItem4Desc"),
          icon: questionIcon8,
        },
      ],

      index: 2,
    },

    {
      questionTitle: t("quiz3Title"),
      questionText: t("quiz3Desc"),
      items: [
        {
          title: t("quiz3ListItem1Title"),
          text: t("quiz3ListItem1Desc"),
          icon: questionIcon9,
        },

        {
          title: t("quiz3ListItem2Title"),
          text: t("quiz3ListItem2Desc"),
          icon: questionIcon10,
        },

        {
          title: t("quiz3ListItem3Title"),
          text: t("quiz3ListItem3Desc"),
          icon: questionIcon11,
        },

        {
          title: t("quiz3ListItem4Title"),
          text: t("quiz3ListItem4Desc"),
          icon: questionOtherImage,
        },
      ],

      index: 3,
    },

    {
      questionTitle: t("quiz4Title"),
      questionText: t("quiz4Desc"),
      items: [
        {
          title: t("quiz4ListItem1Title"),
          text: t("quiz4ListItem1Desc"),
          icon: questionIcon12,
        },

        {
          title: t("quiz4ListItem2Title"),
          text: t("quiz4ListItem2Desc"),
          icon: questionIcon13,
        },

        {
          title: t("quiz4ListItem3Title"),
          text: t("quiz4ListItem3Desc"),
          icon: questionIcon14,
        },

        {
          title: t("quiz4ListItem4Title"),
          text: t("quiz4ListItem4Desc"),
          icon: questionOtherImage,
        },
      ],

      index: 4,
    },

    {
      questionTitle: t("quiz5Title"),
      questionText: t("quiz5Desc"),
      items: [
        {
          title: t("quiz5ListItem1Title"),
          text: t("quiz5ListItem1Desc"),
          icon: questionIcon15,
        },

        {
          title: t("quiz5ListItem2Title"),
          text: t("quiz5ListItem2Desc"),
          icon: questionIcon16,
        },

        {
          title: t("quiz5ListItem3Title"),
          text: t("quiz5ListItem3Desc"),
          icon: questionIcon17,
        },

        {
          title: t("quiz5ListItem4Title"),
          text: t("quiz5ListItem4Desc"),
          icon: questionOtherImage,
        },
      ],

      index: 5,
    },
  ];

  const handleOptionClick = (title: string, index: number) => {
    const resultKey = `questionAnswer${index}`;
    setQuizResults((prevState) => ({
      ...prevState,
      [resultKey]: title,
    }));

    if (currentQuizIndex !== quizItems.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setFinish(true);
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (!name || !contact || !message || !contactType || !quizResults) {
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
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/email/sendQuizMail`,
        {
          name,
          contact,
          message,
          services: quizResults,
          contactType: contactType,
        }
      );
      setMessageText("Письмо успешно отправлено!");
      setName("");
      setMessage("");
      setContact("");
      setMessageSendSuccess(true);
      setMessageIsSend(true);
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
      <section className={style.quiz}>
        <div className="container">
          <h2>{t("quizTitle")}</h2>

          {!finish ? (
            <div className={style.quiz__wrapper}>
              <aside className={style.quiz__info}>
                <p>
                  {currentQuizIndex + 1}/{quizItems.length}
                </p>

                <div className={style.quiz__info__main}>
                  <h3>{quizItems[currentQuizIndex].questionTitle}</h3>
                  <p>{quizItems[currentQuizIndex].questionText}</p>
                </div>
              </aside>
              <aside className={style.quiz__options}>
                <ul>
                  {quizItems[currentQuizIndex].items.map(
                    ({ title, text, icon }, index) => (
                      <li
                        className={style.quiz__option}
                        key={index}
                        onClick={() =>
                          handleOptionClick(
                            title,
                            quizItems[currentQuizIndex].index
                          )
                        }
                      >
                        <div>
                          <Image src={icon} alt={title} />

                          <div className={style.quiz__option__text}>
                            <h4>{title}</h4>
                            <p>{text}</p>
                          </div>
                        </div>

                        <ArrowRight />
                      </li>
                    )
                  )}
                </ul>
              </aside>
            </div>
          ) : (
            <div className={style.quiz__wrapper__contact}>
              <h2>{t("quizThanks")}</h2>

              <div className={style.quiz__wrapper__text}>
                <p>{t("quizThanksDesc")}</p>
              </div>

              <div className={style.quiz__wrapper__contact__type}>
                <form>
                  <input
                    type="radio"
                    name="contact-type"
                    id="email"
                    onClick={() => setContactType("email")}
                    checked={contactType === "email"}
                  />
                  <label htmlFor="email">{t("quizContactEmail")}</label>
                  <input
                    type="radio"
                    name="contact-type"
                    id="telegram"
                    onClick={() => setContactType("telegram")}
                    checked={contactType === "telegram"}
                  />
                  <label htmlFor="telegram">{t("quizContactTelegram")}</label>
                </form>

                <p>
                  {t("quizContactPhone")}:{" "}
                  <a href="tel:+79788224212">+7(978)-568-85-35</a>
                </p>
              </div>

              <form>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  placeholder={t("quizNamePlaceholder")}
                />
                <input
                  type="text"
                  onChange={(event) => setContact(event.target.value)}
                  value={contact}
                  placeholder={
                    contactType === "email"
                      ? t("quizEmailPlaceholder")
                      : t("quizTelegramPlaceholder")
                  }
                />
                <textarea
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                  placeholder={t("quizMessagePlaceholder")}
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
                <button disabled={!userIsAgreePolicy} onClick={submitForm}>
                  {t("quizContactSendButton")}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Quiz;
