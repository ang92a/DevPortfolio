import s from "./Button.module.css";
import clsx from "clsx";

export const Button = (props) => {
  const { title, submitMessage, handler, renderForm, thanks } = props;

  const innerClassName = clsx(s.button, {
    [s.button__submitMessage]: submitMessage,
    [s.button__thanks]: thanks,
  });

  return (
    <button onClick={() => handler(!renderForm)} className={innerClassName}>
      {title}
    </button>
  );
};
