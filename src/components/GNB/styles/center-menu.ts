import styled from "styled-components";

export const Contents = styled.ul`
  height: inherit;
  text-align: center;
  margin: 0;

  @media (min-width: 992px) and (max-width: 1100px) {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    margin-right: 30px;
  }

  @media (max-width: 767px) {
    text-align: left;
  }
`;

export const Content = styled.li<{ isSelected: boolean }>`
  height: inherit;
  display: inline-block;

  font-weight: 600;
  font-size: 13px;

  box-shadow: ${(props) => props.isSelected && " inset 0 -2px #258bf7; "};
  &:hover {
    box-shadow: inset 0 -2px rgb(221, 221, 221);
  }

  &:nth-child(1) {
    @media (min-width: 1200px) {
      display: none;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      display: none;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }
  }

  &:not(:nth-child(1), :nth-child(2), :nth-child(3)) {
    @media (max-width: 767px) {
      display: none;
    }
  }

  a {
    position: relative;
    vertical-align: middle;
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    text-decoration: none;

    @media (min-width: 992px) and (max-width: 1100px) {
      font-size: 13px;
      padding: 15px 0;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 13px;
      padding: 11px 10px 19px;
    }

    @media (max-width: 767px) {
      padding: 11px 10px 19px;
    }

    &:active,
    &:link,
    &:visited {
      color: #000;
    }
  }
`;
