import "styled-components";

type Media = {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

type Colors = {
  background: {
    paper: string;
    default: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  primary: {
    main: string;
    dark: string;
    light: string;
  };
  secondary: {
    main: string;
  };
  action: {
    active: string;
    disabled: string;
    disabledBackground: string;
  };
  others: {
    contrast: string;
    divider: string;
  };
  components: {
    outline: string;
  };
  neutral: {
    900: string;
    500: string;
    300: string;
    400: string;
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    media: Media;
    colors: Colors;
  }
}