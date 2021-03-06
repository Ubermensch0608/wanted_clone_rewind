import styled from "styled-components";

export const GNBWrapper = styled.div`
  position: fixed;
  padding-right: initial;
  background-color: #fff;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

export const GNB = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;

  @media (min-width: 1200px) {
    margin: 0 auto;
    height: 50px;
    width: 87.72%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 0 auto;
    height: 50px;
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
    margin: 0 auto;
    width: 90%;
  }

  @media (max-width: 767px) {
    height: 110px;
  }
`;

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
