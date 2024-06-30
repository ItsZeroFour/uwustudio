// "use client";

// import React, { useEffect, useRef } from "react";
// import style from "./style_.module.scss";
// import PortfolioImage1 from "../../../public/images/blog/blog-image-1.png";
// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// const Portfolio = () => {
//   const listRef = useRef();
//   const listRef2 = useRef();

//   const { t } = useTranslation();

//   const portfolioList = [
//     {
//       image: PortfolioImage1,
//       title: "Portfolio",
//       link: "/",
//     },

//     {
//       image: PortfolioImage1,
//       title: "Portfolio",
//       link: "/",
//     },

//     {
//       image: PortfolioImage1,
//       title: "Portfolio",
//       link: "/",
//     },

//     {
//       image: PortfolioImage1,
//       title: "Portfolio",
//       link: "/",
//     },

//     {
//       image: PortfolioImage1,
//       title: "Portfolio",
//       link: "/",
//     },

//     {
//       image: PortfolioImage1,
//       title: "Portfolio",
//       link: "/",
//     },

//     {
//       image: PortfolioImage1,
//       title: "Portfolio",
//       link: "/",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       // Получаем текущую позицию прокрутки
//       const scrollY = window.scrollY;

//       if (listRef.current) {
//         listRef.current.style.transform = `translateX(-${scrollY}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Получаем текущую позицию прокрутки
//       const scrollY = window.scrollY;

//       if (listRef2.current) {
//         listRef2.current.style.transform = `translateX(${scrollY}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <React.Fragment>
//       <head>
//         <title>Портфолио - UWUSTUDIO</title>
//         <meta name="description" content="Изучите наши работы в области веб-разработки, дизайна и маркетинга, чтобы увидеть разнообразие наших навыков и экспертизу. Каждый проект представлен с кратким описанием и изображениями, чтобы вы могли лучше понять наш подход и качество работы. Погрузитесь в наше портфолио и убедитесь, что мы можем воплотить ваши идеи в реальность." />
//       </head>
//       <section className={style.portfolio__top}>
//         <div className="container">
//           <div className={style.portfolio__top__wrapper}>
//             <h1>{t("portfolioTitle")}</h1>
//             <p>{t("portfolioText")}</p>
//           </div>
//         </div>
//       </section>
//       <section className={style.portfolio__list}>
//         <ul ref={listRef}>
//           {portfolioList.map(({ image }, index) => (
//             <li key={index}>
//               <Image src={image} alt={`portfolio image ${index + 1}`} />
//             </li>
//           ))}
//         </ul>

//         <ul ref={listRef2}>
//           {portfolioList.map(({ image }, index) => (
//             <li key={index}>
//               <Image src={image} alt={`portfolio image ${index + 1}`} />
//             </li>
//           ))}
//         </ul>
//       </section>
//     </React.Fragment>
//   );
// };

// export default Portfolio;
