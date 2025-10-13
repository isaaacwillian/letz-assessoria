import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(180deg, #000000 63.11%, #44ff00 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: clamp(20px, 5vw, 41px);
  margin-bottom: 51px;
  padding: 0 28px;

  h1 {
    font-weight: 900;
    font-style: Black;
    font-size: clamp(24px, 5vw, 52px);
    margin-bottom: 21px;
  }

  .highlight {
    background: linear-gradient(90deg, #44ff00 0%, #6bd0ff 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-weight: 700;
    font-style: Bold;
    font-size: clamp(16px, 3vw, 20px);
    max-width: 823px;
  }
`;

export const OfferContainer = styled.div`
  border: 0.5px solid #44ff00;
  max-width: 753px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  margin-bottom: 65px;
`;

export const BenefitsContent = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: clamp(16px, 5vw, 90px);
  padding: 23px 43px 43px 43px;

  @media (max-width: 484px) {
    justify-content: start;
    max-width: 270px;
    padding: 17px 33px 41px 33px;
  }
`;

export const Benefit = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: left;

  img {
    margin-right: 7px;
  }

  h3 {
    font-weight: 900;
    font-size: 12px;
  }

  p {
    font-weight: 300;
    font-size: 7px;
  }
`;

export const PriceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  p {
    font-weight: 400;
    font-size: 10px;
  }

  h1 {
    font-weight: 900;
    font-size: 32px;
    color: #44ff00;
    margin-bottom: 0px;
  }

  span {
    text-decoration: line-through;
  }
`;

export const BuyButton = styled.button`
  width: 246px;
  height: 56px;
  border-radius: 16px;
  background: #44ff00;
  font-weight: 900;
  font-size: 13px;
`;

export const LetzLogo = styled.img`
  width: 255px;
  height: 76px;
`;
