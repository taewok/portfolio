import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MeExplanation from "./aboutme/MyExplanation";
import Skill from "./aboutme/Skill";

const AboutMe = () => {
  const colorList = ["#0000FF", "#66FFFF", "#6600CC", "#003366"];
  useEffect(() => {
    const dot = () => {
      let sizeW = Math.random() * 10;
      let duration = Math.random() * 6;
      let e = document.createElement(`div`);
      const style = e.style;
      e.setAttribute("class", "circle");
      document.querySelector("#aboutme-container").appendChild(e);
      style.width = 2 + sizeW + `px`;
      style.left = Math.random() * +window.innerWidth + `px`;
      const color = `${colorList[Math.ceil(Math.random() * 3)]}`;
      style.backgroundColor = color;
      style.animationDuration = 16 + duration + `s`;
      style.boxShadow = `0 0 10px ${color},0 0 20px ${color},0 0 30px ${color},0 0 50px ${color}`;

      setTimeout(() => {
        document.querySelector("#aboutme-container").removeChild(e);
      }, (16 + duration) * 1000);
    };

    setInterval(() => {
      dot();
    }, 350);
  }, []);

  return (
    <Container id="aboutme-container">
      <MeExplanation />
      <Skill />
    </Container>
  );
};

const animate = keyframes`
    0%{
        transform: translateY(0);
        opacity: 0.8;
    }
    75%{
        opacity: 0.5;
    }100%{
        transform: translateY(350vh);
        opacity: 0;
    }
`;

const Container = styled.section`
  position: relative;
  padding-top: 10vh;
  width: 100%;
  height: fit-content;
  background-color: black;
  .circle {
    position: absolute;
    z-index: 1;
    top: 0%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    animation: ${animate} 7s linear infinite;
  }
`;

export default AboutMe;
