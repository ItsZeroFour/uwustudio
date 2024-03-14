import React from "react";
import ambitionsImages from "../../../public/images/presentation/ambitions.png";
import style from "./style.module.scss";
import Image from "next/image";
import Socials from "@/shared/socials/Socials";

const PresentationAmbitions = () => {
  return (
    <section className={style.presentation__ambitions}>
      <div className="container">
        <div className={style.presentation__ambitions__wrapper}>
          <aside className={style.presentation__ambitions__left}>
            <p>
              Большие амбиции для нас - это не просто мечты о успехе, это
              стратегия, вдохновляющая нас к постоянному превосходству. Мы видим
              перед собой высокие стандарты качества и инноваций, и стремимся
              превзойти их в каждом проекте. Наша цель - не просто
              соответствовать ожиданиям, а стать лидерами в сфере
              веб-разработки, дизайна и маркетинга, создавая продукты, которые
              не просто служат, но и вдохновляют
            </p>

            <p>
              Мы не останавливаемся на достигнутом, мы идем дальше и стремимся к
              новым горизонтам в веб-индустрии. Наша амбиция не знает границ -
              мы видим себя не просто как участников рынка, а как пионеров,
              определяющих новые стандарты и направления развития. Наша миссия -
              не просто создавать веб-проекты, а преобразовывать цифровой
              ландшафт, внедряя инновационные технологии и стратегии, которые
              меняют правила игры и открывают новые возможности для наших
              клиентов. Мы готовы принимать вызовы и идти вперед с уверенностью
              и решимостью, чтобы достичь новых высот и добиться по-настоящему
              впечатляющих результатов
            </p>

            <Socials />
          </aside>
          <aside className={style.presentation__ambitions__right}>
            <h2>Большие амбиции</h2>
            <Image src={ambitionsImages} alt="laptop" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PresentationAmbitions;
