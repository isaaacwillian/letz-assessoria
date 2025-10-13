import { BuyButton, Container, Content, LetzLogo, RunnerBackground, Title } from "./style";
import runner from "../../assets/runner.png";
import letzLogo from "../../assets/letzLogo.png";
import { useEffect, useRef, useState } from "react";

function Intro() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState<number | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.getBoundingClientRect().width);
    }

    const handleResize = () => {
      if (titleRef.current) {
        setTitleWidth(titleRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <RunnerBackground src={runner} alt="Corredor" />
      <Title ref={titleRef}>Força que Corre</Title>
      <Content $titleWidth={titleWidth!}>
        <h3>Treinamento de força para corredores</h3>
        <p>
          Descubra como unir corrida e força para conquistar mais performance, resistência e menos lesões. O guia definitivo para corredores
          que querem <span>correr mais e melhor.</span>
        </p>
        <BuyButton>Garanta já seu e-book</BuyButton>
        <LetzLogo src={letzLogo} alt="Logo da Letz Assessoria" />
      </Content>
    </Container>
  );
}

export default Intro;
