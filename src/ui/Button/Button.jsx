import s from "./Button.module.css";
import clsx from "clsx";

export const Button = (props) => {
  const { title, submitMessage, handler } = props;

  const innerClassName = clsx(s.button, {
    [s.button__submitMessage]: submitMessage,
  });

  return (
    <button onClick={handler} className={innerClassName}>
      {title}
    </button>
  );
};
