import React from "react";
import Head from "@/widgets/home/Head";
import OurServices from "@/widgets/home/OurServices";
import WhoWeAre from "@/widgets/home/WhoWeAre";
import Lines from "@/widgets/home/Lines";
import Advantages from "@/widgets/home/Advantages";
import OurTeam from "@/widgets/home/OurTeam";
import Reviews from "@/widgets/home/Reviews";
import Contacts from "@/widgets/home/Contacts";
import Blog from "@/widgets/home/Blog";

const Home = () => {
  return (
    <React.Fragment>
      <head>
        <title>UWUSTUDIO</title>
        <meta
          name="keywords"
          content="дизайн студия, веб-дизайн, графический дизайн, брендинг, разработка логотипа, UX/UI дизайн, дизайн сайта, веб-разработка, создание сайтов, студия дизайна, uwustudio, дизайн в Крыму, веб-дизайн Крым, брендинг Крым, разработка логотипа Крым, разработка сайта в Крыму, заказать сайт, заказать сайт симферополь, заказать сайт крым"
        />
        <meta
          name="description"
          content="Эксперты в веб-разработке на полуострове, наша веб-студия в Крыму
  предоставляет уникальные и креативные решения для клиентов по всей территории России и странам СНГ.
  Наша команда профессионалов готова превратить ваши идеи в успешные онлайн-проекты, обеспечивая
  выдающийся веб-опыт и результативное продвижение вашего бизнеса"
        />
      </head>
      <Head />
      <OurServices />
      <Lines>
        <WhoWeAre />
        <Advantages />
        <OurTeam />
        <Reviews />
        <Contacts />
        <Blog />
      </Lines>
    </React.Fragment>
  );
};

export default Home;
