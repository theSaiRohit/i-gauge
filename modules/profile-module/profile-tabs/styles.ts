import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const profileTabsWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: var(--bor-rad);
  border: 1px solid var(--color-border);
  margin-top: 4vh;
  overflow-x: hidden;
  * {
    font-size: 1.6rem;
  }
  ${mediaQuery.miniDesktop} {
    border: none;
    gap: 4vh;
    flex-direction: column;
  }
`;

export const tabContainerCss = css`
  display: flex;
  gap: 8vw;
  padding: 0 40px;
  ${mediaQuery.miniDesktop} {
    border: 1px solid var(--color-border);
    justify-content: space-between;
    overflow-x: scroll;
  }
  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const tabCss = css`
  padding: 25px 0;
  flex-shrink: 0;
  cursor: pointer;
  &:nth-of-type(2) {
    color: var(--color-focus);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      background-color: var(--color-focus);
      width: 100%;
    }
  }
`;

export const logoutBtnCss = css`
  border: none;
  color: var(--color-white);
  background-color: var(--color-error);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 25px 35px;
  cursor: pointer;
  width: fit-content;
  ${mediaQuery.miniDesktop} {
    margin-left: auto;
    border-radius: var(--bor-rad);
  }
`;
