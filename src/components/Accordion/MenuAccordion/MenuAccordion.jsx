import { useState } from "react";
import s from "./MenuAccordion.module.css";
import { AccordionBody } from "../AccordionBody/AccordionBody";
import red from "../assets/iconRed.svg";
import green from "../assets/iconGreen.svg";
import blue from "../assets/iconBlue.svg";
import { AccordionContent } from "../AccordionContent/AccordionContent";

const fileEd = ["first", "second", "third"];
const fileIn = ["first", "second"];

export const MenuAccordion = ({ title, setcontentAbout }) => {
  const education = [];

  const educationSchool = {
    title: "school",
    content: "школа ",
  };

  const educationUniv = {
    title: "univers",
    content: "институт",
  };
  education.push(educationSchool, educationUniv);

  return (
    <div className={s.accordion__item}>
      <div className={s.accordion__title}>
        <p>&#x25bc;{title}</p>
      </div>
      <div>
        <AccordionBody subtitle="bio" icon={red} />
      </div>
      <div>
        <AccordionBody subtitle="education" icon={blue} />
        <AccordionContent props={education} setcontentAbout={setcontentAbout} />
      </div>
      <div>
        <AccordionBody subtitle="interests" icon={green} />
        <AccordionContent props={education} setcontentAbout={setcontentAbout} />
      </div>
    </div>
  );
};
