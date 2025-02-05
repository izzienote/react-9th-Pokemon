import React from "react";
import MOCK_DATA from "./MOCK_DATA";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const StBox = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  margin-top: 50px;
`;

const PokemonList = (props) => {
  const { myPokemon, setMyPokemon } = props;
  return (
    <StBox>
      <PokemonCard
        MOCK_DATA={MOCK_DATA}
        setMyPokemon={setMyPokemon}
        myPokemon={myPokemon}
      />
    </StBox>
  );
};

export default PokemonList;
