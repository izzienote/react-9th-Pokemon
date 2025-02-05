import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";
import styled from "styled-components";
const Stdashboard = styled.div`
  text-align: center;
`;
const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  return (
    <div>
      <Stdashboard>
        <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      </Stdashboard>
      <PokemonList myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
    </div>
  );
};

export default Dex;
