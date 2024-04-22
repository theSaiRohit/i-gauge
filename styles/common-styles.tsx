import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const commonPageWrapperCss = css`
  --pad-top: var(--padding-page-dw);
  padding: var(--pad-top) 0;
  ${mediaQuery.tablet} {
    --pad-top: var(--padding-page-mw);
  }
  ${mediaQuery.mobileLandscape} {
    --pad-top: var(--padding-page-dw);
  }
  &.page {
    margin-top: var(--header-height);
  }
`;
