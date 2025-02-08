import { createContext, useState } from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import Swal from "sweetalert2";

// [0] 6마리 나의 포켓몬 state
export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [myPokemon, setMyPokemon] = useState(
    JSON.parse(localStorage.getItem("myPokemon")) || []
  );

  // [1] 포켓몬 추가 핸들러
  const addPokemon = (id) => {
    if (myPokemon.length >= 6) {
      Swal.fire("6마리까지만 추가할 수 있습니다!");
      return;
    }

    if (myPokemon.some((pokemon) => pokemon.id === id)) {
      Swal.fire("이미 추가된 포켓몬입니다!");
      return;
    }
    const addedPokemon = MOCK_DATA.filter((card) => card.id === id);
    // [UI 라이브러리 적용] _ 추가
    Toast.fire({
      icon: "success",
      title: "포켓몬을 잡았습니다!",
    });
    setMyPokemon((prev) => [...prev, ...addedPokemon]);
    localStorage.setItem(
      "myPokemon",
      JSON.stringify([...myPokemon, ...addedPokemon])
    );
  };
  // [2] 포켓몬 삭제 핸들러
  const removePokemon = (id) => {
    // [UI 라이브러리 적용] _ 삭제
    Toast.fire({
      icon: "success",
      title: "포켓몬을 놓아주었습니다!",
    });
    const removePokemon = myPokemon.filter((card) => card.id !== id);
    setMyPokemon(removePokemon);
    localStorage.setItem("myPokemon", JSON.stringify(removePokemon));
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
    <PokemonContext.Provider
      value={{ myPokemon, setMyPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
