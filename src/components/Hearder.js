import React from "react";
import styled, { keyframes } from "styled-components";

const Hearder = () => {
  return <Container>dfsd</Container>;
};

const animate = keyframes`
    0%{
        width: 0%;
    }100%{
        width:100%;
    }
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 60px;
  background-color: black;
  /* border-bottom: 2px solid white; */
  &::after {
    position: absolute;
    top: 100%;
    content: "";
    width: 0%;
    left: 0;
    height: 1px;
    background-color: white;
    animation: ${animate} 1.5s ease 0s forwards;
  }
`;

export default Hearder;
