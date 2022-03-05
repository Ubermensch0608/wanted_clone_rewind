import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        &::-webkit-scrollbar {
            height:0;
            width: 0;
        }
    }
`;

export default GlobalStyle;
