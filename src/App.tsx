import React, { Fragment } from "react";

import GlobalNav from "components/GNB/GlobalNav";
import Carousel from "./components/Carousel/Carousel";
import { DUMMY_SLIDER } from "utils/index";

import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalNav />
      <Main>
        <Carousel slides={DUMMY_SLIDER} />
      </Main>
    </Fragment>
  );
};

const Main = styled.main`
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
`;

export default App;
