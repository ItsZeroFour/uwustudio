import React from "react";
import style from "./style.module.scss";
import Ticket from "../../../public/icons/blog/ticket.svg";
import Calendar from "../../../public/icons/blog/Calendar.svg";
import BlogImage from "../../../public/images/blog/blog-image-1.png";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const blogItems = [
    {
      title: "В чем разница между Junior, Middle и Senior разработчиками?",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
      image: BlogImage,
      readPostLink: "",
      tags: ["Разработка", "Код", "Звания"],
    },

    {
      title: "В чем разница между Junior, Middle и Senior разработчиками?",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
      image: BlogImage,
      readPostLink: "",
      tags: ["Разработка", "Код", "Звания"],
    },

    {
      title: "В чем разница между Junior, Middle и Senior разработчиками?",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
      image: BlogImage,
      readPostLink: "",
      tags: ["Разработка", "Код", "Звания"],
    },
  ];

  return (
    <React.Fragment>
      <section className={style.blog__panel}>
        <div className="container">
          <div className={style.blog__panel__wrapper}>
            <aside>
              <input type="text" placeholder="Поиск" />
            </aside>

            <aside>
              <div className={style.blog__select}>
                <div className={style.blog__select__main}>
                  <p>Поиск по тегам</p>
                  <Ticket />
                </div>

                <div className={style.blog__select__options}></div>
              </div>

              <div className={style.blog__date}>
                <Calendar />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={style.blog__list}>
        <div className="container">
          <div className={style.blog__list__wrapper}>
            <ul>
              {blogItems.map(
                ({ title, text, image, readPostLink, tags }, index) => (
                  <li key={index}>
                    <aside className={style.blog__list__image}>
                      <Image src={image} alt={title} />
                    </aside>
                    <aside className={style.blog__list__main}>
                      <h2>{title}</h2>
                      <p>{text}</p>
                      <ul>
                        {tags.map((item) => (
                          <li>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>

                      <div className={style.blog__buttons}>
                        <Link href={readPostLink}>Читать пост</Link>
                        <button>Поделиться</button>
                      </div>
                    </aside>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
