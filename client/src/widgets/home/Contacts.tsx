"use client";

import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Contacts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className={style.contacts} id="contacts" ref={ref}>
      {inView && (
        <div className={style.contacts__wrapper__images}>
          <div className={style.contacts__wrapper__image__left} />
          <div className={style.contacts__wrapper__image__right} />
        </div>
      )}

      <div className="container">
        <div className={style.contacts__wrapper}>
          <div className={style.contacts__wrapper__main}>
            <aside className={style.contacts__form}>
              <form>
                <input type="text" placeholder="Ваше имя" />
                <input type="text" placeholder="Ваш e-mail" />
                <textarea placeholder="Ваше сообщение" />
                <div className={style.contacts__policy}>
                  <input type="checkbox" id="contacts-policy" />
                  <label htmlFor="contacts-policy">
                    Отправляя сообщение, я подтверждаю, что ознакомился с{" "}
                    <Link href="/policy">Политикой конфеденциальности</Link>
                  </label>
                </div>
                <button type="submit">Отправить</button>
              </form>
            </aside>

            <aside className={style.contacts__text}>
              <h2>Свяжитесь с нами</h2>
              <p>
                Нужен всего 1 шаг, что бы получить проект мечты. Мы готовы
                превратить ваши идеи в визуальные шедевры, обеспечивая
                выдающийся пользовательский опыт. Если у вас есть вопросы,
                предложения или вы хотите обсудить свой следующий проект,
                свяжитесь с нами прямо сейчас!
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
