import { createGlobalStyle } from "styled-components";
import { Outfit } from "@next/font/google";

export const outfit = Outfit({
  variable: "--outfit",
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default createGlobalStyle`
  :root {
    //! Breakpoints
    --mobile: ${(props) => props.theme.media.mobile};
    --tablet: ${(props) => props.theme.media.tablet};
    --laptop: ${(props) => props.theme.media.laptop};
    --desktop: ${(props) => props.theme.media.desktop};

    //! Colors
    --background: ${(props) => props.theme.colors.background};
    --primary: ${(props) => props.theme.colors.primary};
    --secondary: ${(props) => props.theme.colors.secondary};
    --accent: ${(props) => props.theme.colors.accent};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    font-family: Roboto, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6, p, li {
    font-family: Roboto;
    color: var(--primary);
  }

  img {
    user-select: none;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: color 0.2s;

    &:hover {
      color: var(--accent);
    }
  }
`;
