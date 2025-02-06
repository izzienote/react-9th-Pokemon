import React from "react";
import MOCK_DATA from "../components/MOCK_DATA";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

const StBox = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  /* background-color: ${(props) => props.backgroundColor}; */
  background: ${(props) => props.backgroundColor};
`;

const StH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const StButton = styled.button`
  color: white;
  background-color: black;
  border: nonne;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  margin-top: 50px;

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

  // 포켓몬 디테일 페이지 배경색 설정
  // 문제1. 타입이 2가지일 경우, 색상을 반반 표현하고 싶음(그라데이션으로)

  const getBackgroundColor = () => {
    const getcolor = seletedPokemonInfo.types;

    if (getcolor.length > 1) {
      return "linear-gradient(#a9d8ff, #F5F58C)";
    }

    switch (true) {
      case getcolor.some((e) => e === "물"):
        return "#a9d8ff;";
        break;
      case getcolor.some((e) => e === "불꽃"):
        return "#f5a68c;";
        break;
      case getcolor.some((e) => e === "전기"):
        return "#F5F58C;";
        break;
      case getcolor.some((e) => e === "독"):
        return "#b68cf5;";
        break;
      case getcolor.some((e) => e === "노말"):
        return "#ffffff;";
        break;
      case getcolor.some((e) => e === "풀"):
        return "#8cf5bd;";
        break;
      default:
        break;
    }
    return getcolor;
  };

  return (
    <StBox backgroundColor={getBackgroundColor}>
      <div key={seletedPokemonInfo.id}>
        <div>
          <img src="" />
        </div>
        <div>
          <img src={seletedPokemonInfo.img_url} height={200} />
        </div>
        <StH2>{seletedPokemonInfo.korean_name}</StH2>
        <p>타입 : {seletedPokemonInfo.types.join(", ")}</p>
        <br />
        <p>{seletedPokemonInfo.description}</p>
        <StButton onClick={() => navigate(-1)}>뒤로 가기</StButton>
      </div>
    </StBox>
  );
};

export default PokemonDetail;
