//create global styles
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Shantell Sans', cursive;
    }
    body{
        background:${({theme})=> theme.colors.mainColor}
    }

`