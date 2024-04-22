import { basicInfoInputs, formBtnText, moreInfoInputs } from "@/modules/profile-module/profile-form/content";
import {
  dateInputCss,
  formBtnCss,
  formCss,
  formHeadingCss,
  formInputCss,
  inputsContainerCss,
  optionCss,
  selectChevronCss,
  selectContainerCss,
  selectCss
} from "@/modules/profile-module/profile-form/styles";
import { BsChevronDown } from "react-icons/bs";

export default function ProfileForm() {
  const basicInfoMapper = (input: string, index: number) => {
    return <input type="text" css={formInputCss} placeholder={input} key={`${input}-${index}`} />;
  };
  const optionsMapper = (option: string, index: number) => {
    return (
      <option value={option} css={optionCss} key={`${option}-${index}`}>
        {option}
      </option>
    );
  };
  const moreInfoMapper = (select: (typeof moreInfoInputs.selects)[0], index: number) => {
    const { options, placeHolder } = select;
    return (
      <div key={`${placeHolder}-${index}`} css={selectContainerCss}>
        <BsChevronDown css={selectChevronCss} />
        <select css={selectCss} title={placeHolder} name={placeHolder}>
          <option value="" disabled selected hidden>
            {placeHolder}
          </option>
          {options.map(optionsMapper)}
        </select>
      </div>
    );
  };
  return (
    <form css={formCss}>
      <div>
        <h3 css={formHeadingCss}>{basicInfoInputs.heading}</h3>
        <div css={inputsContainerCss}>{basicInfoInputs.inputs.map(basicInfoMapper)}</div>
      </div>
      <div>
        <h3 css={formHeadingCss}>{moreInfoInputs.heading}</h3>
        <div css={inputsContainerCss}>
          {moreInfoInputs.selects.map(moreInfoMapper)}
          <input type="date" id="birthday" css={dateInputCss} name="birthday"></input>
        </div>
      </div>
      <button type="submit" css={formBtnCss}>
        {formBtnText}
      </button>
    </form>
  );
}
