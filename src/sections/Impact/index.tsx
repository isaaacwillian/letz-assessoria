import { Container, Content, ImpactContainer } from "./style";

export default function Impact() {
  return (
    <Container>
      <Content>
        <h1>
          “Todo corredor tem um próximo nível. <span className="highlight">A Letz te leva até lá.</span>”
        </h1>
        <ImpactContainer>
          <div>
            <h3 className="firstImpact">200+</h3>
            <p>Corredores treinados</p>
          </div>
          <div>
            <h3 className="restImpact">+ 15 anos</h3>
            <p>De experiência</p>
          </div>
          <div>
            <h3 className="restImpact">98%</h3>
            <p>Corredores satisfeitos</p>
          </div>
        </ImpactContainer>
      </Content>
    </Container>
  );
}
