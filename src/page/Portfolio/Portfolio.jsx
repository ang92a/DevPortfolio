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
  // массив с обьектами

  const data = [
    { name: "HTML", icon: html },
    { name: "React", icon: react },
    { name: "CSS", icon: css },
    { name: "Flutter", icon: flutter },
    { name: "Vue", icon: vue },
    { name: "Gatsby", icon: gatsby },
  ];

  const dataCard = [
    {
      name: "Project 1",
      cardPhoto: Prof1,
      cardIcon: react,
      key: "React",
      link: "https://github.com/ang92a?tab=repositories",
    },
    {
      name: "Project 2",
      cardPhoto: Prof2,
      cardIcon: html,
      key: "HTML",
      link: "https://github.com/ang92a?tab=repositories",
    },
    {
      name: "Project 3",
      cardPhoto: Prof3,
      cardIcon: css,
      key: "CSS",
      link: "https://github.com/ang92a?tab=repositories",
    },
  ];

  //состояние для отрисовки только выбранных проектов
  const [checked, setChecked] = useState([]);

  const check = (name) => setChecked([...checked, name]);
  const uncheck = (name) => setChecked(checked.filter((elem) => elem !== name));

  console.log(checked);

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
              {data.map((obj) => (
                <CompMenuProfCheck
                  key={obj.name}
                  name={obj.name}
                  icon={obj.icon}
                  checked={checked.includes(obj.name)}
                  setChecked={setChecked}
                  check={check}
                  uncheck={uncheck}
                />
              ))}
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
          
          {dataCard
            .filter((el) => checked.includes(el.key))
            .map((el) => (
              <Card
                name={el.name}
                cardPhoto={el.cardPhoto}
                cardIcon={el.cardIcon}
                link={el.link}
              />
            ))}
        </div>
      </div>
    </>
  );
};

// 1. массив обьектов
// 2. state с пустым массивом
