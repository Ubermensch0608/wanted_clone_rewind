import React, { Fragment } from "react";
import Carousel from "./components/Carousel/Carousel";
import GlobalStyle from "./GlobalStyle";
import { DUMMY_SLIDER } from "utils/index";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Carousel slides={DUMMY_SLIDER} />
    </Fragment>
  );
};

export default App;
