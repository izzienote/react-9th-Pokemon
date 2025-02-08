import React from "react";
import Router from "./shared/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { PokemonProvider } from "./contexts/PokemonContext";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
  return (
    <>
      <PokemonProvider>
        <GlobalStyle />
        <Router />
      </PokemonProvider>
    </>
  );
};

export default App;
