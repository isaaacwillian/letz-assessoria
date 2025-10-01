import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  background-color: #050605;
  font-family: Karma;
  font-style: bold;
  font-weight: 700;
  opacity: 0.9;

  h1 {
    background: linear-gradient(90deg, rgba(162, 255, 128, 1) 40%, rgba(107, 208, 255, 1) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 75px;
  }

  h3 {
    font-size: 20px;
    color: #44ff00;
  }

  p {
    max-width: 545px;
    margin-bottom: 50px;
  }

  span {
    color: #44ff00;
  }
`;

export const RunnerBackground = styled.img`
  position: absolute;
  width: 90%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  z-index: -1;
`;

export const LetzLogo = styled.img`
  width: 255px;
  height: 76px;
  margin: 88px 0px;
`;

export const BuyButton = styled.button`
  background-color: #44ff00;
  border-radius: 25px;
  width: 372px;
  height: 64px;
  font-size: 22px;
  font-family: Karma;
  font-weight: 700;
  line-height: 68px; /* igual à altura */
`;
