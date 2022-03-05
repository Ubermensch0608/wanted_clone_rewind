import CenterMenu from "./CenterMenu";
import LeftLogo from "./LeftLogo";
import RightAside from "./RightAside";

import * as Styled from "./styles/global-nav";

const GlobalNav = () => {
  return (
    <Styled.GNBWrapper>
      <Styled.GNB>
        <Styled.NavigationBar>
          <LeftLogo />
          <CenterMenu />
          <RightAside />
        </Styled.NavigationBar>
      </Styled.GNB>
    </Styled.GNBWrapper>
  );
};

export default GlobalNav;
