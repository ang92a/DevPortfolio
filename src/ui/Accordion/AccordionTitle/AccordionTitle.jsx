import s from "./AccordionTitle.module.css";
import accordionHeader from "../assets/accordionHeader.svg";

export const AccordionTitle = ({ title }) => {
  return (
    <>
      <img src={accordionHeader} className={s.accordion__symbol} alt="symbol" />
      {title}
    </>
  );
};
