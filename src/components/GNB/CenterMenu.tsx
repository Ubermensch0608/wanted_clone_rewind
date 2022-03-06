import React, { useState } from "react";
import { DUMMY_MENU } from "utils";

import * as Styled from "./styles/center-menu";

const CenterMenu = () => {
  const [clickedMenu, setClickedMenu] = useState<number>();

  const selectNumberHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const selectedMenuId = +event.currentTarget.id;

    setClickedMenu(selectedMenuId);
  };

  return (
    <Styled.Contents>
      {DUMMY_MENU.map((data, index) => (
        <Styled.Content
          key={data.id}
          id={index.toString()}
          isSelected={clickedMenu === index}
          onClick={selectNumberHandler}
        >
          <a href={`/${data.content}`}>{data.content}</a>
        </Styled.Content>
      ))}
    </Styled.Contents>
  );
};

export default CenterMenu;
