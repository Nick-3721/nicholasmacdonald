import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from '@/styles/GlobalStyles.js';

const themes = {
  theme1: {
    primaryColor : "rgb(0, 0, 0)",
    secondaryColor : "rgb(255, 255, 255)",
  },
  theme2: {
    primaryColor : "rgb(255, 206, 97)",
    secondaryColor : "rgb(249, 128, 75)",
  },
  theme3: {
    primaryColor : "rgb(187, 175, 157)",
    secondaryColor : "rgb(51, 71, 86)",
  },
  theme4: {
    primaryColor : "rgb(0, 255, 0)",
    secondaryColor : "rgb(0, 0, 0)",
  },
  theme5: {
    primaryColor : "rgb(29, 0, 71)",
    secondaryColor : "rgb(255, 0, 0)",
  },
  theme6: {
    primaryColor : "rgb(30, 63, 30)",
    secondaryColor : "rgb(255, 148, 141)",
  },
  theme7: {
    primaryColor : "rgb(255, 97, 0)",
    secondaryColor : "rgb(0, 0, 0)",
  },
  theme8: {
    primaryColor : "rgb(66, 80, 62)",
    secondaryColor : "rgb(255, 212, 175)",
  },
  theme9: {
    primaryColor : "rgb(35, 9, 89)",
    secondaryColor : "rgb(255, 123, 123)",
  },
  theme10: {
    primaryColor : "rgb(0, 0, 255)",
    secondaryColor : "rgb(255, 255, 255)",
  },
  theme11: {
    primaryColor : "rgb(100, 120, 100)",
    secondaryColor : "rgb(251, 238, 241)",
  },
  theme12: {
    primaryColor : "rgb(55, 63, 45)",
    secondaryColor : "rgb(255, 88, 62)",
  },
  theme13: {
    primaryColor : "rgb(60, 66, 54)",
    secondaryColor : "rgb(183, 255, 0)",
  },
}

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("theme12")
  const theme = themes[themeName]
  
  const changeTheme = () => {
    const themeKeys = Object.keys(themes)
    const nextIndex = (themeKeys.indexOf(themeName) + 1) % themeKeys.length
    setThemeName(themeKeys[nextIndex])
  }
  
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles/>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);