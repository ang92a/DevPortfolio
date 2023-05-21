// import s from "./AccordionBody.module.css";
import { AccordionContent } from "../AccordionContent/AccordionContent";

export const AccordionBody = ({ content, symbol }) => {
  console.log(symbol);
  const [bio, interests, education] = content;
  const [red, green, blue] = symbol;

  return (
    <>
      <AccordionContent content={bio} symbol={red} />;
      <AccordionContent content={interests} symbol={green} />;
      <AccordionContent content={education} symbol={blue} />;
    </>
  );
};
