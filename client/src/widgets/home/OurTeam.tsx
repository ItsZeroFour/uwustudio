import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import OurTeamImage from "../../../public/images/home/our-team.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { paths } from "@/paths";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "Даниил Андреев",
    roles: ["CEO UWUSTUDIO", "Fullstack разработчик", "Дизайнер"],
    experience: "4+ лет",
  },
  {
    name: "Михаил Бобров",
    roles: ["Маркетолог", "Бренд-менеджер"],
    experience: "4+ лет",
  },
  {
    name: "Данила Власенко",
    roles: ["Frontend Разработчик", "UI/UX Дизайнер", "SEO специалист"],
    experience: "4+ лет",
  },
  {
    name: "Сейдалиев Амет",
    roles: ["Backend разработчик", "DevOps", "Аналитик"],
    experience: "3+ лет",
  },
  {
    name: "Семиволос Дарья",
    roles: ["Frontend разработчик", "Бренд-менеджер", "Аналитик"],
    experience: "3+ лет",
  },
];

const OurTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { t } = useTranslation();

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] },
    },
  };

  return (
    <section className={style.our__team} ref={ref} id="comand">
      <div className="container">
        <div className={style.our__team__wrapper}>
          {inView && (
            <motion.div
              className={style.our__team__wrapper__top}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <Image
                src={OurTeamImage}
                alt="our team"
                priority={true}
              />
            </motion.div>
          )}
        </div>

        <div className={style.our__team__text}>
          <h2>{t("ourTeam")}</h2>
          <p>{t("ourTeamText")}</p>
        </div>

        <div className={style.our__team__list}>
          <ul>
            {teamMembers.map((member, index) => (
              <li key={index}>
                <div className={style.our__team__list__item}>
                  <div>
                    <h3>{member.name}</h3>
                    <ul>
                      {member.roles.map((role, roleIndex) => (
                        <li key={roleIndex}>{role}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p>
                      {t("experienceLabel")}: {member.experience}
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <li>
              <Link href={paths.about}>{t("about")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
