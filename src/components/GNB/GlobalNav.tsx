import React from "react";
import CenterMenu from "./CenterMenu";
import LeftLogo from "./LeftLogo";
import RightAside from "./RightAside";

import styled from "styled-components";

const GlobalNav = () => {
  return (
    <NavigationBar>
      <LeftLogo />
      <CenterMenu />
      <RightAside />
    </NavigationBar>
  );
};

const NavigationBar = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
`;

export default GlobalNav;
