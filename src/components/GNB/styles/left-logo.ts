import styled from "styled-components";

export const GNBLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 15px 0;
    height: 60px;
    width: 100%;
    padding: 15px 20px;
  }

  @media (max-width: 767px) {
    height: 60px;
    width: 100%;
    padding: 15px 20px;
  }
`;

export const MainLogo = styled.div`
  display: flex;
`;

export const HamBurger = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin-top: -2px;
  margin-right: 15px;

  div {
    height: 2px;
    width: 1.1rem;
    content: "";
    background-color: #000;
    margin: 4px auto;
    border-radius: 1px;
  }
`;

export const Logo = styled.a`
  position: relative;
  float: left;

  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const JoinButton = styled.button`
  display: none;
  color: #36f;
  font-size: 14px;
  line-height: 32px;
  height: 34px;
  border: 1px solid #36f;
  border-radius: 17px;
  padding: 0 14px;
  background-color: inherit;

  @media (min-width: 768px) and (max-width: 991px) {
    display: inline-block;
  }

  @media (max-width: 767px) {
    display: inline-block;
  }
`;
