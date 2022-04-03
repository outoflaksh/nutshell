import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Ubuntu:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100vh;

        font-family: 'Montserrat', sans-serif;
        font-size: 18px;

        background-color: #0B314D;
        color: #DAECFF;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input, button {
        font: inherit;
        color: inherit;
    }
`;

export default GlobalStyles;
