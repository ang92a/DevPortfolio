import { useState } from "react";
import s from "./MenuAccordionAbout.module.css";
import red from "../assets/iconRed.svg";
import green from "../assets/iconGreen.svg";
import blue from "../assets/iconBlue.svg";
import { Bio } from "../../Bio/Bio";
import { School } from "../../School/School";


const univers = "еще какой то текст";
const game = "опять какой то текст";

export const MenuAccordionAbout = ({ title, setcontentAbout }) => {
  // выпадающее меню

  const [isActiveEd, setIsActiveEd] = useState(false);
  const [isActiveInt, setIsActiveInt] = useState(false);

  return (
    <div className={s.accordion__item}>
      <div className={s.accordion__title}>
        <span>&#x25bc;</span> {title}
      </div>

      {/* блок с меню bio */}
      <div
        className={s.accordion__subtitle}
        onClick={() => setcontentAbout(<Bio />)}
      >
        <span>&#x25bc;</span>
        <img src={red} alt="icon" />
        <span>bio</span>
      </div>

      {/* блок с меню education */}

      <div
        className={s.accordion__subtitle}
        onClick={() => setIsActiveEd(!isActiveEd)}
      >
        {isActiveEd ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
        <img src={green} alt="icon" />
        <span>education</span>
      </div>
      {isActiveEd && (
        <ul className={s.accordion__list}>
          <li onClick={() => setcontentAbout(<School />)}>school</li>
          <li onClick={() => setcontentAbout(univers)}>univers</li>
        </ul>
      )}

      {/* блок с меню interests */}

      <div
        className={s.accordion__subtitle}
        onClick={() => setIsActiveInt(!isActiveInt)}
      >
        {isActiveInt ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
        <img src={blue} alt="icon" />
        <span>interests</span>
      </div>
      {isActiveInt && (
        <ul className={s.accordion__list}>
          <li onClick={() => setcontentAbout(game)}>game</li>
        </ul>
      )}
    </div>
  );
};
