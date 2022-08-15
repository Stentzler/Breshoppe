import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none ;
    text-align: center;
  }

  :root{
    --black: #02010a;
    --primary: #04052e;
    --secondary: #a4bEf3;
    --white: #f0Eff4;
    --support:#53687e;
  }

  body {
    overflow-y: scroll;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    padding: 6px 10px;
    color: var(--white);
    background-color: var(--primary);
    z-index: 0;

    transition: all 0.3s;
  }
`;
