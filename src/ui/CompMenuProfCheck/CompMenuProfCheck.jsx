import s from "./CompMenuProfCheck.module.css";

export const CompMenuProfCheck = ({ text, icon }) => {
  return (
    <>
      <li className={s.itemCheck}>
        <label for={text} className={s.checkbox}>
          <input type="checkbox" name={text} id={text} className={s.check} />
          <span className={s.checkmark}></span>
          <img src={icon} alt="icon" className={s.icon}/>
          <span className={s.checkSpan}>{text}</span>
        </label>
      </li>
    </>
  );
};
