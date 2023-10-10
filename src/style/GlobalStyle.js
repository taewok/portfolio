import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'IM_Hyemin-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2') format('woff');
    font-weight: normal;
    font-style: normal;
}
    *{
        margin:0;
        padding:0;
        z-index: 999;
    }
    html {
      scroll-behavior: smooth;
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
