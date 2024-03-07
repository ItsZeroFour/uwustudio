import React from "react";
import style from "./style.module.scss";
import Image1 from "../../../public/images/blog/blog-image-1.png";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const lastBlogItems = [
    {
      title: "In publishing and graphic design",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design.",
      date: "17.02.2024",
      imagePath: Image1,
      link: "",
    },

    {
      title: "In publishing and graphic design",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design.",
      date: "17.02.2024",
      imagePath: Image1,
      link: "",
    },

    {
      title: "In publishing and graphic design",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design.",
      date: "17.02.2024",
      imagePath: Image1,
      link: "",
    },
  ];

  return (
    <section className={style.blog}>
      <div className="container">
        <div className={style.blog__wrapper}>
          <h2>Наш блог</h2>
          <p>
            В нашем блоге мы делимся не только последними тенденциями в
            веб-разработке и дизайне, но и поднимаем увлекательные темы из мира
            цифрового маркетинга. Здесь вы найдете статьи, полезные советы и
            креативные идеи, чтобы вдохновить вас на новые высоты в
            онлайн-пространстве. Присоединяйтесь к нашему виртуальному диалогу,
            где каждый пост становится шагом к вашему успешному веб-присутствию.
          </p>
          <ul>
            {lastBlogItems.map(
              ({ title, text, date, imagePath, link }, index) => (
                <li key={index}>
                  <Link href={`/posts/${link}`}>
                    <Image src={imagePath} alt={title} />

                    <h3>{title}</h3>
                    <p>{text}</p>
                    <h4>{date}</h4>
                  </Link>
                </li>
              )
            )}
          </ul>

          <Link href="/posts">Смотреть все посты</Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
