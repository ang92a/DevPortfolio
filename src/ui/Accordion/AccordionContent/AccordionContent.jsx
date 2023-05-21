import s from "./AccordionContent.module.css";

export const AccordionContent = ({ arr }) => {
  return (
    <>
      {arr.map((el) => (
        <li>
          <img src={el.src} alt={el.text} />
          {el.text}
        </li>
      ))}
    </>
  );
};
