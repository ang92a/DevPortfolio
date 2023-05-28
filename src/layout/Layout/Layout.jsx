import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useColorTheme } from "../UseColorTheme/UseColorTheme";

export const Layout = ({ children}) => {
  const { colorTheme, toggleColorTheme } = useColorTheme();

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  return (
    <div className={s.GlobalWrapper}>
      <Header />
      <main>{children}</main>
      <Footer onChangeTheme={onChangeTheme} />
    </div>
  );
};
