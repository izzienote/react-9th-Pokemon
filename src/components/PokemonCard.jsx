import React from "react";
import styled from "styled-components";

const StCardContainer = styled.div`
  text-align: center;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
`;

const StButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 25px;
  margin-bottom: 15px;
  margin-top: 15px;

  &:hover {
    background-color: darkred;
  }
`;

const StContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
`;

const PokemonCard = (props) => {
  const { MOCK_DATA, myPokemon, setMyPokemon } = props;

  // console.log(MOCK_DATA);

  const addPokemon = (id) => {
    if (myPokemon.length >= 6) {
      alert("포켓몬은 6마리까지만 추가할 수 있습니다!");
      return;
    }

    if (myPokemon.some((pokemon) => pokemon.id === id)) {
      alert("이미 추가된 포켓몬입니다!");
      return;
    }
    const addedPokemon = MOCK_DATA.filter((data) => data.id === id);
    setMyPokemon((prev) => [...prev, ...addedPokemon]);
  };

  // console.log(myPokemon);

  return (
    <StContainer>
      {MOCK_DATA.map((data) => (
        <StCardContainer key={data.id}>
          <div>
            <img src={data.img_url} />
          </div>
          <div>{data.korean_name}</div>
          <div>No. {data.id}</div>
          <StButton onClick={() => addPokemon(data.id)}>추가</StButton>
        </StCardContainer>
      ))}
    </StContainer>
  );
};

export default PokemonCard;
