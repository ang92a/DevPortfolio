import React from "react";
import s from "./Footer.module.css";
import { Icon } from "../../ui/Icon/Icon";
import { FooterLink } from "../../ui/FooterLink/FooterLink";
import Twitter from "./assets/Twitter.svg";
import Facebook from "./assets/Facebook.svg";
import Logo from "./assets/Logo.svg";

export const Footer = ({ onChangeTheme }) => {
  return (
    <div className={s.footer}>
      <ul className={s.footer__menu}>
        <li>
          <span className={s.findMe}> find me in:</span>
        </li>
        <li>
          <Icon img={Twitter} twitter src="https://www.google.ru/" footer />
        </li>
        <li>
          <Icon img={Facebook} facebook src="https://www.google.ru/" footer />
        </li>
        <button onClick={onChangeTheme} className={s.btnTheme}>change-theme</button>
        <li>
          <FooterLink
            title="_ang92a"
            href="https://github.com/ang92a?tab=repositories"
            img={Logo}
          />
        </li>
      </ul>
    </div>
  );
};
