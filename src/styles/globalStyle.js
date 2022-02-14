import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: 'puente-medium-regular';
    src: url('../fonts/puente-medium-regular.ttf')
}
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #d4dded;
    font-family: Verdana,Arial,sans-serif;
    font-size: 12px;
}
`

export default GlobalStyle 