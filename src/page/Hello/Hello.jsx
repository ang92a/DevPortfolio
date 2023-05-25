import s from "./Hello.module.css";
import bg from "../../img/Background Blurs.svg"

export const Hello = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.containerHello}>
        <div className={s.visitCard}>
          <div className={s.title}>
            <p className={s.textHi}>Hi all. I am</p>
            <p className={s.textTitle}>Natalia</p>
            <p className={s.textSubtitle}>&#62; Front-end developer</p>
          </div>
          <div className={s.subtitle}>
            <p className={s.textComment}>
              &#47;&#47; complete the game to continue
            </p>
            <p className={s.textComment}>
              &#47;&#47; you can also see it on my Github page
            </p>
            <a href="https://github.com/ang92a?tab=repositories">
              <span style={{ color: "#4D5BCE" }}>const</span>{" "}
              <span style={{ color: "#43D9AD" }}>githubLink</span>{" "}
              <span style={{ color: "#fff" }}>=</span>{" "}
              <span style={{ color: "#E99287" }}>
                “https://github.com/ang92a”
              </span>
            </a>
          </div>
        </div>
        <div className={s.game}>
          <img
            className={s.bggame}
            src={bg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
