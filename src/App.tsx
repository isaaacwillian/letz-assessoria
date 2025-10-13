import GlobalStyle from "./styles/global";
import IntroSection from "./sections/Intro";
import BenefitsSection from "./sections/Benefits";
import ExpertsSection from "./sections/Experts";
import ImpactSection from "./sections/Impact";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <IntroSection />
      <BenefitsSection />
      <ExpertsSection />
      <ImpactSection />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
