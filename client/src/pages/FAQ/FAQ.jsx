"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [questionShowIndex, setQuestionShowIndex] = useState(null);
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t("faqQuestion1Title"),
      answer: [
        t("faqQuestion1Answer1"),
        t("faqQuestion1Answer2"),
        t("faqQuestion1Answer3"),
        t("faqQuestion1Answer4"),
        t("faqQuestion1Answer5"),
        t("faqQuestion1Answer6"),
      ],
    },

    {
      question: t("faqQuestion2Title"),
      answer: [t("faqQuestion2Answer1"), t("faqQuestion2Answer2")],
    },

    {
      question: t("faqQuestion3Title"),
      answer: [
        t("faqQuestion3Answer1"),
        t("faqQuestion3Answer2"),
        t("faqQuestion3Answer3"),
        t("faqQuestion3Answer4"),
      ],
    },

    {
      question: t("faqQuestion4Title"),
      answer: [
        t("faqQuestion4Answer1"),
        t("faqQuestion4Answer2"),
        t("faqQuestion4Answer3"),
        t("faqQuestion4Answer4"),
        t("faqQuestion4Answer5"),
      ],
    },

    {
      question: t("faqQuestion5Title"),
      answer: [
        t("faqQuestion5Answer1"),
        t("faqQuestion5Answer2"),
        t("faqQuestion5Answer3"),
      ],
    },

    {
      question: t("faqQuestion6Title"),
      answer: [
        t("faqQuestion6Answer1"),
        t("faqQuestion6Answer2"),
        t("faqQuestion6Answer3"),
      ],
    },

    {
      question: t("faqQuestion7Title"),
      answer: [t("faqQuestion7Answer1"), t("faqQuestion7Answer2")],
    },

    {
      question: t("faqQuestion8Title"),
      answer: [
        t("faqQuestion8Answer1"),
        t("faqQuestion8Answer2"),
        t("faqQuestion8Answer3"),
        t("faqQuestion8Answer4"),
        t("faqQuestion8Answer5"),
      ],
    },

    {
      question: t("faqQuestion9Title"),
      answer: [t("faqQuestion9Answer1"), t("faqQuestion9Answer2")],
    },

    {
      question: t("faqQuestion10Title"),
      answer: [
        t("faqQuestion10Answer1"),
        t("faqQuestion10Answer2"),
        t("faqQuestion10Answer3"),
      ],
    },

    {
      question: t("faqQuestion11Title"),
      answer: [t("faqQuestion11Answer1")],
    },

    {
      question: t("faqQuestion12Title"),
      answer: [
        t("faqQuestion12Answer1"),
        t("faqQuestion12Answer2"),
        t("faqQuestion12Answer3"),
        t("faqQuestion12Answer4"),
        t("faqQuestion12Answer5"),
        t("faqQuestion12Answer6"),
      ],
    },

    {
      question: t("faqQuestion13Title"),
      answer: [
        t("faqQuestion13Answer1"),
        t("faqQuestion13Answer2"),
        t("faqQuestion13Answer3"),
      ],
    },
  ];

  return (
    <React.Fragment>
      <head>
        <title>FAQ - UWUSTUDIO</title>
        <meta
          name="description"
          content="На странице FAQ вы найдете ответы на часто задаваемые вопросы о работе с нами"
        />
      </head>
      <section className={style.faq}>
        <div className="container">
          <div className={style.faq__wrapper}>
            <ul>
              {faqItems.map(({ question, answer }, index) => (
                <li
                  key={index}
                  onClick={() =>
                    questionShowIndex !== index
                      ? setQuestionShowIndex(index)
                      : setQuestionShowIndex(null)
                  }
                >
                  <h4
                    className={questionShowIndex === index && style.faq__active}
                  >
                    {question}
                  </h4>

                  {answer.map((item) => (
                    <p
                      style={
                        questionShowIndex === index
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      {item}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FAQ;
