import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import { PokemonProvider } from "../contexts/PokemonContext";

const Stdashboard = styled.div`
  text-align: center;
`;
const Dex = () => {
  return (
    <PokemonProvider>
      <Stdashboard>
        <Dashboard />
      </Stdashboard>
      <PokemonList />
    </PokemonProvider>
  );
};

export default Dex;
