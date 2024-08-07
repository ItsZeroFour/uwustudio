import React from "react";
import style from "./style.module.scss";
import educationImg from "../../../../../public/images/portfolio/cases/simfpoliteh/education.png";
import laptopImg from "../../../../../public/images/portfolio/cases/simfpoliteh/laptop.png";
import screen1Img from "../../../../../public/images/portfolio/cases/simfpoliteh/screen-1.png";
import screen2Img from "../../../../../public/images/portfolio/cases/simfpoliteh/screen-2.png";
import Link from "next/link";
import Image from "next/image";

const Simfpoliteh = () => {
  return (
    <React.Fragment>
      <head>
        <title>Симферопольский Политехнический колледж - UWUSTUDIO</title>
        <meta
          name="description"
          content="Профессиональная разработка сайта для Симферопольского Политехнического колледжа от UWUSTUDIO. Мы создали современный, адаптивный и функциональный веб-сайт, который отражает образовательные ценности и предоставляет актуальную информацию о факультетах, курсах и событиях колледжа."
        />

        <meta
          name="keywords"
          content="разработка сайта, Симферопольский Политехнический колледж, UWUSTUDIO, веб-дизайн, адаптивный сайт, портфолио веб-студии, образовательный сайт, дизайн для колледжа, разработка интерфейса, пользовательский опыт"
        />
      </head>

      <section className={style.case__head}>
        <div className="container">
          <div className={style.case__head__wrapper}>
            <aside className={style.case__head__left}>
              <h1>Симферопольский Политехнический колледж</h1>

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
              <Image src={educationImg} alt="education" />
            </aside>
          </div>
        </div>
      </section>

      <section className={style.case__introduction} id="first">
        <div className="container">
          <div className={style.case__introduction__wrapper}>
            <p>
              Проект по созданию официального сайта для Симферопольского
              политехнического колледжа стал важным шагом в развитии нашего
              портфолио. Основной целью данного проекта было создание
              современной, функциональной и удобной онлайн-платформы, которая бы
              эффективно служила как текущим студентам и преподавателям, так и
              потенциальным абитуриентам и их родителям.
            </p>

            <div className={style.case__introduction__image__laptop}>
              <Image src={laptopImg} alt="laptop" />
            </div>

            <p>Перед нами стояли следующие задачи:</p>

            <ul>
              <li>
                Обеспечить удобный доступ к актуальной информации о колледже,
                его образовательных программах и деятельности.
              </li>
              <li>
                Создать интуитивно понятную навигацию и привлекательный дизайн,
                соответствующий имиджу образовательного учреждения.
              </li>
              <li>
                Разработать и внедрить кастомную админ-панель, которая позволит
                легко управлять контентом сайта, обновлять информацию и следить
                за активностью пользователей.
              </li>
              <li>
                Обеспечить совместимость сайта с различными устройствами и
                браузерами, чтобы пользователи могли комфортно работать с ним на
                любых платформах.
              </li>
            </ul>

            <p>
              Благодаря слаженной работе нашей команды, мы смогли реализовать
              все поставленные задачи и создать веб-ресурс, который не только
              удовлетворяет потребности колледжа, но и становится мощным
              инструментом для его дальнейшего развития и привлечения новых
              студентов.
            </p>

            <Image src={screen1Img} alt="screen" />
          </div>
        </div>
      </section>

      <section className={style.case__research}>
        <div className="container">
          <div className={style.case__research__wrapper}>
            <h2>Исследование и Анализ</h2>
            <p>
              Процесс создания официального сайта для Симферопольского
              политехнического колледжа начался с тщательного исследования и
              анализа, которые заложили прочный фундамент для успешного
              выполнения проекта. Этот этап включал несколько ключевых шагов:
            </p>

            <ul>
              <li>
                <h3>1. Исследование рынка образовательных учреждений</h3>
                <p>
                  Мы провели детальное исследование рынка образовательных
                  учреждений, чтобы понять текущие тренды и требования к сайтам
                  колледжей и университетов. Это помогло нам выявить лучшие
                  практики и определить, какие функциональные возможности и
                  элементы дизайна наиболее важны для целевой аудитории.
                </p>
              </li>

              <li>
                <h3>2. Анализ целевой аудитории</h3>
                <p>
                  Целевая аудитория сайта включала несколько групп
                  пользователей:
                  <ul>
                    <li>
                      Абитуриенты: школьники, которые ищут информацию о
                      программах обучения, условиях поступления и карьерных
                      перспективах.
                    </li>
                    <li>
                      Родители абитуриентов: люди, которые заинтересованы в
                      безопасности и качестве образования своих детей.
                    </li>
                    <li>
                      Студенты: текущие учащиеся, которым нужна оперативная
                      информация о расписании занятий, новостях и мероприятиях.
                    </li>
                    <li>
                      Преподаватели и административный персонал: сотрудники
                      колледжа, которым необходим доступ к различным ресурсам и
                      внутренним системам.
                    </li>
                  </ul>
                </p>
              </li>

              <li>
                <h3>3. Анализ конкурентов</h3>
                <p>
                  Мы изучили сайты конкурентов, включая другие политехнические
                  колледжи и университеты. Особое внимание было уделено
                  следующим аспектам:
                </p>

                <ul>
                  <li>
                    Функциональные возможности: наличие онлайн-записи на курсы,
                    виртуальные туры по кампусу, электронные библиотеки и
                    учебные материалы.
                  </li>
                  <li>
                    Дизайн и юзабилити: структура страниц, навигация, цветовые
                    схемы, шрифты, использование мультимедийных элементов.
                  </li>
                  <li>
                    SEO и контент: как организован контент, какие ключевые слова
                    и фразы используются, насколько эффективно сайты
                    индексируются поисковыми системами.
                  </li>
                </ul>
              </li>

              <li>
                <h3>4. SWOT-анализ</h3>
                <p>
                  Мы провели SWOT-анализ, чтобы выявить сильные и слабые стороны
                  текущего сайта колледжа, а также определить возможности и
                  угрозы для нового проекта:
                </p>

                <ul>
                  <li>
                    Сильные стороны: наличие известного бренда, уже существующая
                    аудитория, готовность к инновациям.
                  </li>
                  <li>
                    Слабые стороны: устаревший дизайн и функционал текущего
                    сайта, низкая мобильная совместимость.
                  </li>
                  <li>
                    Возможности: внедрение новых технологий, улучшение
                    взаимодействия с пользователями, увеличение
                    онлайн-присутствия.
                  </li>
                  <li>
                    Угрозы: конкуренция с другими образовательными учреждениями,
                    быстрые изменения в требованиях к веб-технологиям.
                  </li>
                </ul>
              </li>

              <li>
                <h3>5. Определение ключевых требований</h3>
                <p>
                  На основании проведенного исследования и анализа мы
                  сформировали список ключевых требований к новому сайту:
                </p>

                <ul>
                  <li>
                    Интуитивно понятная навигация и удобный пользовательский
                    интерфейс.
                  </li>
                  <li>
                    Адаптивный дизайн для корректного отображения на всех
                    устройствах.
                  </li>
                  <li>Легкость управления контентом через админ-панель.</li>
                  <li>
                    Интеграция с внутренними системами и образовательными
                    платформами.
                  </li>
                  <li>
                    Высокая производительность и быстрая загрузка страниц.
                  </li>
                  <li>
                    Эффективная SEO-оптимизация для улучшения видимости в
                    поисковых системах.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              Исследование и анализ позволили нам сформировать четкое понимание
              потребностей и ожиданий целевой аудитории, выявить лучшие практики
              и определить направления для улучшения. Это стало основой для
              последующих этапов разработки, обеспечив проекту успешный старт и
              высокие шансы на достижение поставленных целей.
            </p>

            <div className={style.case__research__image}>
              <Image src={screen2Img} alt="screen" />
            </div>
          </div>
        </div>
      </section>

      <section className={style.case__develop}>
        <div className="container">
          <div className={style.case__develop__wrapper}>
            <h2>Концепция, Дизайн и Разработка</h2>
            <p>
              Создание нового сайта для Симферопольского политехнического
              колледжа прошло через несколько ключевых этапов: разработка
              концепции, дизайн и непосредственная разработка. Вот как мы
              подошли к каждому из этих этапов:
            </p>

            <p>
              На этом этапе мы сосредоточились на формировании общей идеи и
              структуры сайта. Основные аспекты концепции включали:
            </p>

            <ul>
              <li>
                Определение целей и задач: Сайт должен был стать центральным
                информационным ресурсом для студентов, преподавателей и
                абитуриентов, а также способствовать привлечению новых учащихся.
              </li>
              <li>
                Создание информационной архитектуры: Мы разработали структуру
                сайта, включая основные разделы: "Главная", "О колледже",
                "Абитуриенту", "Контакты", "Общежитие", "Студенту" и другие. Это
                позволило нам четко организовать контент и упростить навигацию.
              </li>
              <li>
                Разработка пользовательских сценариев: Мы определили, как
                различные категории пользователей будут взаимодействовать с
                сайтом, что помогло нам учесть их потребности при создании
                дизайна и функционала.
              </li>
            </ul>

            <p>
              На этапе дизайна мы стремились создать визуально привлекательный и
              удобный интерфейс, который бы соответствовал современным
              стандартам и ожиданиям пользователей. Сначала мы создали
              черно-белые прототипы (wireframes), чтобы определить расположение
              элементов на страницах и согласовать структуру с клиентом. Затем
              мы выбрали цветовую палитру, типографику и графические элементы,
              которые отражают бренд колледжа. Основные цвета включали оттенки
              синего, символизирующие надежность и профессионализм, а также
              контрастные элементы для акцентов. На основе утвержденных
              прототипов мы создали детализированные дизайн-макеты всех ключевых
              страниц, что позволило визуализировать конечный результат и внести
              необходимые коррективы до начала разработки.
            </p>

            <p>
              Этап разработки включал в себя реализацию всех функциональных и
              визуальных аспектов сайта. Для разработки сайта мы использовали
              современные технологии, такие как Next.js и Node.js, что
              обеспечило высокую производительность и масштабируемость проекта.
              Мы разработали сайт с учетом принципов адаптивного дизайна, чтобы
              он корректно отображался на любых устройствах - от десктопов до
              мобильных телефонов и планшетов. Мы создали удобную админ-панель,
              которая позволяет легко управлять контентом сайта, добавлять и
              редактировать информацию, управлять пользователями и отслеживать
              посещаемость, что обеспечивает клиенту полный контроль над сайтом.
              Мы также внедрили необходимые функциональные возможности, такие
              как онлайн-запись на курсы, интеграция с образовательными
              платформами, новостные ленты, календарь мероприятий и другие
              важные элементы.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Simfpoliteh;
