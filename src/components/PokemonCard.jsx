import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const PokemonCard = (props) => {
  const { card, addPokemon, text, removePokemon } = props;

  //useNavigate 선언
  const navigate = useNavigate();

  // 카드 클릭 시, navigate로 경로 설정하기
  const handleCardDetail = (id) => {
    navigate(`/dex/detail?id=${id}`);
  };

  return (
    <div onClick={() => handleCardDetail(card.id)}>
      <StCardContainer key={card.id}>
        <div>
          <img src={card.img_url} />
        </div>
        <div>{card.korean_name}</div>
        <div>No. {card.id}</div>
        {text === "추가" ? (
          <StButton
            onClick={(e) => {
              e.stopPropagation();
              return addPokemon(card.id);
            }}
          >
            {text}
          </StButton>
        ) : (
          <StButton
            onClick={(e) => {
              e.stopPropagation();
              return removePokemon(card.id);
            }}
          >
            {text}
          </StButton>
        )}
      </StCardContainer>
    </div>
  );
};

export default PokemonCard;
