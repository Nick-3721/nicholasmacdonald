import { createGlobalStyle } from "styled-components";

const GlobalStyles =  createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=DM+Serif+Display:ital@0;1&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Sora:wght@100..800&family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=DM+Serif+Display:ital@0;1&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Krona+One&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Sora:wght@100..800&family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap');

  /* * {
    transition: 
      background-color 0.5s ease-in-out 0s, 
      color 0.5s ease-in-out 0s, 
      border-color 0.5s ease-in-out 0s;
  } */

  body {
    font-family: "Sora", sans-serif;
    /* font-family: "degular", sans-serif; */
    /* font-family: "Krona one", sans-serif; */
    font-weight: 200;
    font-style: normal;
    font-weight: 400;
    font-style: normal;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: "Krona one", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    line-height: 1.1em;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: inherit;
  }

  h1 {
    color:${({ theme }) => theme.secondaryColor};
    font-size: 80px;
    letter-spacing: 0.03em;
  }

  ::selection {
  background-color: ${({ theme }) => theme.secondaryColor.replace("rgb", "rgba").replace(")", ", 0.75)")};
  color: ${({ theme }) => theme.primaryColor};
}

::-moz-selection {
  background-color: ${({ theme }) => theme.secondaryColor.replace("rgb", "rgba").replace(")", ", 0.75)")};
  color: ${({ theme }) => theme.primaryColor};
}

`

export default GlobalStyles;