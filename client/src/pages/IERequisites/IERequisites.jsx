import React from "react";
import style from "./style.module.scss";
import Link from "next/link";

const IERequisites = () => {
  return (
    <React.Fragment>
      <section className={style.requisites}>
        <div className="container">
          <div className={style.requisites__wrapper}>
            <aside className={style.requisites__left}>
              <h2>Реквизиты</h2>

              <ul>
                <li>
                  <p>Юридический адрес</p>
                  <p>Джанкойский р-он, п. Азовское ул. Чкалово д. 80</p>
                </li>

                <li>
                  <p>ИНН</p>
                  <p>910500018102</p>
                </li>

                <li>
                  <p>ОГРНИП</p>
                  <p>314910226700041</p>
                </li>

                <li>
                  <p>Р/С</p>
                  <p>40802810541000000147</p>
                </li>

                <li>
                  <p>Банк</p>
                  <p>РНКБ Банк (ПАО) г. Симферополь</p>
                </li>

                <li>
                  <p>К/С банка</p>
                  <p>30101810335100000607</p>
                </li>

                <li>
                  <p>БИК банка</p>
                  <p>043510607</p>
                </li>
              </ul>
            </aside>

            <aside className={style.requisites__right}>
              <h2>Контакты</h2>

              <ul>
                <li>
                  <p>Почта</p>
                  <p>
                    <Link href="mailto:hello@uwustudio.ru">
                      hello@uwustudio.ru
                    </Link>
                  </p>
                </li>

                <li>
                  <p>Телефон</p>
                  <p>
                    <Link href="tel:+79785688535">+79785688535</Link>
                  </p>
                </li>

                <li>
                  <p>Время работы</p>
                  <p>Круглосуточно 10:00 –18:00 по МСК</p>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IERequisites;
