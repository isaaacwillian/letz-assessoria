import IntroSection from "./sections/Intro";
import BenefitsSection from "./sections/Benefits";
import GlobalStyle, { Container } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <IntroSection />
        <BenefitsSection />
      </Container>
    </>
  );
}

export default App;
