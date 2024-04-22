import { tabsHeading } from "@/modules/profile-module/profile-tabs/content";
import {
  logoutBtnCss,
  profileTabsWrapperCss,
  tabContainerCss,
  tabCss
} from "@/modules/profile-module/profile-tabs/styles";
import { BsBoxArrowInRight } from "react-icons/bs";
export default function ProfileTabs() {
  const tabsMapper = (tab: string) => {
    return (
      <span key={tab} css={tabCss}>
        {tab}
      </span>
    );
  };
  return (
    <div css={profileTabsWrapperCss}>
      <div css={tabContainerCss}>{tabsHeading.map(tabsMapper)}</div>
      <button css={logoutBtnCss}>
        <BsBoxArrowInRight />
        <span>Log Out</span>
      </button>
    </div>
  );
}
