import React from "react";
import s from "./ContentAboutMe.module.css";

export const ContentAboutMe = ({ contentAbout }) => {
  return (
    <>
      <div className={s.content}>{contentAbout}</div>
    </>
  );
};
