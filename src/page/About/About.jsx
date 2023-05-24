import { useState } from "react";
import s from "./About.module.css";
import { Scrollbar } from "../../ui/Scrollbar/Scrollbar";
import { Code } from "../../components/Code/Code";
import { MenuAccordion } from "../../components/Accordion/MenuAccordion/MenuAccordion";
import { ContentAboutMe } from "../../components/ContentAboutMe/ContentAboutMe";
import iconbio from "./assets/bioIcon.svg";
import iconEd from "./assets/edIcon.svg";
import iconInt from "./assets/intIcon.svg";
import { Bio } from "../../components/Bio/Bio";
import close from "../../components/Code/assets/close.svg";

export const About = () => {
  const [contentAbout, setcontentAbout] = useState(<Bio />);

  return (
    <>
      <div className={s.leftAside}>
        <div className={s.leftAsideItem}>
          <img src={iconbio} alt="icon" className={s.AsideItem} />
          <img src={iconEd} alt="icon" className={s.AsideItem} />
          <img src={iconInt} alt="icon" className={s.AsideItem} />
        </div>
        <div className={s.menuAccordion}>
          <MenuAccordion
            title="personal-info"
            setcontentAbout={setcontentAbout}
          />
        </div>
      </div>
      <div className={s.contentAboutMe}>
        <div className={s.titleContentAboutMe}>
          <span>personal-info</span>
          <img src={close} alt="close" className={s.iconClose} />
        </div>
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
