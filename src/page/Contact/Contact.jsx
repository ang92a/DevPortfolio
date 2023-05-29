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

  // сообщение после отправки
  const [renderForm, setRenderForm] = useState(false);

  const handlerRender = () => {
    setRenderForm(!renderForm);
    setInputName("");
    setInputEmail("");
    setInputMessage("");
  };

  const handlerTelegram = () => {
    setRenderForm(!renderForm);
  };

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
              setInputName={setInputName}
              setInputEmail={setInputEmail}
              setInputMessage={setInputMessage}
              handler={handlerTelegram}
            />
          ) : (
            <ContentFormMess handler={handlerRender} />
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
