import { Benefit, BenefitsContent, BuyButton, Container, Content, LetzLogo, OfferContainer, PriceContent } from "./style";
import instantAccessIcon from "../../assets/instant-access-icon.svg";
import exclusiveContentIcon from "../../assets/exclusive-content-icon.svg";
import qualityGuaranteeIcon from "../../assets/quality-guarantee-icon.svg";
import letzLogo from "../../assets/letzLogo.png";

export default function CallToAction() {
  return (
    <Container>
      <Content>
        <h1>
          Pronto para <span className="highlight">correr mais forte?</span>
        </h1>
        <h2>
          Não perca mais tempo com treinos que não funcionam. Garante já o seu ebook e descubra como a força pode revolucionar sua corrida.
        </h2>
        <OfferContainer>
          <BenefitsContent>
            <Benefit>
              <img src={instantAccessIcon} alt="Ícone de acesso instantâneo" />
              <div>
                <h3>Acesso Imediato</h3>
                <p>Acesso imediato via e-mail </p>
              </div>
            </Benefit>
            <Benefit>
              <img src={exclusiveContentIcon} alt="Ícone de conteúdo exclusivo" />
              <div>
                <h3>Conteúdo Exclusivo</h3>
                <p>
                  Baseado em métodos comprovados
                  <br />
                  Vídeos demonstrativos
                </p>
              </div>
            </Benefit>
            <Benefit>
              <img src={qualityGuaranteeIcon} alt="Ícone de garantia de qualidade" />
              <div>
                <h3>Garantia de Qualidade</h3>
                <p>Satisfação garantida ou seu dinheiro de volta</p>
              </div>
            </Benefit>
          </BenefitsContent>
          <PriceContent>
            <p>PREÇO ESPECIAL</p>
            <h1>R$ 39,00</h1>
            <p>
              <span>De R$ 100,00</span> por apenas
            </p>
          </PriceContent>
          <BuyButton>Comprar agora - R$ 39,00</BuyButton>
        </OfferContainer>
        <LetzLogo src={letzLogo} alt="Logo da Letz" />
      </Content>
    </Container>
  );
}
