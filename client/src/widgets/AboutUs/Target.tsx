import React from "react";
import style from "./style.module.scss";
import { paths } from "@/paths";
import Link from "next/link";

const Target = () => {
  return (
    <section className={style.target}>
      <div className="container">
        <div className={style.target__wrapper}>
          <h2>Наша цель</h2>
          <p>
            Наши цели ставят перед собой высший стандарт в сфере веб-разработки
            и дизайна. Мы стремимся к тому, чтобы каждый проект, который мы
            создаем, не просто соответствовал ожиданиям, но и превосходил их. В
            мире постоянных изменений и инноваций, наша веб-студия утверждает
            свою роль лидера, нацеленного на поиск новых горизонтов в цифровом
            мире
          </p>
          <Link href={paths.contacts}>Контакты</Link>
        </div>
      </div>
    </section>
  );
};

export default Target;
