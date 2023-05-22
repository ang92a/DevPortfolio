import s from "./AccordionTitle.module.css";


export const AccordionTitle = ({ isActive, setIsActive, title }) => {
  return (
    <>
      <span>{isActive ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}</span>
      <span onClick={() => setIsActive(!isActive)}>{title}</span>
    </>
  );
};
