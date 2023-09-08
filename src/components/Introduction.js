import React, { useEffect } from "react";
import styled from "styled-components";
import Aside from "./introduction/Aside";
import MainTitle from "./introduction/MainTitle";

const Introduction = () => {
  useEffect(() => {
    const target = document.getElementById("introduction-container");
    target.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        window.scrollTo({
          top: window.innerHeight, // 현재 스크롤 위치에서 100vh를 더합니다.
          behavior: "smooth", // 부드러운 스크롤 애니메이션 효과
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
  overflow: auto;
`;

export default Introduction;
