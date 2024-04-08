import React from "react";
import style from "./style.module.scss";
import ArrowRight from "../../../public/icons/Arrow-Right.svg";
import Link from "next/link";

const Documents = () => {
  const documentsList = [
    {
      title: "Реквизиты ИП",
      link: "",
    },

    {
      title: "П-Дизайн и разработка",
      link: "",
    },

    {
      title: "Договор",
      link: "",
    },

    {
      title: "Реквизиты",
      link: "",
    },

    {
      title: "П-SEO",
      link: "",
    },

    {
      title: "Договор самозанятым",
      link: "",
    },

    {
      title: "П-Агрегация",
      link: "",
    },

    {
      title: "Реквизиты физ. лицам",
      link: "",
    },

    {
      title: "Презентация",
      link: "",
    },
  ];

  const documentsStages = [
    "Знакомство с компанией, сбор и анализ информации",
    "Заключание договора о создании сайта",
    "Составление технического задания на разработку сайта, cоздание макета и дизайна сайта, yтверждение макета с клиентом.",
    "Непосредственное создание кода и функционала сайта, тестирование работы сайта на различных устройствах и браузерах",
    "Окончательное согласование сайта с клиентом, подготовка всех необходимых документов и передача сайта клиенту",
    "Разработка документации по использованию и управлению сайтом, архивирование всех документов, связанных с проектом",
  ];

  return (
    <section className={style.documents}>
      <div className="container">
        <div className={style.documents__wrapper}>
          <h1>Документы UWUSTUDIO</h1>
          <p>
            Мы уверены, что предоставляемая здесь информация будет полезна для
            вас. Если у вас возникли вопросы или вам требуется дополнительная
            информация, не стесняйтесь связаться с нами. Мы всегда готовы
            помочь.
          </p>

          <aside className={style.documents__list}>
            <h2>Наш перечень документов</h2>

            <ul>
              {documentsList.map(({ title, link }, index) => (
                <li key={index}>
                  <Link href={link}>
                    <p>{title}</p>
                    <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <aside className={style.documents__stages}>
            <h2>Документообробот</h2>
            <ul>
              {documentsStages.map((item, index) => (
                <li key={index}>
                  <p>
                    {index + 1 >= 10 ? (
                      <span>{index + 1}</span>
                    ) : (
                      <>
                        0<span>{index + 1}</span>
                      </>
                    )}
                  </p>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Documents;
