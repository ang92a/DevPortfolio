import { useState } from "react";
import s from "./MenuAccordion.module.css";
import { AccordionBody } from "../AccordionBody/AccordionBody";

export const MenuAccordion = ({ title, content, symbol }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordion__item}>
      <div className={s.accordion__header}>
        <div className={s.accordion__title}>
          <span>
            {isActive ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
          </span>
          <span onClick={() => setIsActive(!isActive)}>{title}</span>
        </div>
      </div>
      {isActive && (
        <div className={s.accordion__body}>
          <ul>
            <AccordionBody content={content} symbol={symbol} />
          </ul>
        </div>
      )}
    </div>
  );
};
