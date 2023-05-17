import React from "react";
import s from "./HeaderLink.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const HeaderLink = ({ title, to }) => {
  return (
    <NavLink to={to} activeClassName={s.active} className={s.link__header}>
      {title}
    </NavLink>
  );
};
