import React from "react";
import styled from "styled-components";

const LeftLogo = () => {
  return (
    <GNBLeftWrapper>
      <HamBurger>
        <div />
        <div />
        <div />
      </HamBurger>
      <Logo>wanted</Logo>
    </GNBLeftWrapper>
  );
};

const GNBLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HamBurger = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin-right: 8px;

  div {
    height: 2px;
    width: 1.1rem;
    content: "";
    background-color: #000;
    margin: 4px auto;
  }
`;

const Logo = styled.h3`
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export default LeftLogo;
