import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import Projects from "./components/Projects";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Introduction from "./components/Introduction";
import Hearder from "./components/Hearder";
import AboutMe from "./components/AboutMe";
import Library from "./components/aboutme/Library";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Hearder />
      <Introduction />
      <AboutMe />
      <Library />
      <Projects />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: red;
`;

export default App;
