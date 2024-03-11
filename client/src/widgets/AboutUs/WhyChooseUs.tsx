import React from "react";
import style from "./style.module.scss";
import ListImage1 from "../../../public/icons/about/experince.png";
import ListImage2 from "../../../public/icons/about/quality.png";
import ListImage3 from "../../../public/icons/about/communications.png";
import ListImage4 from "../../../public/icons/about/services.png";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className={style.why_choose_us}>
      <div className="container">
        <div className={style.why_choose_us__wrapper}>
          <h2>Почему выбирают нас?</h2>
          <p>
            В UwUStudio мы не просто создаем веб-сайты - мы строим долгосрочные
            партнерства, обеспечивая ваш бизнес успешными и инновационными
            решениями в онлайн-пространстве. Мы следим за современными трендами
            в вэб-разработке и вэб-дизайне, и внедряим их в каждый новый наш
            проект
          </p>

          <ul>
            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage1} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>Опыт</h3>
                <p>
                  Наша команда состоит из талантливых специалистов, готовых
                  воплотить ваши идеи в жизнь и поднять ваш бизнес на новый
                  уровень. Мы не придерживаемся шаблонов. Каждый проект
                  адаптирован под уникальные потребности вашего бизнеса,
                  создавая веб-решения, которые выделяются.
                </p>
              </div>
            </li>

            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage2} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>Качество</h3>
                <p>
                  Наша вэб-студия стремится к совершенству в каждом пикселе и
                  кодовой строке. Ваш проект — наше творение, и мы гордимся
                  предоставлением продуктов выдающегося качества. Каждый проект
                  проходит тщательное тестирование, чтобы гарантировать его
                  надежность и производительность.
                </p>
              </div>
            </li>

            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage3} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>Коммуникация</h3>
                <p>
                  Наши отношения с заказчиками строятся на принципах ясной и
                  открытой коммуникации. Мы ценим каждого клиента, и ваше
                  участие в процессе - для нас приоритет. Наши методы
                  обеспечивают легкость взаимодействия и обмена идеями на каждом
                  этапе работы.
                </p>
              </div>
            </li>

            <li>
              <div className={style.why_choose_us__image}>
                <Image src={ListImage4} alt="experience" />
              </div>

              <div className={style.why_choose_us__text}>
                <h3>Сервис</h3>
                <p>
                  Выбирая нас, вы получаете не просто вэб-студию, а надежного
                  партнера в создании вашего онлайн-присутствия. Наш сервис не
                  ограничится простым созданием веб-сайта; это полное
                  сопровождение от концепции до результата.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
