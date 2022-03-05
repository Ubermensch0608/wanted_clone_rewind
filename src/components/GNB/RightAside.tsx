import { SearchIcon } from "assets/index";
import * as Styled from "./styles/right-aside";

const RightAside = () => {
  return (
    <Styled.AsideWrapper>
      <Styled.Aside>
        <Styled.AsideItem>
          <Styled.SearchButton>
            <SearchIcon />
          </Styled.SearchButton>
        </Styled.AsideItem>
        <Styled.AsideItem>
          <Styled.LoginButton>회원가입/로그인</Styled.LoginButton>
        </Styled.AsideItem>
        <Styled.AsideServiceItem>
          <Styled.Service href="/">기업 서비스</Styled.Service>
        </Styled.AsideServiceItem>
      </Styled.Aside>
    </Styled.AsideWrapper>
  );
};

export default RightAside;
