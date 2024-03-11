"use client";

import React, { useState } from "react";
import style from "./style.module.scss";

const FAQ = () => {
  const [questionShowIndex, setQuestionShowIndex] = useState<number | null>(
    null
  );

  const faqItems = [
    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },

    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },

    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },

    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },

    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },

    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },

    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },

    {
      question: "Как вы работаете",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda sapiente dolorem adipisci obcaecati, tenetur ratione quis sunt blanditiis veniam tempora velit eius accusamus perspiciatis? Totam debitis quibusdam minima dolorem.",
    },
  ];

  return (
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

                <p
                  style={
                    questionShowIndex === index
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
