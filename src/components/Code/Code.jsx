import ReactEmbedGist from "react-embed-gist";
import { Highlighter } from "rc-highlight";
import s from "./Code.module.css";
import { useState, useEffect } from "react";
import ava from "../../img/1000.JPG";
import starEmpty from "./assets/starsEmpty.svg";
import starFull from "./assets/starsFull.svg";
import detals from "./assets/detals.svg";
import close from "./assets/close.svg";

export const Code = () => {
  const [isActive, setIsActive] = useState(false);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    fetch("https://api.github.com/gists/47fa6c2cc2b490bf860898ee74941371")
      .then((response) => {
        // Success
        if (response.ok) return response.json(); // Returns to then()

        // Error
        return Promise.reject(response);
      })
      .then((data) => {
        const obj = {
          content: data.files["first.jsx"].content,
          login: data.owner.login,
          date: data.files["first.jsx"].created_at,
          ava: data.owner.avatar_url,
          comment: data.comments_url.body,
        };
        setData(obj);
      })
      .catch((err) => {
        console.error(err); // Error
      });
  }, []);

  const [data, setData] = useState({});

  return (
    <>
      <p className={s.snippet_title}> Code snippet showcase:</p>
      <div className={s.snippets}>
        <div className={s.snippet}>
          <div className={s.snippet_header}>
            <div className={s.snippet_headerLeft}>
              <div className={s.divAva}>
                <img src={data.ava} alt="ava" className={s.ava} />
              </div>
              <div className={s.divTeg}>
                <span className={s.snippet_tag}>{data.login}</span>
                <span className={s.snippet_tag}>{data.date}</span>
              </div>
            </div>
            <div className={s.snippet_headerRight}>
              <div
                className={s.snippet_details}
                onClick={() => setIsActive(!isActive)}
              >
                <img src={detals} alt="detals" />
                <span>details</span>
              </div>
              <div className={s.snippet_stars} onClick={handleLike}>
                {like ? (
                  <img src={starFull} alt="starFull" />
                ) : (
                  <img src={starEmpty} alt="starEmpty" />
                )}
                <span>stars</span>
              </div>
            </div>
          </div>
          <div className={s.contentShowCase}>
            <Highlighter>{data.content}</Highlighter>
          </div>
        </div>
        {isActive && (
          <div className={s.moreInfo}>
            <p>more info</p>
            <img
              src={close}
              alt="close"
              onClick={() => setIsActive(!isActive)}
            />
          </div>
        )}
        {/* второй сниппет */}
      </div>
    </>
  );
};

// const makeCode = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
//   const value: T = parseModel(chunk._response, chunk._value);
//   const initializedChunk: InitializedChunk<T> = (chunk: any);
//   initializedChunk._status = INITIALIZED;
//   initializedChunk._value = value;
//   return value;
// }
// `;
