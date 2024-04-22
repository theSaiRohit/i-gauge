import { css } from "@emotion/react";
import { Red_Hat_Text, Libre_Baskerville } from "next/font/google";

const headingFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"]
});
const primaryFont = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const globalStyles = css`
  :root {
    //common values
    --font-heading: ${headingFont.style.fontFamily};
    --font-default: ${primaryFont.style.fontFamily};
    --max-page-width: 1440px;
    --bor-rad: 5px;

    //font sizes
    --font-heading-dw: 2.25rem;

    //desktop
    --padding-page-dw: 10vh;

    //mobile
    --padding-page-mw: 5vh;

    //colors
    --color-dark: rgb(0, 0, 0);
    --color-white: rgb(255, 255, 255);
    --color-border: rgb(234, 234, 234);
    --color-error: rgb(220, 106, 106);
    --color-highlight: rgb(247, 167, 13);
    --color-focus: rgb(39, 39, 97);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-default);
  }
  h1 {
    font-family: var(--font-heading);
  }
`;
