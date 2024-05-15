"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import questionIcon1 from "../../../public/icons/quiz/quiz-image-1.png";
import questionIcon2 from "../../../public/icons/quiz/quiz-image-2.png";
import questionIcon3 from "../../../public/icons/quiz/quiz-image-3.png";
import questionOtherImage from "../../../public/icons/quiz/quiz-image-4.png";
import ArrowRight from "../../../public/icons/Arrow-Right.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Quiz = () => {
  const [quizResults, setQuizResults] = useState({});

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [contactType, setContactType] = useState("email");

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
          icon: questionIcon1,
        },

        {
          title: t("quiz2ListItem2Title"),
          text: t("quiz2ListItem2Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz2ListItem3Title"),
          text: t("quiz2ListItem3Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz2ListItem4Title"),
          text: t("quiz2ListItem4Desc"),
          icon: questionIcon1,
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
          icon: questionIcon1,
        },

        {
          title: t("quiz3ListItem2Title"),
          text: t("quiz3ListItem2Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz3ListItem3Title"),
          text: t("quiz3ListItem3Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz3ListItem4Title"),
          text: t("quiz3ListItem4Desc"),
          icon: questionIcon1,
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
          icon: questionIcon1,
        },

        {
          title: t("quiz4ListItem2Title"),
          text: t("quiz4ListItem2Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz4ListItem3Title"),
          text: t("quiz4ListItem3Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz4ListItem4Title"),
          text: t("quiz4ListItem4Desc"),
          icon: questionIcon1,
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
          icon: questionIcon1,
        },

        {
          title: t("quiz5ListItem2Title"),
          text: t("quiz5ListItem2Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz5ListItem3Title"),
          text: t("quiz5ListItem3Desc"),
          icon: questionIcon1,
        },

        {
          title: t("quiz5ListItem4Title"),
          text: t("quiz5ListItem4Desc"),
          icon: questionIcon1,
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

  return (
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
                <a href="tel:+79788224212">+7(978)-822-42-12</a>
              </p>
            </div>

            <form>
              <input type="text" placeholder={t("quizNamePlaceholder")} />
              <input type="text" placeholder={t("quizEmailPlaceholder")} />
              <textarea placeholder={t("quizMessagePlaceholder")} />
              <button>{t("quizContactSendButton")}</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
