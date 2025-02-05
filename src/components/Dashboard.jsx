import React from "react";
import styled from "styled-components";
const StBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StMyPokemonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: red;
  border: 2px solid lightgray;
  border-style: dashed;
  border-radius: 10px;
  width: 120px;
  min-width: 120px;
  height: 120px;
  background-image: url("https://i.pinimg.com/originals/f5/54/89/f5548916ca86b30f7b8f418e4c5c6794.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ebebeb;
`;
//포멧몬 있을때
const StMyPokemonBox1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Dashboard = (props) => {
  const { myPokemon, setMyPokemon } = props;
  let emptyArr = Array(6).fill(0);
  // console.log(myPokemon[0]);
  let newArr = emptyArr.map((e, i) => {
    // console.log(e);
    return myPokemon[i] || 0;
  });
  // console.log(newArr);

  const removePokemon = (id) => {
    const removePokemon = myPokemon.filter((data) => data.id !== id);
    setMyPokemon(removePokemon);
  };

  return (
    <div>
      <h2>나만의 포켓몬 6마리 지정</h2>

      <div>
        <StBox>
          {newArr.map((data) =>
            data === 0 ? (
              <StMyPokemonBox />
            ) : (
              <div key={data.id}>
                <div>
                  <img src={data.img_url} />
                </div>
                <div>{data.korean_name}</div>
                <div>No. {data.id}</div>
                <button onClick={() => removePokemon(data.id)}>삭제</button>
              </div>
            )
          )}
        </StBox>
      </div>
    </div>
  );
};

export default Dashboard;
