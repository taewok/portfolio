import React, { useEffect } from "react";
import styled from "styled-components";
import Aside from "./introduction/Aside";
import MainTitle from "./introduction/MainTitle";

const Introduction = () => {
  useEffect(() => {
    const target = document.getElementById("introduction-container");

    target.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        // scrollDown(e);
        window.scrollTo({
          top: window.innerHeight, // 현재 스크롤 위치에서 100vh를 더합니다.
          behavior: "smooth", // 부드러운 스크롤 애니메이션 효과
        });
      }
    });
  }, []);

  useEffect(() => {
    const element = document.getElementById("aboutme-container");

    element.addEventListener("wheel", (e) => {
      const rect = element.getBoundingClientRect();
      const distanceFromTop = rect.top;

      if (e.deltaY < 0 && distanceFromTop > -100) {
        e.preventDefault();
        window.scrollTo({
          top: -60,
          behavior: "smooth",
        });
      }
    });
  }, []);

  return (
    <Container id="introduction-container">
      <Aside />
      <MainTitle />
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: black;
  font-family: "Montserrat";
  color: white;
  overflow: hidden;
`;

export default Introduction;
