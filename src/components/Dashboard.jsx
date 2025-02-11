import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StDashBoardBackgrounColor = styled.div`
  background-image: url("https://c0.klipartz.com/pngpicture/1012/665/gratis-png-cielo-azul-nube-fondo-azul-s.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const StImgBox = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-gap: 1rem;
  justify-content: center;
`;

const StMyPokemonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-gap: 1rem;
  color: red;
  border: 2px solid lightgray;
  border-style: dashed;
  border-radius: 10px;
  width: 150px;
  min-width: 150px;
  height: 192px;
  background-image: url("https://i.pinimg.com/originals/f5/54/89/f5548916ca86b30f7b8f418e4c5c6794.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ebebeb;
`;

const Dashboard = () => {
  // [*] useSelector 사용
  const myPokemon = useSelector((state) => state.pokemonData);
  const navigate = useNavigate();

  let emptyArr = Array(6).fill();

  let newArr = emptyArr.map((e, i) => {
    return myPokemon[i] || 0;
  });

  return (
    <StDashBoardBackgrounColor>
      <StImgBox onClick={() => navigate(`/`)}>
        <img
          src="https://www.freeiconspng.com/uploads/pokemon-png-14.png"
          height={200}
        />
      </StImgBox>

      <div>
        <StBox>
          {newArr.map((card) =>
            card === 0 ? (
              <StMyPokemonBox />
            ) : (
              <PokemonCard key={card.id} card={card} text="삭제" />
            )
          )}
        </StBox>
      </div>
    </StDashBoardBackgrounColor>
  );
};

export default Dashboard;
