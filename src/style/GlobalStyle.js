import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }
    body{
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        #root{
            width:100%;
            height:100%;
        }
    }
`;

export default GlobalStyle;
