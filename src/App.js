import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".box2", {
      xPercent: -300,
      scrollTrigger: {
        trigger: ".box2",
        start: `${document.getElementById("list").clientHeight + 100}px 99%`,
        end: `85% 10%`,
        scrub: 1,
        toggleActions: "restart reverse reverse reverse",
        markers: true,
      },
    });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Box1 />
      <Box2 className="box2">
        <SubList id="list">
          <SubItem color="yellow">Page1</SubItem>
          <SubItem color="orange">Page2</SubItem>
          <SubItem color="pink">Page3</SubItem>
          <SubItem color="skyblue">Page4</SubItem>
        </SubList>
      </Box2>
      <Box3></Box3>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
const Box1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: aqua;
`;

const Box2 = styled.div`
  width: 100%;
  height: 480vw;
  background-color: #8080ff;
`;
const SubList = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  overflow-x: hidden;
  width: 400%;
  height: 100vh;
`;
const SubItem = styled.li`
  width: 120vw;
  height: 100%;
  background-color: ${(props) => props.color};
  text-align: center;
  transition: all 1s;
`;
const Box3 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8080ff;
  max-height: 100%;
  display: flex;
`;

export default App;
