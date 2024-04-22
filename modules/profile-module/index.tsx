import ComponentWrapper from "@/components/component-wrapper";
import ProfileForm from "@/modules/profile-module/profile-form";
import ProfileTabs from "@/modules/profile-module/profile-tabs";
import { profileHeadingCss } from "@/modules/profile-module/styles";
import { commonPageWrapperCss } from "@/styles/common-styles";

export default function ProfileModule() {
  return (
    <ComponentWrapper tag="section" wrapperStyles={commonPageWrapperCss}>
      <h1 css={profileHeadingCss}>Hey Haysam 👋</h1>
      <ProfileTabs />
      <ProfileForm />
    </ComponentWrapper>
  );
}
