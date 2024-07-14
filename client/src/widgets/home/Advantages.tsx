import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import AdvantagesImage from "../../../public/images/home/advantages-image.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Advantages = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className={style.advantages} ref={ref}>
      <div className="container">
        <motion.div
          className={style.advantages__wrapper}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <aside className={style.advantages__image}>
            {/* Image component with fixed height and width */}
            <div className={style.adv_image_container}>
              <Image
                className={style.adv_statue_iamge}
                src={AdvantagesImage}
                alt="advantages statue"
                layout="fixed"
                priority={true}
                loading="eager"
              />
            </div>
          </aside>

          <aside className={style.advantages__list}>
            <h2>{t("ourAdvantages")}</h2>

            <ul>
              {/* Map over advantages text from translations */}
              {[1, 2, 3, 4, 5].map((index) => (
                <li key={index}>{t(`ourAdvantagesText${index}`)}</li>
              ))}
            </ul>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
