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
    margin: ${({ theme }) => theme.space[0]}px;
  }

  a {
    text-decoration: none;
  }

  ul,
  li,
  ol {
    padding: ${({ theme }) => theme.space[0]}px;;
    margin: ${({ theme }) => theme.space[0]}px;;
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button{
    display: block;
      border: none;

  }

  body {
    display: block;
    margin: ${({ theme }) => theme.space[0]}px;
    font: 200 20px/1.5 ${({ theme }) => theme.fonts.body};
  }
`;
