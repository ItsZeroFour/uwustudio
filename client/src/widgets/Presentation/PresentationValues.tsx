import React from "react";
import style from "./style.module.scss";
import valuesImage1 from "../../../public/images/presentation/values-1.png";
import valuesImage2 from "../../../public/images/presentation/values-2.png";
import valuesImage3 from "../../../public/images/presentation/values-3.png";
import Image from "next/image";

const PresentationValues = () => {
  const valuesItems = [
    {
      title: "Качество",
      text: "Мы вкладываемся в каждый наш продукт по-максимуму, и обеспечиваем наилучшее качество",
      image: valuesImage1,
    },

    {
      title: "Прислушанность",
      text: "Мы прислушиваемся к требованиям и пожеланиям каждого клиента",
      image: valuesImage2,
    },

    {
      title: "Понимание",
      text: "Мы ценим ваше время, и поэтому стараемся разузнать все о проекте на самом старте, что бы не отвлекать вас лишний раз",
      image: valuesImage3,
    },
  ];

  return (
    <section className={style.presentation__values}>
      <div className="container">
        <div className={style.presentation__values__wrapper}>
          <h2>Наши ценности в разработке</h2>

          <ul>
            {valuesItems.map(({ title, text, image }, index) => (
              <li key={index}>
                <div className={style.presentation__image}>
                  <Image src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PresentationValues;
