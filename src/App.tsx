import React, { Fragment } from "react";
import GlobalNav from "./components/GNB/GlobalNav";

import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalNav />
    </Fragment>
  );
};

export default App;
