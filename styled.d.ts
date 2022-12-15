import "styled-components";

type Media = {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    media: Media;
    colors: {
      background: string;
    }
  }
}