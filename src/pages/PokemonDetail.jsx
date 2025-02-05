import React from "react";
import MOCK_DATA from "../components/MOCK_DATA";
import styled from "styled-components";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const StBox = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StButton = styled.button`
  color: white;
  background-color: black;
  border: nonne;
  border-radius: 5px;
  width: 100px;
  height: 30px;

  &:hover {
    scale: 1.05;
  }
`;

const PokemonDetail = () => {
  const [params] = useSearchParams();
  // console.log(params);
  const pokemonId = params.get("id");
  // console.log(pokemonId);

  //뒤로가기 -1을 해주기 위해 useNavigate 사용
  const navigate = useNavigate();

  const seletedPokemonInfo = MOCK_DATA.find(
    (pokemon) => pokemon.id === Number(pokemonId)
  );

  console.log(seletedPokemonInfo);

  return (
    <StBox>
      <div key={seletedPokemonInfo.id}>
        <div>
          <img src={seletedPokemonInfo.img_url} height={200} />
        </div>
        <h2>{seletedPokemonInfo.korean_name}</h2>
        <p>타입 : {seletedPokemonInfo.types.join(", ")}</p>
        <p>{seletedPokemonInfo.description}</p>
        <StButton onClick={() => navigate(-1)}>뒤로 가기</StButton>
      </div>
    </StBox>
  );
};

export default PokemonDetail;
