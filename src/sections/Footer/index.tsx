import { Container, Content, SocialButton, SocialButtonsContainer } from "./style";
import instagramIcon from "../../assets/instagram-icon.svg";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import emailIcon from "../../assets/email-icon.svg";

export default function Footer() {
  return (
    <Container>
      <Content>
        <h1>Letz Assessoria</h1>
        <p>Especializados em Corrida e treinamento de força</p>
        <SocialButtonsContainer>
          <SocialButton>
            <img src={instagramIcon} alt="Instagram" />
            <span>@Letz_assessoria</span>
          </SocialButton>
          <SocialButton>
            <img src={whatsappIcon} alt="WhatsApp" />
            <span>WhatsApp</span>
          </SocialButton>
          <SocialButton>
            <img src={emailIcon} alt="Email" />
            <span>E-mail</span>
          </SocialButton>
        </SocialButtonsContainer>
        <hr />
        <p className="footerDisclaimer">
          © 2024 Letz Assessoria. Todos os direitos reservados. <br />
          Este produto não substitui orientação médica profissional. Consulte sempre um profissional de saúde antes de iniciar qualquer
          programa de exercícios.
        </p>
      </Content>
    </Container>
  );
}
