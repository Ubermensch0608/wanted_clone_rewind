import React from "react";
import CenterMenu from "./CenterMenu";
import LeftLogo from "./LeftLogo";
import RightAside from "./RightAside";

import styled from "styled-components";

const GlobalNav = () => {
  return (
    <GNBWrapper>
      <NavigationBar>
        <LeftLogo />
        <CenterMenu />
        <RightAside />
      </NavigationBar>
    </GNBWrapper>
  );
};

const GNBWrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavigationBar = styled.nav`
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
`;

export default GlobalNav;
