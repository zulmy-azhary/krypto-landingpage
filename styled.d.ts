import "styled-components";

type Media = {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

type Colors = {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    media: Media;
    colors: Colors;
  }
}