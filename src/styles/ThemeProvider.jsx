import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themeNames = [
  'theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 
  'theme7', 'theme8', 'theme9', 'theme10', 'theme11', 'theme12', 'theme13'
];

export const ThemeProvider = ({ children }) => {
  // Start with a random theme
  const randomTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
  const [currentTheme, setCurrentTheme] = useState(randomTheme);

  // Apply theme class to document root
  useEffect(() => {
    // Remove all theme classes
    themeNames.forEach(theme => {
      document.documentElement.classList.remove(theme);
    });
    // Add current theme class
    document.documentElement.classList.add(currentTheme);
  }, [currentTheme]);

  const changeTheme = () => {
    // Temporarily override transition speed for theme toggle text color
    document.documentElement.style.setProperty('--ThemeToggle-text-color-transition', '800ms ease-in-out');
    
    const currentIndex = themeNames.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    setCurrentTheme(themeNames[nextIndex]);
    
    // Reset transition speed after theme transition completes
    setTimeout(() => {
      document.documentElement.style.removeProperty('--ThemeToggle-text-color-transition');
    }, 1000); // Slightly longer than 800ms transition time controlled in CSS
  };

  // Helper function to get CSS variable values for components that might need them
  const getCSSVariableValue = (variableName) => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();
    }
    return '';
  };

  // Provide theme utilities
  const themeValue = {
    currentTheme,
    changeTheme,
    getCSSVariableValue,
    // For backward compatibility, provide color values
    theme: {
      primaryColor: `rgb(var(--primary-color))`,
      secondaryColor: `rgb(var(--secondary-color))`,
      tertiaryColor: `rgb(var(--tertiary-color))`,
    }
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};