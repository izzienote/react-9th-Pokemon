import MOCK_DATA from "../data/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const StContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  padding-top: 50px;
`;

const PokemonList = () => {
  return (
    <StContainer>
      {MOCK_DATA.map((card) => {
        return <PokemonCard key={card.id} card={card} text="추가" />;
      })}
    </StContainer>
  );
};

export default PokemonList;
