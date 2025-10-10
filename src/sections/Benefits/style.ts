import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  margin: 80px 0;
`;

export const Content = styled.div`
  max-width: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 28px;

  span {
    color: #44ff00;
  }

  h1 {
    margin-bottom: 18px;
    font-size: clamp(24px, 5vw, 36px);
    text-align: center;
  }

  .description {
    font-size: clamp(14px, 3vw, 18px);
    max-width: 815px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  max-width: 903px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 51px;
  gap: 20px;

  @media (max-width: 648px) {
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
`;

export const BenefitCard = styled.div`
  width: 179px;
  height: 213px;
  border-radius: 17px;
  border: 0.4px solid #44ff00;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 12px;

  h4 {
    font-weight: 800;
    font-size: 14px;
    margin-top: 17px;
    margin-bottom: 21px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
    padding: 15px;

    h4 {
      margin: 10px 0;
    }
  }
`;

export const InfoContainer = styled.div`
  max-width: 903px;
  width: 100%;
  border-radius: 25px;
  border: 0.4px solid #44ff00;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h1 {
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: clamp(18px, 4vw, 32px);
  }
`;

export const InfoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 25.88888931274414px;
    height: 24.10344886779785px;
    margin-right: 9px;
  }

  p {
    font-weight: 700;
    font-size: 11px;
  }
`;
