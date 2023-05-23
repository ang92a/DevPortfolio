import { useState } from "react";
import s from "./MenuAccordion.module.css";
import { AccordionBody } from "../AccordionBody/AccordionBody";
import red from "../assets/iconRed.svg";
import green from "../assets/iconGreen.svg";
import blue from "../assets/iconBlue.svg";

const fileEd = ["first", "second", "third"];
const fileIn = ["first", "second"];

export const MenuAccordion = ({ persInfo, title }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordion__item}>
      <div
        className={s.accordion__title}
        onClick={() => setIsActive(!isActive)}
      >
        <span>{isActive ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}</span>
        <span>{title}</span>
      </div>
      {isActive && <AccordionBody subtitle="bio" icon={red} />}
      {isActive && (
        <AccordionBody subtitle="interests" icon={green} file={fileEd} />
      )}
      {isActive && (
        <AccordionBody subtitle="education" icon={blue} file={fileIn} />
      )}
    </div>
  );
};
