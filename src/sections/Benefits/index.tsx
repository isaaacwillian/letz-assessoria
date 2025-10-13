import {
  BenefitCard as BenefitCardStyle,
  BenefitsContainer,
  Container,
  Content,
  InfoContainer,
  InfoContent,
  InfoItem as InfoItemStyle,
} from "./style";
import lightningIcon from "../../assets/lightningIcon.svg";
import shieldIcon from "../../assets/shieldIcon.svg";
import circleIcon from "../../assets/circleIcon.svg";
import checkIcon from "../../assets/checkIcon.svg";
import checkTransparentIcon from "../../assets/checkTransparentIcon.svg";

const benefits = [
  {
    icon: lightningIcon,
    title: "Mais Resistência",
    description: "Aumente sua capacidade de correr longas distâncias com menos fadigas",
  },
  {
    icon: shieldIcon,
    title: "Prevenção de Lesões",
    description: "Fortaleça músculos e articulações para evitar lesões comuns em corredores",
  },
  {
    icon: circleIcon,
    title: "Força aplicada à corrida",
    description: "Aprenda exercícios específicos que melhoram diretamente sua performance",
  },
  {
    icon: checkIcon,
    title: "Treinos práticos",
    description: "Rotinas detalhadas e fáceis de seguir, adaptáveis ao seu nível",
  },
];

const infos = [
  "Fundamentos científicos do treinamento de força para corredores",
  "20+ exercícios específicos com técnicas detalhadas",
  "Programas de treino para iniciantes, intermediários e avançados",
  "Como integrar força na sua rotina de corrida",
  "Estratégias de recuperação e prevenção de lesões",
  "30+ vídeos demonstrativos ",
];

function Benefits() {
  return (
    <Container>
      <Content>
        <h1>
          Por que <span>Força + Corrida</span> é a combinação perfeita?
        </h1>
        <p className="description">
          Este ebook vai transformar sua forma de treinar e correr. Descubra os segredos que atletas de elite usam para maximizar
          performance e longevidade
        </p>
        <BenefitsContainer>
          {benefits.map(({ icon, title, description }, index) => (
            <BenefitCard key={index} icon={icon} title={title} description={description} />
          ))}
        </BenefitsContainer>
        <InfoContainer>
          <h1>O que você vai encontrar no ebook:</h1>
          <InfoContent>
            {infos.map((text, index) => (
              <InfoItem key={index} text={text} />
            ))}
          </InfoContent>
        </InfoContainer>
      </Content>
    </Container>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <BenefitCardStyle>
      <img src={icon} alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
    </BenefitCardStyle>
  );
}

function InfoItem({ text }: { text: string }) {
  return (
    <InfoItemStyle>
      <img src={checkTransparentIcon} alt="" />
      <p>{text}</p>
    </InfoItemStyle>
  );
}

export default Benefits;
