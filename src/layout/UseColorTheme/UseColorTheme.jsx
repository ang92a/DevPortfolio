import { useCallback, useState } from "react";

const COLOR_THEME = {
  light: "light",
  dark: "dark",
};

export const useColorTheme = () => {

  const [colorTheme, setColorTheme] = useState(COLOR_THEME.dark);

  const changeColorTheme = useCallback((theme = "") => {
    const currentTheme = theme === "" ? COLOR_THEME.dark : theme;
    setColorTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleColorTheme = useCallback(() => {
    colorTheme === COLOR_THEME.dark
      ? changeColorTheme(COLOR_THEME.light)
      : changeColorTheme(COLOR_THEME.dark);
  }, [colorTheme, changeColorTheme]);

  return { colorTheme, changeColorTheme, toggleColorTheme };
};
