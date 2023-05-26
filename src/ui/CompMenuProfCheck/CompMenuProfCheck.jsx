import s from "./CompMenuProfCheck.module.css";

export const CompMenuProfCheck = ({ text, icon, setChecked, checked }) => {
  return (
    <>
      <li className={s.itemCheck}>
        <label for={text} className={s.checkbox}>
          <input
            type="checkbox"
            name={text}
            id={text}
            className={s.check}
            onClick={() => setChecked(!checked)}
          />
          <span className={s.checkmark}></span>
          <img src={icon} alt="icon" className={!checked ? s.icon : s.iconActive} />
          <span className={!checked ? s.checkSpan : s.active}>{text}</span>
        </label>
      </li>
    </>
  );
};
