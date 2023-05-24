import s from "./ComponMenuAccodion.module.css"

export const ComponMenuAccodion = ({
  text,
  icon,
  isActiveContacts,
}) => {
  return (
    <>
      {!isActiveContacts && (
        <>
          <img src={icon} alt="icon" className={s.icon}/>
          <span>{text}</span>
        </>
      )}
    </>
  );
};
