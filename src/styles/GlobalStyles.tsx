import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    //! Breakpoints
    --mobile: ${(props) => props.theme.media.mobile};
    --tablet: ${(props) => props.theme.media.tablet};
    --laptop: ${(props) => props.theme.media.laptop};
    --desktop: ${(props) => props.theme.media.desktop};

    //! Colors
    /* Bg */
    --bgPaper: ${(props) => props.theme.colors.background.paper};
    --bgDefault: ${(props) => props.theme.colors.background.default};

    /* Text */
    --textPrimary: ${(props) => props.theme.colors.text.primary};
    --textSecondary: ${(props) => props.theme.colors.text.secondary};
    --textDisabled: ${(props) => props.theme.colors.text.disabled};

    /* Primary */
    --primaryMain: ${(props) => props.theme.colors.primary.main};
    --primaryDark: ${(props) => props.theme.colors.primary.dark};
    --primaryLight: ${(props) => props.theme.colors.primary.light};

    /* Secondary */
    --secondaryMain: ${(props) => props.theme.colors.secondary.main};

    /* Action */
    --actionActive: ${(props) => props.theme.colors.action.active};
    --actionDisabled: ${(props) => props.theme.colors.action.disabled};
    --actionDisabledBackground: ${(props) => props.theme.colors.action.disabledBackground};

    /* Others */
    --contrast: ${(props) => props.theme.colors.others.contrast};
    --divider: ${(props) => props.theme.colors.others.divider};

    /* Components */
    --outline: ${(props) => props.theme.colors.components.outline};

    /* Neutral */
    --neutral900: ${(props) => props.theme.colors.neutral[900]};
    --neutral500: ${(props) => props.theme.colors.neutral[500]};
    --neutral400: ${(props) => props.theme.colors.neutral[400]};
    --neutral300: ${(props) => props.theme.colors.neutral[300]};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bgDefault);
    font-family: Inter, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 137.5%;
    color: var(--textPrimary);
  }

  h1, h2, h3, h4 {
    font-weight: 700;
  }

  h5, h6 {
    font-weight: 600;
  }
`;
