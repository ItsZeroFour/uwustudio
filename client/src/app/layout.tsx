/**
 * @access Public
 * @authors t.me/ItsZeroFour, t.me/...
 * @description Hello! Welcome to code! We are a digital agancy,
                who specialized on websites develops with moder technologies.
                Call us: t.me/ItsZeroFour
 * @link https://uwustudio.ru
 * @public True
 **/

import React from "react";
import type { Metadata } from "next";
import "./scss/index.scss";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";

export const metadata: Metadata = {
  title: "UwUStudio",
  description: `
    Лидеры в веб-разработке на полуострове, наша вэб-студия в Крыму
    предоставляет уникальные и креативные решения для клиентов по всей территории России и странам СНГ.
    Наша команда профессионалов готова превратить ваши идеи в успешные онлайн-проекты, обеспечивая
    выдающийся веб-опыт и результативное продвижение вашего бизнеса
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="#root">
        <header className="header">
          <div className="container">
            <Header />
          </div>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
