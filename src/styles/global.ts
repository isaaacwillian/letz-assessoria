import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #000000;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    transition: all 0.5s;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
  }
  button{
    cursor: pointer;
  }
`;
