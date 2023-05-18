import s from "./About.module.css"
import { Scrollbar } from "../../ui/Scrollbar/Scrollbar";


export const About = () => {
  return (
    <>
      <div className={s.containerAbout}>
        <div className={s.sidebar}></div>
        <div className={s.leftAside}></div>
        <div className={s.contentAboutMe}>
          <div className={s.contentAboutMe}>
            <div className={s.contentAboutMe__title}></div>
          </div>
          <Scrollbar />
        </div>
        <div className={s.rightAside}>
          <div className={s.contentShowCase}>
            <pre>
              <code>function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}</code>
            </pre>
          </div>
          <Scrollbar />
        </div>
      </div>
    </>
  );
};
