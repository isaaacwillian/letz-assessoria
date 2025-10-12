import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(180deg, #191a18 7.62%, #000000 104.3%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 484px;
  padding-bottom: 38px;
  padding-top: 33px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 clamp(0px, 1vw, 300px);
  padding: 0 28px;
  max-width: 888px;

  h1 {
    width: 100%;
    font-weight: 800;
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: clamp(43px, 10vw, 60px);
  }

  .highlight {
    background: linear-gradient(90deg, #44ff00 -60%, #6bd0ff 30%, #6bd0ff 43%, #44ff00 49%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ImpactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 63px;

  @media (max-width: 600px) {
    justify-content: space-around;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .firstImpact {
    font-weight: 800;
    font-size: 29px;
    background: linear-gradient(180deg, #6bd0ff 0%, #44ff00 87.98%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .restImpact {
    background: linear-gradient(180deg, #6bd0ff 0%, #44ff00 160%);
    background-clip: text;
    font-weight: 800;
    font-size: 29px;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }

  p {
    font-weight: 400;
    font-size: 12px;
  }
`;
