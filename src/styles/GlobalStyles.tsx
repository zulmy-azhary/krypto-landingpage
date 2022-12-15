import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* Breakpoints */
    --mobile: ${(props) => props.theme.media.mobile};
    --tablet: ${(props) => props.theme.media.tablet};
    --laptop: ${(props) => props.theme.media.laptop};
    --desktop: ${(props) => props.theme.media.desktop};

    /* Colors */
    --background: ${(props) => props.theme.colors.background};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    font-family: Inter, sans-serif;
  }
`;
