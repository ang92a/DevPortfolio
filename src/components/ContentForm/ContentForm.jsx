import s from "./ContentForm.module.css";

export const ContentForm = ({ contForm }) => {
  return (
    <>
      <div className={s.content}>{contForm}</div>
    </>
  );
};
