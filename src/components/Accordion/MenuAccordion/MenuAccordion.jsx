import { useState } from "react";
import s from "./MenuAccordion.module.css";
import { AccordionBody } from "../AccordionBody/AccordionBody";
import { AccordionTitle } from "../AccordionTitle/AccordionTitle";

export const MenuAccordion = ({ title, content, symbol }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordion__item}>
      <div className={s.accordion__header}>
        <div className={s.accordion__title}>
          <AccordionTitle
            isActive={isActive}
            setIsActive={setIsActive}
            title={title}
          />
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
