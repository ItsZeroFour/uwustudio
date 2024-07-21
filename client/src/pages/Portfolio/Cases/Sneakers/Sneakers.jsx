import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import sneakerImg from "../../../../../public/images/portfolio/cases/sneakers/sneaker.png";
import screenImg from "../../../../../public/images/portfolio/cases/sneakers/screen.png";
import Link from "next/link";

const Sneakers = () => {
  return (
    <React.Fragment>
      <head>
        <title>Магазин кросовок в Симферополе - UWUSTUDIO</title>
        <meta
          name="description"
          content="Разработка веб-сайта для магазина кроссовок в Симферополе от UWUSTUDIO. Мы создали современный и удобный сайт, который предлагает пользователям широкий ассортимент кроссовок, простую навигацию и интуитивно понятный интерфейс для удобного покупательского опыта. Сайт включает элементы e-commerce и адаптивный дизайн для всех устройств."
        />

        <meta
          name="keywords"
          content="магазин кроссовок, Симферополь, веб-дизайн, UWUSTUDIO, разработка сайта, e-commerce, онлайн-магазин, кроссовки, адаптивный дизайн, интернет-магазин, пользовательский опыт, создание сайта для магазина"
        />
      </head>

      <section className={style.case__head}>
        <div className="container">
          <div className={style.case__head__wrapper}>
            <aside className={style.case__head__left}>
              <h1>Магазин кросовок в Симферополе</h1>

              <ul>
                <li>Исследование ниши</li>
                <li>Верстка</li>
                <li>Разработка прототипа</li>
                <li>SEO Оптимизация</li>
                <li>Дизайн</li>
              </ul>

              <Link className={style.case__head__button} href="#first">
                <svg className="circle" viewBox="0 0 100 100">
                  <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />

                  <text>
                    <textPath href="#circle">просомтретьпросомтреть</textPath>
                  </text>
                </svg>
              </Link>
            </aside>
            <aside className={style.case__head__right}>
              <Image src={sneakerImg} alt="sneaker" />
            </aside>
          </div>
        </div>
      </section>

      <section className={style.case__research} id="first">
        <div className="container">
          <div className={style.case__research__wrapper}>
            <h2>Исследование и Анализ</h2>
            <p>
              Первым этапом нашего проекта стало проведение детального
              исследования рынка кроссовок в Симферополе. Мы проанализировали
              текущие тенденции и предпочтения потребителей в спортивной обуви.
              Важно было понять, какие модели и бренды пользуются наибольшим
              спросом, какие особенности важны для покупателей при выборе
              кроссовок, и какие каналы продаж наиболее эффективны.
            </p>

            <p>
              Для определения целевой аудитории мы провели сегментацию рынка,
              выделив основные группы потребителей:
            </p>

            <ul>
              <li>
                <h3>Молодежь (18-25 лет)</h3>
                <p>
                  активные пользователи социальных сетей, стремящиеся к модным и
                  трендовым моделям.
                </p>
              </li>

              <li>
                <h3>Спортсмены и фитнес-энтузиасты (25-35 лет)</h3>
                <p>
                  ищущие высококачественную и функциональную обувь для занятий
                  спортом.
                </p>
              </li>

              <li>
                <h3>Семейные покупатели (30-45 лет)</h3>
                <p>
                  выбирающие обувь для всей семьи с акцентом на удобство и
                  долговечность.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={style.case__competitors}>
        <div className="container">
          <div className={style.competitors__wrapper}>
            <h2>Анализ конкурентов</h2>
            <p>
              Для успешного запуска интернет-магазина кроссовок в Симферополе мы
              провели анализ конкурентов. Были изучены сайты ведущих магазинов
              спортивной обуви в регионе и за его пределами. Мы уделили внимание
              следующим аспектам:
            </p>

            <ul>
              <li>
                <h3>Дизайн и структура сайтов</h3>
                <p>
                  Оценили удобство навигации, визуальную привлекательность,
                  использование цветовой схемы и типографики.
                </p>
              </li>

              <li>
                <h3>Функциональность</h3>
                <p>
                  проанализировали интеграцию с платежными системами, наличие
                  функций поиска и фильтрации товаров, отзывов и рейтингов.
                </p>
              </li>

              <li>
                <h3>Контент и маркетинг</h3>
                <p>
                  исследовали методы продвижения, используемые конкурентами,
                  включая SEO, социальные сети и рекламные кампании.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={style.case__utp}>
        <div className="container">
          <div className={style.case__utp__wrapper}>
            <h2>Определение уникального торгового предложения (УТП)</h2>
            <p>
              На основании проведенного исследования мы разработали уникальное
              торговое предложение (УТП) для нашего интернет-магазина кроссовок.
              Наше УТП включает:
            </p>

            <ul>
              <li>
                <span>Широкий ассортимент</span>: предлагается большой выбор
                моделей от известных брендов, включая эксклюзивные коллекции.
              </li>
              <li>
                <span>Удобный интерфейс</span>: интуитивно понятная навигация и
                функционал, позволяющий быстро находить нужные товары и
                совершать покупки.
              </li>
              <li>
                <span>Профессиональные рекомендации</span>: консультации
                экспертов и персонализированные рекомендации для каждого
                клиента.
              </li>
              <li>
                <span>Быстрая доставка</span>: оперативная доставка по
                Симферополю и возможность самовывоза из магазина.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={style.case__design}>
        <div className="container">
          <div className={style.case__design__wrapper}>
            <aside className={style.case__design__left}>
              <h2>Концепция и Дизайн</h2>
              <p>
                На этапе разработки концепции сайта мы сосредоточились на
                создании уникального пользовательского опыта, который бы
                соответствовал ожиданиям нашей целевой аудитории. Основная идея
                заключалась в том, чтобы сочетать современные технологии и
                эстетически привлекательный дизайн с удобством использования и
                функциональностью. Мы хотели, чтобы наш интернет-магазин
                кроссовок был не только красивым, но и эффективным с точки
                зрения продаж.
              </p>

              <p>
                Для начала мы разработали несколько прототипов, которые помогли
                визуализировать основные элементы и структуру сайта. Это
                включало:
              </p>

              <ul>
                <li>
                  <span>Главную страницу</span>: привлекающую внимание стильными
                  баннерами и акциями.
                </li>
                <li>
                  <span>Каталог товаров</span>: с удобными фильтрами по брендам,
                  размерам и ценам.
                </li>
                <li>
                  <span>Карточку товара</span>: с детальным описанием,
                  фотографиями и отзывами покупателей.
                </li>
                <li>
                  <span>Корзину и страницу оформления заказа</span>: с простой и
                  понятной процедурой покупки.
                </li>
              </ul>
            </aside>
            <aside className={style.case__design__right}>
              <Image src={screenImg} alt="screen" />
            </aside>
          </div>
          <p className={style.case__design__text}>
            После утверждения прототипов мы приступили к созданию
            высококачественных макетов, которые демонстрировали точное
            расположение всех элементов, цветовую палитру и типографику.
          </p>
        </div>
      </section>

      <section className={style.case__develop}>
        <div className="container">
          <div className={style.case__develop__wrapper}>
            <h2>Разработка</h2>
            <p>
              Для создания высококачественного и функционального
              интернет-магазина кроссовок в Симферополе мы выбрали следующий
              технологический стек:
            </p>

            <ul>
              <li>
                React.js: для разработки отзывчивого и быстрого
                пользовательского интерфейса (UI).
              </li>
              <li>
                Node.js и Express.js: для создания серверной части приложения.
              </li>
              <li>
                MongoDB: для хранения данных о товарах, пользователях и заказах.
              </li>
              <li>Reg.ru: для хостинга и обеспечения масштабируемости.</li>
            </ul>

            <p>
              Одной из ключевых задач было обеспечение адаптивности дизайна,
              чтобы наш интернет-магазин выглядел и функционировал отлично на
              любых устройствах, будь то настольные компьютеры, планшеты или
              смартфоны.
            </p>
            <p>
              Этап разработки включал в себя тщательное планирование, выбор
              современных технологий и создание удобного, безопасного и
              привлекательного сайта. Благодаря использованию передовых
              технологий и методов мы смогли создать интернет-магазин, который
              не только удовлетворяет потребности пользователей, но и выделяется
              на фоне конкурентов.
            </p>
          </div>
        </div>
      </section>

      <section className={style.case__total}>
        <div className="container">
          <div className={style.case__total__wrapper}>
            <h2>Заключение</h2>

            <p>
              Проект по созданию интернет-магазина кроссовок в Симферополе стал
              отличным примером слаженной и эффективной работы нашей веб-студии.
              Мы начали с тщательного исследования рынка и целевой аудитории,
              что позволило нам четко понять потребности и предпочтения наших
              потенциальных клиентов. Анализ конкурентов помог выявить лучшие
              практики и недостатки существующих решений, что стало основой для
              разработки уникального торгового предложения.
            </p>

            <p>
              На этапе концепции и дизайна мы создали визуально привлекательный
              и интуитивно понятный интерфейс, ориентированный на удобство
              пользователя. Прототипы и макеты позволили нам заранее
              визуализировать ключевые элементы сайта и утвердить оптимальную
              структуру. Выбор цветовой схемы и типографики подчеркнул стиль и
              индивидуальность нашего интернет-магазина.
            </p>

            <p>
              Тщательно подобранный технологический стек и продуманный процесс
              разработки обеспечили высокую производительность и безопасность
              сайта. Адаптивный дизайн гарантирует удобство использования на
              любых устройствах, что является критически важным в современных
              условиях. Интеграция с платежными системами и сервисами доставки
              сделала процесс покупки простым и надежным.
            </p>
            <p>
              В ходе тестирования и оптимизации мы убедились, что сайт работает
              безупречно на всех платформах и быстро загружается.
              SEO-оптимизация помогла улучшить видимость сайта в поисковых
              системах, что привело к увеличению трафика и, как следствие,
              продаж.
            </p>
            <p>
              Запуск проекта прошел успешно, и мы продолжили поддерживать его,
              обеспечивая регулярные обновления и техническую поддержку.
              Результаты превзошли наши ожидания: увеличились продажи,
              расширилась клиентская база, а положительные отзывы клиентов
              подтвердили правильность выбранной стратегии.
            </p>
            <p>
              В процессе работы над этим проектом мы получили ценный опыт и
              новые знания, которые будем применять в будущих проектах.
              Интернет-магазин кроссовок в Симферополе стал не только успешным
              коммерческим предприятием, но и важным шагом в развитии нашей
              веб-студии. Мы гордимся результатами и уверены, что наш подход и
              профессионализм будут высоко оценены нашими клиентами и
              партнерами.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sneakers;
