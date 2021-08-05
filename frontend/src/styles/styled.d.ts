import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      redhero:string;
      title:string;
      title_secondary:string;
      text:string;
      text_secondary:string;
      line_input:string;
      input_background:string;
      background:string;
    };
  }
}
