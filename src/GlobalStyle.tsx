import { createGlobalStyle } from 'styled-components';
import '@schedule-x/theme-default/dist/index.css';

export const GlobalStyle = createGlobalStyle`

  html:focus-within {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: ${(p) => p.theme.space[0]}px;
  }

  a {
    text-decoration: none;
  }

  ul,
  li,
  ol {
    padding: ${(p) => p.theme.space[0]}px;;
    margin: ${(p) => p.theme.space[0]}px;;
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    display: block;
    margin: ${(p) => p.theme.space[0]}px;;
    font: 200 20px/1.5 ${(p) => p.theme.fonts.body};
  }
`;
