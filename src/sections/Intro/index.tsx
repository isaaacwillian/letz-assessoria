import { BuyButton, Container, LetzLogo, RunnerBackground } from "./style";
import runner from "../../assets/runner.png";
import letzLogo from "../../assets/letzLogo.png";

function Intro() {
  return (
    <Container>
      <RunnerBackground src={runner} alt="Corredor" />
      <h1>Força que Corre</h1>
      <h3>Treinamento de força para corredores</h3>
      <p>
        Descubra como unir corrida e força para conquistar mais performance, resistência e menos lesões. O guia definitivo para corredores
        que querem <span>correr mais e melhor.</span>
      </p>
      <BuyButton>Garanta já seu e-book</BuyButton>
      <LetzLogo src={letzLogo} alt="Logo da Letz Assessoria" />
    </Container>
  );
}

export default Intro;
