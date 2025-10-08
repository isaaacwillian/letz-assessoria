import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const Title = styled.h1`
  font-family: Karma, sans-serif;
  font-size: calc(20px + 3.5vw);
  background: linear-gradient(90deg, rgba(162, 255, 128, 1) 40%, rgba(107, 208, 255, 1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Content = styled.div<{ $titleWidth: number }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Karma;
  font-weight: 700;
  opacity: 0.9;
  text-align: center;

  width: ${({ $titleWidth }) => $titleWidth}px;
  max-width: 100%;

  @media (max-width: 500px) {
    width: 100%;
    font-family: Montserrat, sans-serif;

    p {
      margin-top: 18px;
    }
  }

  h3 {
    font-size: 20px;
    color: #44ff00;
  }

  p {
    margin-bottom: 50px;
    font-weight: 400;
    font-style: bold;
    text-align: justify;
  }

  span {
    color: #44ff00;
  }
`;

export const RunnerBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  z-index: -1;

  @media (max-width: 600px) {
    top: -30px;
  }
`;

export const LetzLogo = styled.img`
  width: 255px;
  height: 76px;
  margin: 88px 0px;
  @media (max-width: 420px) {
    margin-top: 53px;
    margin-bottom: 120px;
  }
`;

export const BuyButton = styled.button`
  background-color: #44ff00;
  border-radius: 25px;
  width: 100%;
  height: 64px;
  font-size: 22px;
  font-family: Karma;
  font-weight: 700;
  line-height: 68px;
  max-width: 372px;
  @media (max-width: 420px) {
    max-width: 231px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }
`;
