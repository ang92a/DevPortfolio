import s from "./AccordionContent.module.css";



export const AccordionContent = ({ props, setcontentAbout }) => {

  return (
    <>
      {props.map((el) => (
        <li onClick={() => setcontentAbout(el.content)}>{el.title}</li>
      ))}
    </>
  );
};
