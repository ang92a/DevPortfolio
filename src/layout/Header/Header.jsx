import React from "react";
import s from "./Header.module.css";
import { HeaderLink } from "../../ui/HeaderLink/HeaderLink";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hello } from "../../page/Hello/Hello";
import { About } from "../../page/About/About";
import { Portfolio } from "../../page/Portfolio";
import { Contact } from "../../page/Contact";
import { NotFound } from "../../page/NotFound";

export const Header = () => {
  return (
    <Router>
      <header className={s.header}>
        <ul className={s.header__menu}>
          <li>"micheal-weaver"</li>
          <li className={s.li}>
            <HeaderLink title="_hello" to="/" />
          </li>
          <li className={s.li}>
            <HeaderLink title="_about-me" to="/about" />
          </li>
          <li className={s.li}>
            <HeaderLink title="_projects" to="/projects" />
          </li>
          <li className={s.li}>
            <HeaderLink title="_contats" to="/contacts" />
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
