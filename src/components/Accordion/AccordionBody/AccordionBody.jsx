import { useState } from "react";
import s from "./AccordionBody.module.css";
import { AccordionContent } from "../AccordionContent/AccordionContent";

export const AccordionBody = ({ subtitle, icon, file }) => {
  const [isActive, setIsActive] = useState(false);

  if (file) {
    return (
      <>
        <div
          className={s.accordion__subtitle}
          onClick={() => setIsActive(!isActive)}
        >
          <span>
            {isActive ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
          </span>
          <img src={icon} alt="icon" />
          <span>{subtitle}</span>
        </div>
        {isActive && <AccordionContent file={file} />}
      </>
    );
  } else {
    return (
      <>
        <span>&#x25ba;</span>
        <img src={icon} alt="icon" />
        <span>{subtitle}</span>
      </>
    );
  }
};
