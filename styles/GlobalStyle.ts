import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";


export const GlobalStyles = createGlobalStyle`

  :root{
  --background: #ffffff;
  --shape: #E5E5E5;
  --header: #72D8FF;
  --text: #6E6E6E;
  --white: #FFFFFF;
  --black: #000000;
  --gray-dark: #373737;
  --gray-300: #EEEEEE;
  --primary: #0F52BA;
  --borders: #BFBFBF;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media (max-width: 1080px){
    font-size: 93.75%; //15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; //14px
  }
}
body{
background: var(--background);
-webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}
button{
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
}
a{
  text-decoration: none;
}


`;
