import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import StatueImage from "../../../public/images/services/services-statue.png";
import { paths } from "@/paths";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className={style.services__contacts}>
      <div className="container">
        <div className={style.services__contacts__wrapper}>
          <aside className={style.servies__contacts__image}>
            <Image src={StatueImage} alt="statue" />
          </aside>

          <aside className={style.servies__contacts__text}>
            <h3>Не нашли нужную Вам услугу?</h3>
            <p>
              Мы стремимся удовлетворить все ваши потребности. Если вы не нашли
              конкретную услугу или у вас есть особые требования, не стесняйтесь
              связаться с нами любым удобным для вас способом. Наша команда
              готова выслушать вас и разработать персонализированное решение,
              соответствующее вашим уникальным запросам.
            </p>
            <Link href={paths.contacts}>Связаться с нами</Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
