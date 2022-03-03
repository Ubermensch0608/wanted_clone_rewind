import styled from "styled-components";

const DUMMY_MENU = [
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
        <li key={data.id}>
          <a href={`/${data.content}`}>{data.content}</a>
        </li>
      ))}
    </Contents>
  );
};

const Contents = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  li {
    font-weight: 600;
    font-size: 13px;
  }

  a {
    vertical-align: middle;
    text-decoration: none;
    padding: 15px 0;

    &:active,
    &:link,
    &:visited {
      color: #000;
    }
  }
`;

export default CenterMenu;
