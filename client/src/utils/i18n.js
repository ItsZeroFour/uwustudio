import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
      cookies: {
        secure: true, // Установка куков только через HTTPS
        sameSite: "None", // Установка SameSite=None для куков
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
