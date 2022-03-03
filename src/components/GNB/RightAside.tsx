import React from "react";
import searchIcon from "assets/search-icon.png";
import styled from "styled-components";

const RightAside = () => {
  return (
    <AsideWrapper>
      <SearchLogin>
        <SearchIcon />
        <button>회원가입/로그인</button>
      </SearchLogin>
      <Service>
        <button>기업 서비스</button>
      </Service>
    </AsideWrapper>
  );
};

const AsideWrapper = styled.aside`
  display: flex;

  width: 50%;
`;
const SearchLogin = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 991px) {
    width: auto;
    margin-right: 15px;
  }

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;

    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const SearchIcon = styled.div`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 5px;
  transform: rotate(270deg);
  margin-right: 8px;

  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Service = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

  &::before {
    position: relative;
    right: 10px;
    display: block;
    content: "";
    height: 10px;
    width: 1px;
    background-color: #e1e2e3;
  }

  button {
    height: 30px;
    padding: 0 10px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    background-color: inherit;
    color: #666;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
  }
`;
export default RightAside;
