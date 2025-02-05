import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #212569;
`;

const StButton = styled.button`
  background-color: #a80d0d;
  color: white;
  width: 180px;
  height: 40px;
  border: 2px solid white;
  border-radius: 7px;
  font-size: 1rem;

  &:hover {
    background-color: #6b0202;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <StBody>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
          width={600}
        />
      </div>
      <StButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </StButton>
    </StBody>
  );
};

export default Home;
