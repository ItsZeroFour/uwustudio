import Head from "@/widgets/AboutUs/Head";
import AboutUs from "@/widgets/AboutUs/AboutUs";
import React from "react";
import WhyChooseUs from "@/widgets/AboutUs/WhyChooseUs";
import HowWeWork from "@/widgets/AboutUs/HowWeWork";
import Target from "@/widgets/AboutUs/Target";

const About = () => {
  return (
    <React.Fragment>
      <head>
        <title>О нас - UWUSTUDIO</title>
        <meta name="keywords" content="о нас, информация о компании, uwustudio, команда дизайнеров, история компании, дизайн студия Крым, веб-дизайн Крым, графический дизайн Крым, брендинг Крым, разработка логотипов Крым, заказать сайт" />  
       <meta
          name="description"
          content="UwUStudio - Разработка сайтов в Крыму и за его пределами. Уникальные решения, высокое качество, полное сопровождение от концепции до результата."
        />
      </head>
      <Head />
      <AboutUs />
      <WhyChooseUs />
      <HowWeWork />
      <Target />
    </React.Fragment>
  );
};

export default About;
