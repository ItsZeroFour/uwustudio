import React from "react";
import Link from "next/link";
import Telegram from "../../../public/icons/telegram.svg";
import Vk from "../../../public/icons/vk.svg";
import Instagram from "../../../public/icons/instagram.svg";
import Youtube from "../../../public/icons/youtube.svg";
import style from "./style.module.scss";

const Socials = () => {
  return (
    <ul className={style.links}>
      <li>
        <Link href="https://t.me/uwustudio">
          <Telegram />
        </Link>
      </li>

      <li>
        <Link href="#">
          <Vk />
        </Link>
      </li>

      <li>
        <Link href="#">
          <Instagram />
        </Link>
      </li>

      <li>
        <Link href="#">
          <Youtube />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
