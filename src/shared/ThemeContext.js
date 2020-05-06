import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState();
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      console.log(1, localStorage.getItem("theme"));
      setTheme(localStorage.getItem("theme"));
    } else {
      console.log(2);
      setTheme("light");
    }
    setTimeout(() => {
      localStorage.clear();
    }, 2000);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
