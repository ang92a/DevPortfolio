import { useState } from "react";
import s from "./Portfolio.module.css";
import close from "./assets/close.svg";
import { CompMenuProfCheck } from "../../ui/CompMenuProfCheck/CompMenuProfCheck";
import html from "./assets/html.svg";
import react from "./assets/react.svg";
import css from "./assets/css.svg";
import angular from "./assets/angular.svg";
import flutter from "./assets/flutter.svg";
import vue from "./assets/vue.svg";
import gatsby from "./assets/gatsby.svg";
import { Card } from "../../ui/Card/Card";
import Prof1 from "./assets/CardPhoto1.webp";
import Prof2 from "./assets/cardPhoto2.webp";
import Prof3 from "./assets/CardPhoto3.webp";

export const Portfolio = () => {
  const [checkedHtml, setCheckedHtml] = useState(false);
  const [checkedCss, setCheckedCss] = useState(false);
  const [checkedReact, setCheckedReact] = useState(false);
  const [checkedVue, setCheckedVue] = useState(false);
  const [checkedFlutter, setCheckedFlutter] = useState(false);
  const [checkedGatsby, setCheckedGatsby] = useState(false);

  return (
    <>
      <div className={s.leftAside}>
        <div className={s.menuPortf}>
          <div className={s.portf__item}>
            <div className={s.portf__title}>
              <span>&#x25bc;</span>{" "}
              <span className={s.portfSpan}>projects</span>
            </div>
            <ul className={s.portf__list}>
              <CompMenuProfCheck
                text="HTML"
                icon={html}
                checked={checkedHtml}
                setChecked={setCheckedHtml}
              />
              <CompMenuProfCheck
                text="React"
                icon={react}
                checked={checkedReact}
                setChecked={setCheckedReact}
              />
              <CompMenuProfCheck
                text="CSS"
                icon={css}
                checked={checkedCss}
                setChecked={setCheckedCss}
              />
              <CompMenuProfCheck
                text="Flutter"
                icon={flutter}
                checked={checkedFlutter}
                setChecked={setCheckedFlutter}
              />
              <CompMenuProfCheck
                text="Vue"
                icon={vue}
                checked={checkedVue}
                setChecked={setCheckedVue}
              />
              <CompMenuProfCheck
                text="Gatsby"
                icon={gatsby}
                checked={checkedGatsby}
                setChecked={setCheckedGatsby}
              />
            </ul>
          </div>
        </div>
      </div>
      <div className={s.conteinerPortf}>
        <div className={s.titleContentPortf}>
          <span>projects</span>
          <img src={close} alt="close" className={s.iconClose} />
        </div>
        <div className={s.contentPortf}>
          <Card
            name="Project 1"
            cardPhoto={Prof1}
            cardIcon={react}
            link="https://github.com/ang92a?tab=repositories"
          />
          <Card
            name="Project 2"
            cardPhoto={Prof2}
            cardIcon={html}
            link="https://github.com/ang92a?tab=repositories"
          />
          <Card
            name="Project 3"
            cardPhoto={Prof3}
            cardIcon={css}
            link="https://github.com/ang92a?tab=repositories"
          />
        </div>
      </div>
    </>
  );
};
