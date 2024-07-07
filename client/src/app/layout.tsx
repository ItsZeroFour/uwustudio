"use client";

/**
 * @access Public
 * @description Digital agency specialized in modern technologies.
 * Call us: t.me/ItsZeroFour
 * @link https://uwustudio.ru
 * @public True
 **/

import React, { useEffect, useState } from "react";
import metadata from "./metadata";
import "./scss/index.scss";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import Cursor from "@/shared/cursor/Cursor";
import { useTranslation } from "react-i18next";
import Loader from "@/features/Loader";
import "../utils/i18n";
import dynamic from "next/dynamic";

// Dynamic import for smooth scroll, disabled SSR
const SmoothScroll = dynamic(() => import("smoothscroll-for-websites"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = useTranslation();
  const [loadingLanguage, setLoadingLanguage] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && i18n.changeLanguage) {
      i18n
        .changeLanguage(i18n.language)
        .then(() => setLoadingLanguage(false))
        .catch((error) => {
          console.error("Failed to change language:", error);
          setLoadingLanguage(false);
        });
    }
  }, [i18n]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      SmoothScroll({ stepSize: 50 });
    }
  }, []);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>UWUSTUDIO</title>
        {metadata.icons && <link rel="icon" href={metadata.icons.icon} />}
      </head>

      <body id="root">
        <div className="page">
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

          <Loader loadingLanguage={loadingLanguage} />

          {typeof window !== "undefined" && window.innerWidth > 768 && (
            <Cursor />
          )}
        </div>
      </body>
    </>
  );
}
