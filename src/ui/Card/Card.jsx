import s from "./Card.module.css";

export const Card = ({ name, cardPhoto, cardIcon, link }) => {
  return (
    <div className={s.card__wrapper}>
      <div>{name}</div>
      <div className={s.card}>
        <div className={s.card__header}>
          <img className={s.card__img} src={cardPhoto} alt="image" />
          <img src={cardIcon} alt="icon" className={s.card__icon} />
        </div>
        <div className={s.card__body}>
          <p>Duis aute irure dolor in velit esse cillum dolore.</p>
          <a href={link} className={s.btn}>
            {name}
          </a>
        </div>
      </div>
    </div>
  );
};
