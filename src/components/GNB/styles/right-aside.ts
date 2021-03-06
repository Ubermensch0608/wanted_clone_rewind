import styled from "styled-components";

export const AsideWrapper = styled.aside`
  height: 100%;
  padding: 10px 0;

  @media (max-width: 767px) {
    padding: 14px 0;
  }
`;

export const Aside = styled.ul`
  height: 100%;
  margin: 0;

  @media (max-width: 767px) {
    margin-top: -5px;
    margin-right: 10px;
  }
`;

export const AsideItem = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  > * {
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
  }

  button {
    background: inherit;
    border: none;
  }

  @media (min-width: 1200px) {
    > * {
      padding: 0 10px;
    }
  }
`;

export const SearchButton = styled.button`
  position: relative;
  margin-top: 5px;

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0;
  }
`;

export const ElseButton = styled.button`
  position: relative;
  margin-top: 5px;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  margin-right: 6px;

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-right: 0;
    padding: 0 3px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const AsideServiceItem = styled(AsideItem)`
  display: inline-flex;

  &:before {
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
    box-sizing: border-box;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Service = styled.a`
  display: inline-block;
  vertical-align: bottom;

  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;
  text-decoration: none;

  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 0;
  }
`;
