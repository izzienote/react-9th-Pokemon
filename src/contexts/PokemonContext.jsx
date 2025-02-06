import { createContext, useState } from "react";
import MOCK_DATA from "../components/MOCK_DATA";
// [0] 6마리 나의 포켓몬 state
export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [myPokemon, setMyPokemon] = useState([]);

  // [1] 포켓몬 추가 핸들러
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
  // [2] 포켓몬 삭제 핸들러
  const removePokemon = (id) => {
    const removePokemon = myPokemon.filter((card) => card.id !== id);
    setMyPokemon(removePokemon);
  };

  return (
    <PokemonContext.Provider
      value={{ myPokemon, setMyPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
