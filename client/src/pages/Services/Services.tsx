import ContactUs from "@/widgets/Services/ContactUs";
import ServicesList from "@/widgets/Services/ServicesList";
import React from "react";

const Services = () => {
  return (
    <React.Fragment>
      <head>
        <title>Услуги - UWUSTUDIO</title>
        <meta
          name="description"
          content='Уникальные решения для вашего бизнеса онлайн: разработка сайтов "Под ключ", UI/UX дизайн, SEO оптимизация и маркетинг. Дополнительно предлагаем услуги по упаковке соц. сетей, доработке сайтов и созданию презентаций. Получите анализ и оценку вашего сайта для улучшения его эффективности.'
        />
        <meta name="keywords" content="услуги, дизайн услуги, веб-дизайн услуги, графический дизайн услуги, брендинг услуги, разработка логотипов услуги, uwustudio, Крым, Симферополь, дизайн студия Крым, веб-дизайн Крым, графический дизайн Крым, брендинг Крым, дизайн студия Симферополь, веб-дизайн Симферополь, графический дизайн Симферополь, брендинг Симферополь" />
      </head>
      <ServicesList />
      <ContactUs />
    </React.Fragment>
  );
};

export default Services;
