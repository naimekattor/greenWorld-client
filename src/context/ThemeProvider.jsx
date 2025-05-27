import { createContext, useState } from "react";

export const themeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themeInfo = {
    theme,
    setTheme
  }
  return <themeContext.Provider value={themeInfo}>{children}</themeContext.Provider>
}
export default ThemeProvider