import s from "./AccordionBody.module.css";
import { AccordionContent } from "../AccordionContent/AccordionContent";

export const AccordionBody = ({ content, symbol }) => {

const arr = content.map(function (i, ind) {
  return {
    text: i,
    src: symbol[ind],
  };
});

  return (
    <>
      <AccordionContent arr={arr} />
    </>
  );
};
