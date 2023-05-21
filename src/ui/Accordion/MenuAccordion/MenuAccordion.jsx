import React from "react";
import s from "./MenuAccordion.module.css";
import { AccordionTitle } from "../AccordionTitle/AccordionTitle";
import { AccordionBody } from "../AccordionBody/AccordionBody"

export const MenuAccordion = ({ title, content, symbol }) => {
  return (
    <div className={s.accordion__item}>
      <div className={s.accordion__header}>
        <div className={s.accordion__title}>
          <AccordionTitle title={title} />
        </div>
      </div>
      <div className={s.accordion__body}>
        <ul>
          <AccordionBody content={content} symbol={symbol} />
        </ul>
      </div>
    </div>
  );
};
