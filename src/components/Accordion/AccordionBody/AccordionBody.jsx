import { useState } from "react";
import s from "./AccordionBody.module.css";
import { AccordionContent } from "../AccordionContent/AccordionContent";

export const AccordionBody = ({ subtitle, icon }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={s.accordion__subtitle}
        onClick={subtitle !== "bio" ? () => setIsActive(!isActive) : null}
      >
        <div>
          {isActive ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
          <img src={icon} alt="icon" />
          <span>{subtitle}</span>
        </div>
      </div>
      {isActive && ( <AccordionContent />)}
    </>
  );
};
