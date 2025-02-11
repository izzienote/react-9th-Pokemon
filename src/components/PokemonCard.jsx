import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/pokemonSlice";
import Swal from "sweetalert2";

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
  // [*] dispatch, useSelector 사용
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.pokemonData);
  // console.log(data);

  //useNavigate 선언
  const navigate = useNavigate();

  // 카드 클릭 시, navigate로 경로 설정하기
  const handleCardDetail = (id) => {
    navigate(`/dex/detail?id=${id}`);
  };

  const addPokemonBtn = (card) => {
    if (myPokemon.length >= 6) {
      Swal.fire("6마리까지만 추가할 수 있습니다!");
      return;
    }

    if (myPokemon.some((pokemon) => pokemon.id === card.id)) {
      Swal.fire("이미 추가된 포켓몬입니다!");
      return;
    }

    // [UI 라이브러리 적용] _ 추가
    Toast.fire({
      icon: "success",
      title: "포켓몬을 잡았습니다!",
    });

    return dispatch(addPokemon(card));
  };

  const removePokemonBtn = (card) => {
    // [UI 라이브러리 적용] _ 삭제
    Toast.fire({
      icon: "success",
      title: "포켓몬을 놓아주었습니다!",
    });
    return dispatch(removePokemon(card));
  };

  // [UI 라이브러리 적용]
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
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
            return addPokemonBtn(card);
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
            return removePokemonBtn(card);
          }}
        >
          {text}
        </StButton>
      )}
    </StCardContainer>
  );
};

export default PokemonCard;
