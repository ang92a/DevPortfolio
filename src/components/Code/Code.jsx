import { Highlighter } from "rc-highlight";
import s from "./Code.module.css";

const makeCode = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
`;

export const Code = () => {
  return (
    <div className={s.contentShowCase}>
      <Highlighter>{makeCode}</Highlighter>
    </div>
  );
};
