import styled from "styled-components";

export const Container = styled.footer`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 28px;
  padding-top: 24px;
  padding-bottom: clamp(18px, 49px - 2vw, 39px);

  h1 {
    font-weight: 800;
    font-size: 20px;
    color: #44ff00;
  }

  p {
    font-weight: 300;
    font-size: 12px;
  }

  hr {
    width: 100%;
    border: 0.5px solid #44ff00;
    margin-top: clamp(16px, 46px - 2vw, 39px);
    margin-bottom: clamp(9px, 25px - 1.5vw, 19px);
    transform: scaleY(0.3);
  }

  .footerDisclaimer {
    font-weight: 300;
    font-size: 6px;
    margin-top: 10px;
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 12px;
  gap: 16px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 39px;
    margin-top: 28px;
  }
`;

export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #44ff00c2;
  height: 35px;
  border-radius: 9px;
  background: #000000;
  color: #44ff00;
  padding: 12px;
  gap: 5px;
  font-weight: 600;
  font-size: 10px;

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 500px) {
    width: 160px;
    height: 44px;

    span {
      width: 100%;
    }
  }
`;
