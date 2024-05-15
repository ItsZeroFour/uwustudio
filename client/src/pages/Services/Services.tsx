import ContactUs from "@/widgets/Services/ContactUs";
import ServicesList from "@/widgets/Services/ServicesList";
import React from "react";

const Services = () => {
  return (
    <React.Fragment>
      <head>
        <meta
          name="description"
          content='Уникальные решения для вашего бизнеса онлайн: разработка сайтов "Под ключ", UI/UX дизайн, SEO оптимизация и маркетинг. Дополнительно предлагаем услуги по упаковке соц. сетей, доработке сайтов и созданию презентаций. Получите анализ и оценку вашего сайта для улучшения его эффективности.'
        />
      </head>
      <ServicesList />
      <ContactUs />
    </React.Fragment>
  );
};

export default Services;
