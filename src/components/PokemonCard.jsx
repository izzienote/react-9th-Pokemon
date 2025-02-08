import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../contexts/PokemonContext";

const StCardContainer = styled.div`
  text-align: center;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;

  &:hover {
    scale: 1.03;
  }
`;

const StButton = styled.button`
  background-color: ${(props) => props.$btnColor};
  color: white;
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 25px;
  margin-bottom: 15px;
  margin-top: 15px;

  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }
`;

const PokemonCard = ({ card, text }) => {
  const { addPokemon, removePokemon } = useContext(PokemonContext);

  //useNavigate 선언
  const navigate = useNavigate();

  // 카드 클릭 시, navigate로 경로 설정하기
  const handleCardDetail = (id) => {
    navigate(`/dex/detail?id=${id}`);
  };

  return (
    // <Link
    //   style={{ textDecoration: "none", color: "black" }}
    //   to={`/dex/detail?id=${card.id}`}
    // >
    <StCardContainer onClick={() => handleCardDetail(card.id)}>
      <div>
        <img src={card.img_url} />
      </div>
      <div>{card.korean_name}</div>
      <div>No. {card.id}</div>
      {text === "추가" ? (
        <StButton
          $btnColor="#6d996f"
          $hoverColor="darkgreen"
          onClick={(e) => {
            e.stopPropagation();
            return addPokemon(card.id);
          }}
        >
          {text}
        </StButton>
      ) : (
        <StButton
          $btnColor="red"
          $hoverColor="darkred"
          onClick={(e) => {
            e.stopPropagation();
            return removePokemon(card.id);
          }}
        >
          {text}
        </StButton>
      )}
    </StCardContainer>
    // </Link>
  );
};

export default PokemonCard;
