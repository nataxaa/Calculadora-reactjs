import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #0F1020;
        --text:#F3F3F4;
    }

    *{
        margin:0 ;
        padding:0 ;
        -webkit-font-smoothing:antialiased;
    }
    body{
        background-color:var(--background);
        color:var(--text);
        font-family:sans-serif;
    }

`
