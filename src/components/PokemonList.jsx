import React from "react";
import MOCK_DATA from "./MOCK_DATA";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  padding-top: 50px;
`;

const PokemonList = (props) => {
  const { myPokemon, setMyPokemon } = props;

  const addPokemon = (id) => {
    if (myPokemon.length >= 6) {
      alert("포켓몬은 6마리까지만 추가할 수 있습니다!");
      return;
    }

    if (myPokemon.some((pokemon) => pokemon.id === id)) {
      alert("이미 추가된 포켓몬입니다!");
      return;
    }
    const addedPokemon = MOCK_DATA.filter((card) => card.id === id);
    setMyPokemon((prev) => [...prev, ...addedPokemon]);
  };

  return (
    <StContainer>
      {MOCK_DATA.map((card) => {
        return (
          <PokemonCard
            key={card.id}
            card={card}
            addPokemon={addPokemon}
            text="추가"
          />
        );
      })}
    </StContainer>
  );
};

export default PokemonList;
