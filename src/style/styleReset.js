import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    background-color: #020202;
    width: 100%;
    height: 100vh;
  }

  section {
    background-color: black;
  }

  h1, h2, h3, h4, h5, h6 {
    color: lightgray;
  }

  p {
    font-size: 1rem;
    color: #adb5bd;
  }
`;

export default Reset;
