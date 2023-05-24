import { useState } from "react";
import { Form } from "../../components/Form/Form";
import s from "./Contact.module.css";
import close from "./assets/close.svg";
import { MenuAccordion } from "../../components/Accordion/MenuAccordion/MenuAccordion";

export const Contact = () => {
  const [contentContacts, setcontentContacts] = useState(false);
  return (
    <>
      <div className={s.leftAside}>
        <div className={s.menuAccordion}>
          <MenuAccordion
            title="personal-info"
            setcontentContacts={setcontentContacts}
          />
        </div>
      </div>
      <div className={s.contenContacts}>
        <div className={s.titleContentContacts}>
          <span>contacts</span>
          <img src={close} alt="close" className={s.iconClose} />
        </div>
        <Form />
      </div>
      <div className={s.rightAside}></div>
    </>
  );
};
