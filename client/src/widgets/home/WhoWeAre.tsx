import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import WhoWeAreImage from "../../../public/images/home/who-we-are.png";

const WhoWeAre = () => {
  return (
    <section className={style.whoweare}>
      <div className="container">
        <div className={style.whoweare__wrapper}>
          <aside className={style.whoweare__main}>
            <h2>Кто мы?</h2>

            <div className={style.whoweare__text}>
              <p>
                Мы — команда профессионалов из Крыма, специализирующаяся на
                разработке сайтов и цифровом маркетинге. Наша студия
                предоставляет комплексные решения для ваших онлайн-потребностей,
                объединяя технологическую компетенцию с эстетикой дизайна.
              </p>

              <p>
                Гордясь географическим охватом, мы успешно обслуживаем клиентов
                по всем странам СНГ. Наша цель — преобразовывать бизнесы,
                внедряя цифровые технологии и повышая их конкурентоспособность.
                Мы не просто создаем веб-сайты; мы строим уникальные
                онлайн-пространства, которые выделяются в современном цифровом
                ландшафте.
              </p>

              <p>
                Приглашаем вас в увлекательное путешествие с нашей студией, где
                каждая ваша идея становится объектом нашего творчества.
                Доверьтесь нам с вашим веб-проектом, и мы гарантируем не только
                эффективность, но и стиль, соответствующий уникальности вашего
                бизнеса. Вместе мы создадим долгосрочное цифровое настоящее и
                будущее вашего предприятия!
              </p>
            </div>

            <div className={style.whoweare__links}>
              <Link href="/services">Заказать</Link>
              <Link href="#contacts">Связаться с нами</Link>
            </div>
          </aside>

          <aside className={style.whoweare__image}>
            <Image src={WhoWeAreImage} alt="statue" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
