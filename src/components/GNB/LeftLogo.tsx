import * as Styled from "./styles/left-logo";

const LeftLogo = () => {
  return (
    <Styled.GNBLeftWrapper>
      <Styled.MainLogo>
        <Styled.HamBurger>
          <div />
          <div />
          <div />
        </Styled.HamBurger>
        <Styled.Logo>wanted</Styled.Logo>
      </Styled.MainLogo>
      <Styled.JoinButton>회원가입 하기</Styled.JoinButton>
    </Styled.GNBLeftWrapper>
  );
};

export default LeftLogo;
