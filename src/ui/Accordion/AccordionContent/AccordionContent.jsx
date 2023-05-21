import s from "./AccordionContent.module.css";

export const AccordionContent = ({ content, symbol }) => {
  console.log(symbol);
  return (
    <li>
      <img src={symbol} alt="symbol" className={s.accordionSymbol} />
      {content}
    </li>
  );
};
