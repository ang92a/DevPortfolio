import { useState } from "react";
import s from "./MenuAccordion.module.css";
import red from "../assets/iconRed.svg";
import green from "../assets/iconGreen.svg";
import blue from "../assets/iconBlue.svg";

const school = "какой то текс";
const univers = "еще какой то текс";
const game = "игра";

export const MenuAccordion = ({ title, setcontentAbout, setisIconBio, isIconBio }) => {
  const [isActiveEd, setIsActiveEd] = useState(false);
  const [isActiveInt, setIsActiveInt] = useState(false);

  return (
    <div className={s.accordion__item}>
      <div className={s.accordion__title}>
        <p>&#x25bc;{title}</p>
      </div>

      {/* блок с меню bio */}
      <div
        className={s.accordion__subtitle}
        onClick={() => setcontentAbout("bio")}
      >
        <span>&#x25bc;</span>
        <img src={red} alt="icon" />
        <span>bio</span>
      </div>
      {/* блок с меню education */}
      <div
        className={s.accordion__subtitle}
        onClick={() => setIsActiveEd(!isActiveEd)}
      >
        {isActiveEd ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
        <img src={green} alt="icon" />
        <span>education</span>
      </div>
      {isActiveEd && (
        <ul>
          <li
            onClick={() => {
              setcontentAbout(school);
              setisIconBio(isIconBio);
            }}
          >
            school
          </li>
          <li onClick={() => setcontentAbout(univers)}>univers</li>
        </ul>
      )}
      {/* блок с меню interests */}
      <div
        className={s.accordion__subtitle}
        onClick={() => setIsActiveInt(!isActiveInt)}
      >
        {isActiveInt ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
        <img src={blue} alt="icon" />
        <span>interests</span>
      </div>
      {isActiveInt && (
        <ul>
          <li onClick={() => setcontentAbout(game)}>game</li>
        </ul>
      )}
    </div>
  );
};

{
  /* <span>&#x25bc;</span> : <span>&#x25ba;</span> */
}

//  const education = [];

//   const educationSchool = {
//     title: "school",
//     content: "школа ",
//   };

//   const educationUniv = {
//     title: "univers",
//     content: "институт",
//   };
//   education.push(educationSchool, educationUniv);
