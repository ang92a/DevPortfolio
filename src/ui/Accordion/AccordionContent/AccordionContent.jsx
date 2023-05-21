import s from "./AccordionContent.module.css";

export const AccordionContent = ({ content, symbol }) => {
  return (
    <li>
      <img src={symbol} alt="symbol" />
      {content}
    </li>
  );
};
