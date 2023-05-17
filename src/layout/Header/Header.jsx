import React from "react";
import s from "./Header.module.css";
import { HeaderLink } from "../../ui/HeaderLink/HeaderLink";



export const Header = () => {
  return (
    <header className={s.header}>
      <ul className={s.header__menu}>
        <li className={s.li}>ang92a</li>
        <li className={s.li}>
          <HeaderLink title="_hello" to="/" />
        </li>
        <li className={s.li}>
          <HeaderLink title="_about-me" to="/about" />
        </li>
        <li className={s.li}>
          <HeaderLink title="_projects" to="/projects" />
        </li>
        <li className={s.li}>
          <HeaderLink title="_contats" to="/contacts" />
        </li>
      </ul>
    </header>
  );
};
