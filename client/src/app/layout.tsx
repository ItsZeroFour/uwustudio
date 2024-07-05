"use client";

/**
 * @access Public
 * @authors t.me/ItsZeroFour, t.me/...
 * @description Hello! Welcome to code! We are a digital agancy,
                who specialized on websites develops with moder technologies.
                Call us: t.me/ItsZeroFour
 * @link https://uwustudio.ru
 * @public True
 **/

import React, { useEffect, useState } from "react";
import metadata from "./metadata";
import "./scss/index.scss";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import Cursor from "@/shared/cursor/Cursor";
import SmoothScroll from "smoothscroll-for-websites";

import "../utils/i18n";
import { useTranslation } from "react-i18next";
import Loader from "@/features/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = useTranslation();
  const [loadingLanguage, setLoadingLanguage] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(i18n.language).then(() => {
      setLoadingLanguage(false);
    });
  }, [i18n]);

  SmoothScroll({ stepSize: 50 });

  return (
    <React.Fragment>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>UWUSTUDIO</title>{" "}
        {metadata.icons && <link rel="icon" href={metadata.icons.icon} />}
      </head>

      <html lang={i18n.language}>
        <body id="root">
          <div className="page">
            <React.Fragment>
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
            </React.Fragment>
            <Loader loadingLanguage={loadingLanguage} />
          </div>

          {window.innerWidth > 768 && <Cursor />}
        </body>
      </html>
    </React.Fragment>
  );
}
