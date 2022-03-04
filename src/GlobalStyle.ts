import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items:center;
    }
`;

export default GlobalStyle;
