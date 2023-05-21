import s from "./About.module.css";
import { Scrollbar } from "../../ui/Scrollbar/Scrollbar";
import { Highlighter } from "rc-highlight";
import { MenuAccordion } from "../../ui/Accordion/MenuAccordion/MenuAccordion";
import red from "../../ui/Accordion/assets/iconRed.svg";
import green from "../../ui/Accordion/assets/iconGreen.svg";
import blue from "../../ui/Accordion/assets/iconBlue.svg";
import mail from "../../ui/Accordion/assets/mail-icon.svg";
import phone from "../../ui/Accordion/assets/phone-icon.svg";

const makeCode = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
`;

export const About = () => {
  const content = ["bio", "interests", "education"];
  const symbol = [red, green, blue];
  const content2 = ["user@gmail.com", "+9999999999"];
  const symbol2 = [mail, phone];
  return (
    <>
      <div className={s.containerAbout}>
        <div className={s.sidebar}></div>
        <div className={s.leftAside}>
          <MenuAccordion
            title="personal-info"
            content={content}
            symbol={symbol}
          />
          <MenuAccordion title="contacts" content={content2} symbol={symbol2} />
        </div>
        <div className={s.contentAboutMe}>
          <div className={s.contentAboutMe}>
            <div className={s.contentAboutMe__title}></div>
          </div>
          <Scrollbar />
        </div>
        <div className={s.rightAside}>
          <div className={s.contentShowCase}>
            <Highlighter>{makeCode}</Highlighter>
          </div>
          <Scrollbar />
        </div>
      </div>
    </>
  );
};
