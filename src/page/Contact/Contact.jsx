import { useState } from "react";
import { Form } from "../../components/Form/Form";
import { MenuAccordionContacts } from "../../components/Accordion/MenuAccordionContacts/MenuAccordionContacts";
import s from "./Contact.module.css";
import close from "./assets/close.svg";
import { ContactRightAside } from "../../components/ContactRightAside/ContactRightAside";
import { ContentFormMess } from "../../components/ContentFormMess/ContentFormMess";

export const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [renderForm, setRenderForm] = useState(false);

  return (
    <>
      <div className={s.leftAside}>
        <div className={s.menuAccordion}>
          <MenuAccordionContacts title="contacts" />
        </div>
      </div>
      <div className={s.contenContacts}>
        <div className={s.titleContentContacts}>
          <span>contacts</span>
          <img src={close} alt="close" className={s.iconClose} />
        </div>
        <div className={s.conteinerForm}>
          {!renderForm ? (
            <Form
              inputName={inputName}
              setInputName={setInputName}
              inputEmail={inputEmail}
              setInputEmail={setInputEmail}
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              setRenderForm={setRenderForm}
              renderForm={renderForm}
            />
          ) : (
            <ContentFormMess />
          )}
        </div>
      </div>
      <div className={s.rightAside}>
        <ContactRightAside
          inputName={inputName}
          inputEmail={inputEmail}
          inputMessage={inputMessage}
        />
      </div>
    </>
  );
};
