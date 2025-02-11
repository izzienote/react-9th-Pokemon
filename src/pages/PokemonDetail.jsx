import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import POKENMON_COLOR from "../data/POKEMON_COLOR";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/pokemonSlice";

const StContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgb(255, 255, 255, 0.3);
  border: none;
  border-radius: 250px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const StBox = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  background: ${({ $types }) =>
    $types.length > 1
      ? `linear-gradient(${POKENMON_COLOR[$types[0]] || "#ffffff"}, ${
          POKENMON_COLOR[$types[1]] || "#ffffff"
        })`
      : POKENMON_COLOR[$types[0]] || "#ffffff"};
`;

const StH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const StButton = styled.button`
  color: #ffffff;
  background-color: #3f3f3f;
  border: none;
  border-radius: 5px;
  width: 180px;
  height: 30px;
  margin-top: 50px;

  &:hover {
    scale: 1.05;
  }
`;

const StPageMoveBtn = styled.button`
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  margin-left: 20px;
  margin-right: 20px;
  color: grey;

  &:hover {
    color: black;
  }
`;

const StAddRemoveButton = styled.button`
  border: 5px solid ${(props) => props.$btnColor};
  border-radius: 20px;
  color: black;
  width: 200px;
  height: 40px;
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: transparent;
  font-weight: 800;

  &:hover {
    scale: 1.03;
  }
`;

const PokemonDetail = () => {
  // [*] dispatch, useSelector 사용
  const myPokemon = useSelector((state) => state.pokemonData);
  const dispatch = useDispatch();

  const [params] = useSearchParams();
  const pokemonId = params.get("id");

  // [뒤로가기, 이전 및 다음 몬스터 이동] useNavigate 사용
  const navigate = useNavigate();

  const seletedPokemonInfo = MOCK_DATA.find(
    (pokemon) => pokemon.id === Number(pokemonId)
  );
  // [*] myPokemon에 선택된 포켓몬이 있는지 true/ false로 반환하는 변수 선언
  const isPokemonInclude = myPokemon.some(
    (pokemon) => pokemon.id === seletedPokemonInfo.id
  );
  // [이전포켓몬 이동]
  const goToNext = (id) => {
    if (id === MOCK_DATA.length) {
      alert("마지막 포켓몬입니다");
      return;
    }
    navigate(`/dex/detail?id=${id + 1}`);
  };
  // [다음포켓몬 이동]
  const goToPrev = (id) => {
    if (id === 1) {
      alert("첫번째 포켓몬입니다");
      return;
    }

    navigate(`/dex/detail?id=${id - 1}`);
  };

  const addPokemonBtn = (card) => {
    return dispatch(addPokemon(card));
  };

  const removePokemonBtn = (card) => {
    return dispatch(removePokemon(card));
  };

  return (
    <StBox $types={seletedPokemonInfo.types}>
      <StContainer>
        <div key={seletedPokemonInfo.id}>
          <div>
            <img src={seletedPokemonInfo.img_url} height={200} />
          </div>
          <StH2>{seletedPokemonInfo.korean_name}</StH2>
          <p>타입 : {seletedPokemonInfo.types.join(", ")}</p>
          <br />
          <p>{seletedPokemonInfo.description}</p>
          <div>
            {isPokemonInclude ? (
              <StAddRemoveButton
                $btnColor="red"
                $hoverColor="darkred"
                onClick={() => removePokemonBtn(seletedPokemonInfo)}
              >
                포켓몬 도감에서 삭제하기
              </StAddRemoveButton>
            ) : (
              <StAddRemoveButton
                $btnColor="#6d996f"
                $hoverColor="darkgreen"
                onClick={() => addPokemonBtn(seletedPokemonInfo)}
              >
                포켓몬 도감에 추가하기
              </StAddRemoveButton>
            )}
          </div>
          <StPageMoveBtn
            style={{
              visibility: seletedPokemonInfo.id <= 1 ? "hidden" : "visible",
            }}
            onClick={() => goToPrev(seletedPokemonInfo.id)}
          >
            ˂
          </StPageMoveBtn>
          <StButton onClick={() => navigate(`/dex`)}>
            포켓몬 도감으로 돌아가기
          </StButton>
          <StPageMoveBtn
            style={{
              visibility:
                seletedPokemonInfo.id >= MOCK_DATA.length
                  ? "hidden"
                  : "visible",
            }}
            onClick={() => goToNext(seletedPokemonInfo.id)}
          >
            ˃
          </StPageMoveBtn>
        </div>
      </StContainer>
    </StBox>
  );
};

export default PokemonDetail;
