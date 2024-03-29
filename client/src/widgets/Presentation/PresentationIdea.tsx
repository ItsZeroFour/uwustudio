import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import ideaImage1 from "../../../public/images/presentation/idea-1.png";
import ideaImage2 from "../../../public/images/presentation/idea-2.png";
import ideaImage3 from "../../../public/images/presentation/idea-3.png";

const PresentationIdea = () => {
  return (
    <section className={style.presentation__idea}>
      <div className="container">
        <h2>Как мы пришли к идее о создании вэб студии</h2>

        <div className={style.presentation__idea__wrapper}>
          <aside className={style.presentation__left}>
            <p>
              Идея о создании нашей веб-студии зародилась из нашего сильного
              желания объединить наши навыки и опыт в одном месте, чтобы помочь
              бизнесам процветать в цифровой эпохе. Мы осознали, что мир быстро
              меняется, и с каждым днем важнее становится иметь качественное
              онлайн-присутствие. Именно поэтому мы решили создать агентство,
              которое предложит клиентам полный спектр услуг в сфере
              веб-разработки, дизайна и маркетинга
            </p>

            <div className={style.presentation__left__image}>
              <Image src={ideaImage1} alt="idea 1" />
              <Image src={ideaImage2} alt="idea 2" />
            </div>

            <p>
              Наша идея укрепилась, когда мы столкнулись с реальными
              потребностями бизнесов и их желанием расширить свое воздействие в
              онлайн-мире. Мы видели, как многие компании борются с созданием
              качественных веб-ресурсов и эффективных маркетинговых стратегий, и
              поняли, что можем предложить им решение и поддержку в этих
              вопросах
            </p>
          </aside>
          <aside className={style.presentation__right}>
            <Image src={ideaImage3} alt="idea 3" />
            <p>
              Итак, когда мы решили создать веб-студию, мы полностью погрузились
              в исследования и анализ того, какие именно проблемы сталкиваются
              бизнесы в онлайн-мире. Мы провели многочисленные встречи с
              предпринимателями, обсудили их вызовы и стратегии, и узнали, что
              именно им необходимо для успешного развития в интернете. В
              результате этого погружения мы окрепли в уверенности, что наша
              веб-студия имеет потенциал действительно изменить игру и помочь
              бизнесам добиться новых высот в онлайн-мире. Наше стремление быть
              не просто веб-разработчиками, но и надежными партнерами для
              бизнеса привело нас к осознанию того, что мы можем быть не просто
              создателями сайтов, но и катализаторами цифрового успеха для
              многих компаний
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PresentationIdea;
