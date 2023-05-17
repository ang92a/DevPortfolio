import React from "react";
import s from "./Footer.module.css";
import { Icon } from "../../ui/Icon/Icon";
// import { Link } from "../../ui/Link/Link";
import Twitter from "./assets/Twitter.svg";
import Facebook from "./assets/Facebook.svg";
import Logo from "./assets/Logo.svg";

export const Footer = () => {
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
        <li>
          {/* <Link
            title="_ang92a"
            src="https://github.com/ang92a?tab=repositories"
            footer
          /> */}
          <Icon
            img={Logo}
            src="https://github.com/ang92a?tab=repositories"
            git
          />
        </li>
      </ul>
    </div>
  );
};
