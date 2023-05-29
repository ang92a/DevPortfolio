import { useState } from "react";
import s from "./MenuAccordionAbout.module.css";
import red from "../assets/iconRed.svg";
import green from "../assets/iconGreen.svg";
import blue from "../assets/iconBlue.svg";
import { Bio } from "../../Bio/Bio";
import { School } from "../../School/School";

const univers = "еще какой то текст";
const game = "опять какой то текст";

export const MenuAccordionAbout = ({
  title,
  setcontentAbout,
  active,
  setActive,
  arr,
}) => {
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
        onClick={(e) => {
          setcontentAbout(<Bio />);
          setActive("bio");
        }}
      >
        <span>&#x25bc;</span>
        <img src={red} alt="icon" />
        <span className={active === arr[0] ? s.active : s.accordion__item}>
          {arr[0]}
        </span>
      </div>

      {/* блок с меню education */}

      <div
        className={s.accordion__subtitle}
        onClick={() => {
          setIsActiveEd(!isActiveEd);
          setActive("education");
        }}
      >
        {isActiveEd ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
        <img src={green} alt="icon" />
        <span
          className={
            active === arr[1][0] ||
            active === arr[1][1][0] ||
            active === arr[1][1][1]
              ? s.active
              : null
          }
        >
          {arr[1][0]}
        </span>
      </div>
      {isActiveEd && (
        <ul className={s.accordion__list}>
          <li
            className={active === arr[1][1][0] ? s.active : null}
            onClick={() => {
              setcontentAbout(<School />);
              setActive("school");
            }}
          >
            {arr[1][1][0]}
          </li>
          <li
            className={active === arr[1][1][1] ? s.active : null}
            onClick={() => {
              setcontentAbout(univers);
              setActive("univers");
            }}
          >
            {arr[1][1][1]}
          </li>
        </ul>
      )}

      {/* блок с меню interests */}

      <div
        className={s.accordion__subtitle}
        onClick={() => {
          setIsActiveInt(!isActiveInt);
          setActive("interests");
        }}
      >
        {isActiveInt ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
        <img src={blue} alt="icon" />
        <span
          className={
            active == arr[2][0] || active == arr[2][1] ? s.active : null
          }
        >
          {arr[2][0]}
        </span>
      </div>
      {isActiveInt && (
        <ul className={s.accordion__list}>
          <li
            className={active == arr[2][1] ? s.active : null}
            onClick={() => {
              setcontentAbout(game);
              setActive("game");
            }}
          >
            {arr[2][1]}
          </li>
        </ul>
      )}
    </div>
  );
};
