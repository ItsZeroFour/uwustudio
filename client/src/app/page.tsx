"use client";

import HomePage from "@/pages/Home/Home";
import "./scss/home.scss";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Добавляем классы к html и body при монтировании компонента Home
      document.documentElement.classList.add("home-page");
      document.body.classList.add("home-page");

      return () => {
        // Удаляем классы при размонтировании компонента Home
        document.documentElement.classList.remove("home-page");
        document.body.classList.remove("home-page");

        // Также очищаем любые инлайновые стили, которые могли быть добавлены
        document.documentElement.removeAttribute("style");
        document.body.removeAttribute("style");
      };
    }
  }, []);

  return <HomePage />;
}
