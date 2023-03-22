import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import Web3Provider from "components/Web3Provider/Web3Provider";

import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root") as HTMLDivElement;
// @ts-ignore
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Suspense fallback={null}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Web3Provider>
        <App />
      </Web3Provider>
    </ChakraProvider>
  </Suspense>
);
