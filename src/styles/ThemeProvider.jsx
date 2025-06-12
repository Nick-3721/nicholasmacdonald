import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from '@/styles/GlobalStyles.js';
const themes = {
  theme1: {
    primaryColor : "rgb(0, 0, 0)",
    secondaryColor : "rgb(255, 255, 255)",
    tertiaryColor: "rgb(150, 150, 150)", // A soft gray to create subtle contrast.
  },
  theme2: {
    primaryColor : "rgb(255, 206, 97)",
    secondaryColor : "rgb(249, 128, 75)",
    tertiaryColor: "rgb(255, 178, 106)", // A warm peach accent to tie the yellows and oranges together.
  },
  theme3: {
    primaryColor : "rgb(187, 175, 157)",
    secondaryColor : "rgb(51, 71, 86)",
    tertiaryColor: "rgb(130, 123, 98)", // A muted brown to complement the earthy tones.
  },
  theme4: {
    primaryColor : "rgb(0, 255, 0)",
    secondaryColor : "rgb(0, 0, 0)",
    tertiaryColor: "rgb(0, 255, 127)", // A lighter green to keep the vibrant feel but with contrast.
  },
  theme5: {
    primaryColor : "rgb(29, 0, 71)",
    secondaryColor : "rgb(255, 0, 0)",
    tertiaryColor: "rgb(120, 0, 255)", // A purple accent to balance the red and deep blue.
  },
  theme6: {
    primaryColor : "rgb(30, 63, 30)",
    secondaryColor : "rgb(255, 148, 141)",
    tertiaryColor: "rgb(85, 131, 85)", // A muted green to blend with the earthy tones of the theme.
  },
  theme7: {
    primaryColor : "rgb(255, 97, 0)",
    secondaryColor : "rgb(0, 0, 0)",
    tertiaryColor: "rgb(255, 140, 0)", // A lighter orange that harmonizes with the deep orange.
  },
  theme8: {
    primaryColor : "rgb(66, 80, 62)",
    secondaryColor : "rgb(255, 212, 175)",
    tertiaryColor: "rgb(184, 184, 184)", // A soft gray that balances the green and peach tones.
  },
  theme9: {
    primaryColor : "rgb(35, 9, 89)",
    secondaryColor : "rgb(255, 123, 123)",
    tertiaryColor: "rgb(122, 31, 104)", // A deep pinkish-purple to add some depth.
  },
  theme10: {
    primaryColor : "rgb(0, 0, 255)",
    secondaryColor : "rgb(255, 255, 255)",
    tertiaryColor: "rgb(173, 216, 230)", // A light blue to complement the vibrant blue.
  },
  theme11: {
    primaryColor : "rgb(100, 120, 100)",
    secondaryColor : "rgb(251, 238, 241)",
    tertiaryColor: "rgb(168, 144, 128)", // A neutral brownish-gray to add balance to the soft tones.
  },
  theme12: {
    primaryColor : "rgb(55, 63, 45)",
    secondaryColor : "rgb(255, 88, 62)",
    tertiaryColor: "rgb(92, 94, 85)", // A muted olive tone to ground the vibrant colors.
  },
  theme13: {
    primaryColor : "rgb(60, 66, 54)",
    secondaryColor : "rgb(183, 255, 0)",
    tertiaryColor: "rgb(102, 114, 88)", // A darker greenish-brown to complement the bright yellow.
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