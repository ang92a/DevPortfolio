import { useState } from "react";
import s from "./About.module.css";
import { Scrollbar } from "../../ui/Scrollbar/Scrollbar";
import { Code } from "../../components/Code/Code";
import { MenuAccordion } from "../../components/Accordion/MenuAccordion/MenuAccordion";
import { ContentAboutMe } from "../../components/ContentAboutMe/ContentAboutMe";
import iconbio from "./assets/bioIcon.svg";
import iconEd from "./assets/edIcon.svg";
import iconInt from "./assets/intIcon.svg";

export const About = () => {
  const [contentAbout, setcontentAbout] = useState("bio");
  const [isIconBio, setisIconBio] = useState(iconbio);

  return (
    <>
      <div className={s.leftAside}>
        <div className={s.leftAsideItem}>
          <img
            src={iconbio}
            alt="icon"
            className={`${isIconBio ? s.iconAtive : null}`}
          />
          <img
            src={iconEd}
            alt="icon"
            className={`${isIconBio ? s.iconAtive : null}`}
          />
          <img
            src={iconInt}
            alt="icon"
            className={`${isIconBio ? s.iconAtive : null}`}
          />
        </div>
        <div className={s.menuAccordion}>
          <MenuAccordion
            title="personal-info"
            setcontentAbout={setcontentAbout}
            setisIconBio={setisIconBio}
            isIconBio={isIconBio}
          />
        </div>
      </div>
      <div className={s.contentAboutMe}>
        <ContentAboutMe contentAbout={contentAbout} />
        <Scrollbar />
      </div>
      <div className={s.rightAside}>
        <Code />
        <Scrollbar />
      </div>
    </>
  );
};

// function numeric(number) {
//   let arr = [];
//   for (let i = 1; i <= number / 27; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// const [size, setSize] = useState({});
// const ref = useRef();

// const resizeHandler = () => {
//   const { clientHeight, clientWidth } = ref.current || {};
//   setSize({ clientHeight, clientWidth });
// };

// useEffect(() => {
//   window.addEventListener("resize", resizeHandler);
//   resizeHandler();
//   return () => {
//     window.removeEventListener("resize", resizeHandler);
//   };
// }, []);

// const arr = numeric(size.clientHeight);

// console.log(size.clientHeight);
