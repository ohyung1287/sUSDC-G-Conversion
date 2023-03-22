import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Page, ModalProvider, RoutesProvider } from "components";

// eslint-disable-next-line
declare let window: any;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Page>
        <RoutesProvider />
      </Page>
      <ModalProvider />
    </BrowserRouter>
  );
};

export default React.memo(App);
