import s from "./Footer.module.css";

export const FooterLink = ({ title, href, img }) => {
  return (
    <a href={href} className={s.link__footer} target="_blank" rel="noreferrer">
      {title}
      <img className={s.Icon} src={img} alt="icon" />
    </a>
  );
};
