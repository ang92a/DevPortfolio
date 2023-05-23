import s from "./AccordionContent.module.css";

export const AccordionContent = ({ file }) => {
  return (
    <>
      {file.map((el) => (
        <li>
          {el}
        </li>
      ))}
    </>
  );
};
