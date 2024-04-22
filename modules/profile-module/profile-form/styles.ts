import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const formCss = css`
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
  gap: 6vh;
`;

export const formHeadingCss = css`
  font-size: var(--font-heading-dw);
  font-weight: 400;
  margin-bottom: 2vh;
`;

export const inputsContainerCss = css`
  --col-val: 2;
  display: grid;
  grid-template-columns: repeat(var(--col-val), 1fr);
  gap: 2vh 4vw;
  ${mediaQuery.tablet} {
    --col-val: 1;
  }
`;

export const formInputCss = css`
  padding: 25px 35px;
  font-size: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--bor-rad);
  &:focus {
    outline-color: var(--color-focus);
  }
`;

export const selectContainerCss = css`
  position: relative;
`;

export const dateInputCss = css`
  ${formInputCss}
  color: rgb(83, 97, 128);
`;

export const selectCss = css`
  ${formInputCss}
  color: rgb(83, 97, 128);
  appearance: none;
  width: 100%;
`;

export const selectChevronCss = css`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const optionCss = css`
  padding: 15px 0;
`;

export const formBtnCss = css`
  background-color: var(--color-highlight);
  border-radius: var(--bor-rad);
  color: var(--color-dark);
  padding: 25px 8rem;
  width: fit-content;
  border: none;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
`;
