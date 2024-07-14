"use client";

/**
 * @access Public
 * @description Digital agency specialized in modern technologies.
 * Call us: t.me/ItsZeroFour
 * @link https://uwustudio.ru
 * @public True
 **/

import React, { Suspense, useEffect, useState } from "react";
import metadata from "./metadata";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import Cursor from "@/shared/cursor/Cursor";
import { useTranslation } from "react-i18next";
import Loader from "@/features/Loader";
import "../utils/i18n";
import YandexMetrika from "../utils/yandexmetrica";
import Script from "next/script";

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

  return (
    <>
      <head>
        {metadata.icons && <link rel="icon" href={metadata.icons.icon} />}
      </head>

      <html>
        <body id="root">
          <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(97767093, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
          </Script>

          <Suspense fallback={<></>}>
            <YandexMetrika />
          </Suspense>

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
      </html>
    </>
  );
}
