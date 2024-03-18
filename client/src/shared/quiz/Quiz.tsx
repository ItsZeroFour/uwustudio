import React from "react";
import style from "./style.module.scss";
import questionIcon1 from "../../../public/icons/quiz/quiz-image-1.png";
import questionIcon2 from "../../../public/icons/quiz/quiz-image-2.png";
import questionIcon3 from "../../../public/icons/quiz/quiz-image-3.png";
import questionOtherImage from "../../../public/icons/quiz/quiz-image-4.png";
import ArrowRight from "../../../public/icons/Arrow-Right.svg";
import Image from "next/image";

const Quiz = () => {
  const quizItems = [
    {
      questionTitle: "Какой тип сайта вам необходим?",
      questionText:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design",
      items: [
        {
          title: "Лендинг",
          text: "Одностраничный веб-ресурс, созданный для конкретной цели, такой как продажа товара или услуги, сбор контактной информации или регистрация на мероприятие",
          icon: questionIcon1,
        },

        {
          title: "Корпоративный сайт",
          text: "веб-ресурс, созданный для представления компании в интернете. Он обычно содержит информацию о компании, ее услугах или продукции, контактные данные и др.",
          icon: questionIcon2,
        },

        {
          title: "Сайт-визитка",
          text: "это небольшой веб-ресурс, содержащий основную информацию о человеке, компании или проекте, включая контактные данные и краткое описание предложений или услуг",
          icon: questionIcon3,
        },

        {
          title: "Другое",
          text: "Если не нашли подходящую для вас позицию, нажмите сюда, но не забудьте указать в комментарии, что именно вы хотите",
          icon: questionOtherImage,
        },
      ],

      index: 1,
    },

    {
      questionTitle: "",
      questionText: "",
      items: [
        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },
      ],

      index: 2,
    },

    {
      questionTitle: "",
      questionText: "",
      items: [
        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },
      ],

      index: 3,
    },

    {
      questionTitle: "",
      questionText: "",
      items: [
        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },
      ],

      index: 4,
    },

    {
      questionTitle: "",
      questionText: "",
      items: [
        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },

        {
          title: "",
          text: "",
          icon: questionIcon1,
        },
      ],

      index: 5,
    },
  ];

  return (
    <section className={style.quiz}>
      <div className="container">
        <div className={style.quiz__wrapper}>
          <aside className={style.quiz__info}>
            <p>1/{quizItems.length}</p>

            <div className={style.quiz__info__main}>
              <h3>{quizItems[0].questionTitle}</h3>
              <p>{quizItems[0].questionText}</p>
            </div>
          </aside>
          <aside className={style.quiz__options}>
            <ul>
              {quizItems[0].items.map(({ title, text, icon }, index) => (
                <li className={style.quiz__option} key={index}>
                  <Image src={icon} alt={title} />

                  <div className={style.quiz__option__text}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>

                  <ArrowRight />
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
