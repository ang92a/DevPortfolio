import { useState, useRef, useEffect } from "react";
import s from "./About.module.css";
import { Scrollbar } from "../../ui/Scrollbar/Scrollbar";
import { Highlighter } from "rc-highlight";
import { MenuAccordion } from "../../components/Accordion/MenuAccordion/MenuAccordion";
import red from "../../components/Accordion/assets/iconRed.svg";
import green from "../../components/Accordion/assets/iconGreen.svg";
import blue from "../../components/Accordion/assets/iconBlue.svg";
import mail from "../../components/Accordion/assets/mail-icon.svg";
import phone from "../../components/Accordion/assets/phone-icon.svg";
import { ContentAboutMe } from "../../components/ContentAboutMe/ContentAboutMe";
import icon from "./assets/professional-info-icon.svg";

const makeCode = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
`;



function numeric(number) {
  let arr = [];
  for (let i = 1; i <= number / 27; i++) {
    arr.push(i);
  }
  return arr;
}

export const About = () => {
  const [size, setSize] = useState({});
  const ref = useRef();

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const arr = numeric(size.clientHeight);

  console.log(size.clientHeight);
  return (
    <>
      {" "}
      <div className={s.leftAside}>
        <div className={s.leftAsideItem}>
          <i>
            <img src={icon} alt="icon" className={s.Icon} />
          </i>
          <i>
            <img src={icon} alt="icon" />
          </i>
          <i>
            <img src={icon} alt="icon" />
          </i>
        </div>
        <div className={s.menuAccordion}>
          <MenuAccordion title="personal-info" />
        </div>
      </div>
      <div className={s.contentAboutMe} ref={ref}>
        <ContentAboutMe arr={arr} />
        <Scrollbar />
      </div>
      <div className={s.rightAside}>
        <div className={s.contentShowCase}>
          <Highlighter>{makeCode}</Highlighter>
        </div>
        <Scrollbar />
      </div>
    </>
  );
};

// const elementRef = useRef();

// useEffect(
//   () => {
//     const divElement = elementRef.current.clientWidth;
//     console.log(divElement);
//   },
//   { elementRef }
// );

// **************

// const [width, setWidth] = useState(window.innerWidth);

// useEffect(() => {
//   const handleResize = (event) => {
//     setWidth(event.target.innerWidth);
//   };
//   window.addEventListener("resize", handleResize);
//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);

// const ref = useRef(width);
// const calc = ref.current.clientWidth;
// console.log(calc);
