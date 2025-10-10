import GlobalStyle from "./styles/global";
import IntroSection from "./sections/Intro";
import BenefitsSection from "./sections/Benefits";
import Experts from "./sections/Experts";

function App() {
  return (
    <>
      <GlobalStyle />
      <IntroSection />
      <BenefitsSection />
      <Experts />
    </>
  );
}

export default App;
