import s from "./Form.module.css";
import { Button } from "../../ui/Button/Button";
import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  axios
    .post(
      "https://api.telegram.org/6298455639:AAFYDoxmqq_YuIAUZi0CXUTk2NDBAXDir6Y/sendMessage",
      {
        chat_id: -855705144,
        text: `Имя: ${data.get("name")}, Email: ${data.get(
          "email"
        )}, Телефон: ${data.get("phone")}, Сообщение: ${data.get("message")}`,
      }
    )
    .then((response) => {
      console.log(response.data);
      form.reset();
    })
    .catch((error) => {
      console.log(error);
    });
};

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
    <form
      className={s.form}
      onClick={(evt) => evt.preventDefault()}
      onSubmit={handleSubmit}
    >
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
        title="submit-message"
        handler={setRenderForm}
        renderForm={renderForm}
        submitMessage
      />
    </form>
  );
};
