import { DUMMY_MENU } from "utils";

import * as Styled from "./styles/center-menu";

const CenterMenu = () => {
  return (
    <Styled.Contents>
      {DUMMY_MENU.map((data) => (
        <Styled.Content key={data.id}>
          <a href={`/${data.content}`}>{data.content}</a>
        </Styled.Content>
      ))}
    </Styled.Contents>
  );
};

export default CenterMenu;
