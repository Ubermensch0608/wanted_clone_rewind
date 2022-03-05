import styled from "styled-components";

const DUMMY_MENU = [
  {
    id: "m0",
    content: "홈",
  },
  {
    id: "m1",
    content: "채용",
  },
  {
    id: "m2",
    content: "이벤트",
  },
  {
    id: "m3",
    content: "직군별 연봉",
  },
  {
    id: "m4",
    content: "이력서",
  },
  {
    id: "m5",
    content: "커뮤니티",
  },
  {
    id: "m6",
    content: "프리랜서",
  },
  {
    id: "m7",
    content: "AI  합격예측",
  },
];

const CenterMenu = () => {
  return (
    <Contents>
      {DUMMY_MENU.map((data) => (
        <Content key={data.id}>
          <a href={`/${data.content}`}>{data.content}</a>
        </Content>
      ))}
    </Contents>
  );
};

const Contents = styled.ul`
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

const Content = styled.li`
  height: inherit;
  display: inline-block;

  font-weight: 600;
  font-size: 13px;

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

export default CenterMenu;
