import React, { Fragment } from "react";
import Carousel from "./components/Carousel/Carousel";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Carousel />
    </Fragment>
  );
};

export default App;
