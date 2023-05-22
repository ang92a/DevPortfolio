import React from "react";
import clsx from "clsx";
import s from "./ContentAboutMe.module.css";

export const ContentAboutMe = (props) => {
  const { large, small } = props;

  const innerClassName = clsx(s.item, {
    [s.fontSize__large]: large,
    [s.fontSize__small]: small,
  });

  return (
    <ol className={s.listContentAboutMe}>
      <li className={innerClassName}>/**</li>
      <li className={innerClassName}>* About me</li>
      <li className={innerClassName}>* I have 5 years of еxperience in web</li>
      <li className={innerClassName}>* development lorem ipsum dolor sit amet,</li>
      <li className={innerClassName}>* consectetur adipiscing elit, sed do eiusmod</li>
      <li className={innerClassName}>
        * tempor incididunt ut labore et dolore veniam,
      </li>
      <li className={innerClassName}>* quis nostrud exercitation ullamco laboris</li>
      <li className={innerClassName}>* nisi ut aliquip ex ea commodo consequat.</li>
      <li className={innerClassName}>* Duis aute irure dolor in reprehenderit in </li>
      <li className={innerClassName}>* voluptate velit esse cillum dolore eu fugiat</li>
      <li className={innerClassName}>* nulla pariatur. Excepteur sint occaecat</li>
      <li className={innerClassName}>* officia deserunt mollit anim id est laborum.</li>
      <li className={innerClassName}>*/</li>
    </ol>
  );
};
