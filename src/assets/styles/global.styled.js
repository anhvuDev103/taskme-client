import { createGlobalStyle } from 'styled-components';
// import './stylesheet.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Segoe UI';
    src: url('../fonts/SegoeUI-Italic.woff2') format('woff2'),
      url('../fonts/SegoeUI-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('../fonts/SegoeUI.woff2') format('woff2'), url('../fonts/SegoeUI.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('../fonts/SegoeUI-Bold.woff2') format('woff2'),
      url('../fonts/SegoeUI-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('../fonts/SegoeUI-BoldItalic.woff2') format('woff2'),
      url('../fonts/SegoeUI-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }


  * {
  box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;

    margin: 0;
  }

  input {
    font-family: 'Segoe UI', sans-serif;
  }

  #searchBox-popper {
    width: ${({ theme }) => theme.width.searchBox};
  }

  button {
    border: none;
    outline: none;
    padding: 0;
  }
`;

export default GlobalStyle;
