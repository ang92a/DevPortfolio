import React from "react";
import s from "./Icon.module.css";
import clsx from "clsx";

export const Icon = (props) => {
  const { img, twitter, facebook, git, src } = props;
  const innerClassName = clsx({
    [s.Icon__twitter]: twitter,
    [s.Icon__facebook]: facebook,
    [s.Icon__git]: git,
  });
  return (
    <>
      <a href={src}>
        <img src={img} alt="icon" className={innerClassName} />
      </a>
    </>
  );
};
