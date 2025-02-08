import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Stdashboard = styled.div`
  text-align: center;
`;
const Dex = () => {
  return (
    <div>
      <Stdashboard>
        <Dashboard />
      </Stdashboard>
      <PokemonList />
    </div>
  );
};

export default Dex;
