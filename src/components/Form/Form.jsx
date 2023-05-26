import s from "./Form.module.css";
import { Button } from "../../ui/Button/Button";
// import axios from "axios";
// import { useEffect, useState } from "react";

export const Form = (props) => {
  const {
    inputName,
    setInputName,
    inputEmail,
    setInputEmail,
    inputMessage,
    setInputMessage,
    setRenderForm,
    renderForm,
  } = props;

  return (
    <form className={s.form}>
      {/* инпут для имени */}

      <label className={s.label} htmlFor="name">
        _name:
      </label>
      <input
        className={s.input}
        type="text"
        id="name"
        name="name"
        value={inputName}
        onChange={(evt) => setInputName(evt.target.value)}
      />

      {/* инпут для майл*/}

      <label className={s.label} htmlFor="email">
        _email:
      </label>
      <input
        className={s.input}
        type="email"
        name="email"
        id="email"
        required
        value={inputEmail}
        onChange={(evt) => setInputEmail(evt.target.value)}
      />

      {/* инпут для сообщения*/}

      <label className={s.label} htmlFor="message">
        _message:
      </label>
      <textarea
        className={s.textarea}
        rows="13"
        cols="30"
        name="message"
        id="message"
        value={inputMessage}
        onChange={(evt) => setInputMessage(evt.target.value)}
      ></textarea>
      <Button
        type="submit"
        title="submit-message"
        handler={setRenderForm}
        renderForm={renderForm}
        submitMessage
      />
    </form>
  );
};
