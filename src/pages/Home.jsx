import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://c0.klipartz.com/pngpicture/1012/665/gratis-png-cielo-azul-nube-fondo-azul-s.png");
  background-size: cover;
`;

const StButton = styled.button`
  background-color: #3d4e92;
  color: white;
  width: 180px;
  height: 40px;
  border: 2px solid white;
  border-radius: 7px;
  font-size: 1rem;

  &:hover {
    background-color: #090a23;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <StBody>
      {/* <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
          width={200}
        />
      </div> */}
      <div>
        <img
          src="https://cdnx.jumpseller.com/yetiplantillas/image/37068472/resize/540/540?1688140994"
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
