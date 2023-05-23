import { useState } from "react";
import s from "./About.module.css";
import { Scrollbar } from "../../ui/Scrollbar/Scrollbar";
import { Code } from "../../components/Code/Code";
import { MenuAccordion } from "../../components/Accordion/MenuAccordion/MenuAccordion";
// import red from "../../components/Accordion/assets/iconRed.svg";
// import green from "../../components/Accordion/assets/iconGreen.svg";
// import blue from "../../components/Accordion/assets/iconBlue.svg";
// import mail from "../../components/Accordion/assets/mail-icon.svg";
// import phone from "../../components/Accordion/assets/phone-icon.svg";
import { ContentAboutMe } from "../../components/ContentAboutMe/ContentAboutMe";
import icon from "./assets/professional-info-icon.svg";

export const About = () => {
  const [contentAbout, setcontentAbout] = useState("bio");

  return (
    <>
      <div className={s.leftAside}>
        <div className={s.leftAsideItem}>
          <img src={icon} alt="icon" className={s.Icon} />
          <img src={icon} alt="icon" className={s.Icon} />
          <img src={icon} alt="icon" className={s.Icon} />
        </div>
        <div className={s.menuAccordion}>
          <MenuAccordion
            title="personal-info"
            setcontentAbout={setcontentAbout}
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
