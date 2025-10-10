import { Container, Content, ExpertCard, Expert, ExpertInfo, ExpertsContainer } from "./style";
import erikExpert from "../../assets/erikExpert.svg";
import urielExpert from "../../assets/urielExpert.svg";

const experts = [
  {
    img: erikExpert,
    title: "Professor Erik Martins",
    cref: "021936-G/PE",
    subtitle: "Treinamento de Força & Prevenção de Lesões",
    bio: [
      "Universidade Federal de Alagoas - Educação Física Bacharelado",
      "Especializando em prevenção de lesões e biomecânica",
      "Atleta de aquathlon",
    ],
  },
  {
    img: urielExpert,
    title: "Professor Uriel Pessoa",
    cref: "004943-G/PE",
    subtitle: "Corrida & Performance",
    bio: [
      "Educação Física - Bacharelado",
      "Pós-graduado em Exercício Físico aplicado à reabilitação cardíaca e grupos especiais",
      "Especialista em corrida de rua",
      "CEO da Letz Assessoria de Corrida e da BioFit CT",
      "Atleta de corrida",
    ],
  },
];

type ExpertProfileProps = {
  img: string;
  title: string;
  cref: string;
  subtitle: string;
  bio: string[];
};

function ExpertProfile({ img, title, cref, subtitle, bio }: ExpertProfileProps) {
  return (
    <>
      <ExpertCard>
        <img src={img} alt={title} />
        <div></div>
        <p>{subtitle}</p>
      </ExpertCard>

      <ExpertInfo>
        <h1>{title}</h1>
        <h5>CREF: {cref}</h5>
        <p>
          {bio.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </ExpertInfo>
    </>
  );
}

function Experts() {
  return (
    <Container>
      <Content>
        <h1>
          Conheça os <span>Especialistas</span>
        </h1>
        <p className="subtitle">
          “Da corrida ao fortalecimento, da prevenção à performance: duas expertises unidas para formar atletas completos.”
        </p>
        <ExpertsContainer>
          {experts.map((expert, index) => (
            <Expert key={index}>
              <ExpertProfile {...expert} />
            </Expert>
          ))}
        </ExpertsContainer>
      </Content>
    </Container>
  );
}

export default Experts;
