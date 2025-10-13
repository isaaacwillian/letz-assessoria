import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  margin-top: 40px;
  padding-bottom: 44px;
  background: linear-gradient(180deg, #000000 66.98%, #323431 127.71%);
`;

export const Content = styled.div`
  max-width: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 28px;

  h1 {
    font-weight: 800;
    font-size: clamp(24px, 5vw, 48px);
    text-align: center;
    span {
      background: linear-gradient(90deg, #57e880 0%, #6bd0ff 150%);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .subtitle {
    font-weight: 800;
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 53px;
  }

  @media (max-width: 768px) {
    .subtitle {
      font-weight: 400;
      margin-bottom: 37px;
      margin-top: 30px;
    }
  }
`;

export const ExpertsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  gap: 37px;
`;

export const Expert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 406px;
`;

export const ExpertCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: clamp(28px, 5vw, 80px);
  width: clamp(200px, 40vw, 296px);
  height: clamp(200px, 40vw, 296px);

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 25px;
    box-shadow: inset 0 0 3px 4px rgba(107, 208, 255, 0.7);
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
    border-radius: 25px;
    box-shadow: 0 0 3px 1px rgba(107, 208, 255, 0.7);
  }

  p {
    text-align: center;
    position: absolute;
    bottom: clamp(-40px, -5vw, -20px);
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #4ba8d3 -26.1%, #44ff00 122.4%);
    width: clamp(170px, 30vw, 263px);
    height: clamp(30px, 8vw, 60px);
    font-size: clamp(10px, 2vw, 13.5px);
    padding: 10px;
    border-radius: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
  }
`;

export const ExpertInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 800;
    font-size: clamp(18px, 4vw, 32px);
    text-align: center;
  }

  h5 {
    font-weight: 800;
    font-size: 12px;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 768px) {
    h5 {
      font-weight: 500;
    }
  }
`;
