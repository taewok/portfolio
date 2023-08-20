import React from "react";
import styled from "styled-components";
import Aside from "./introduction/Aside";
import MainTitle from "./introduction/MainTitle";

const Introduction = () => {
  return (
    <Container>
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
`;

export default Introduction;
