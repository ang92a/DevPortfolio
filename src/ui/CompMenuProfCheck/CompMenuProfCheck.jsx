import s from "./CompMenuProfCheck.module.css";

export const CompMenuProfCheck = ({
  key,
  name,
  icon,
  checked,
  setChecked,
  check,
  uncheck,
}) => {

 


  return (
    <>
      <li className={s.itemCheck}>
        <label for={name} className={s.checkbox}>
          <input
            type="checkbox"
            name={name}
            id={name}
            className={s.check}
            onClick={() => (checked ? uncheck(name) : check(name))}
          />
          <span className={s.checkmark}></span>
          <img
            src={icon}
            alt="icon"
            className={!checked ? s.icon : s.iconActive}
          />
          <span className={!checked ? s.checkSpan : s.active}>{name}</span>
        </label>
      </li>
    </>
  );
};
