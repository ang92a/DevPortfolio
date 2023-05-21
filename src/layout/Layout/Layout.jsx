import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className={s.GlobalWrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
