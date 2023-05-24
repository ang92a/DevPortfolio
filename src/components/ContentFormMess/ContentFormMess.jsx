import s from "./ContentFormMess.module.css";
import { useState } from "react";
import { Button } from "../../ui/Button/Button";

export const ContentFormMess = ({ setRenderForm, renderForm }) => {
  return (
    <div className={s.messThanks}>
      <h1>Thank you! 🤘</h1>
      <p>
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <Button
        title="send-new-message"
        handler={setRenderForm}
        renderForm={renderForm}
        thanks
      />
    </div>
  );
};
