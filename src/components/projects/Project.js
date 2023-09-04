import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <Container>
      <Corner></Corner>
      <Corner></Corner>
      <Corner></Corner>
      <Corner></Corner>
      <Title>01</Title>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: black;
`;
const Corner = styled.span`
  position: absolute;
  font-size: 3rem;
  font-weight: bolder;
  color: gray;
  top: 10px;
  left: 0;
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: gray;
  }
  &::after {
    width: 80px;
    height: 3px;
  }
  &::before {
    width: 3px;
    height: 80px;
  }
  &:nth-child(2) {
    top: 10px;
    left: 100%;
    transform: translate(-100%, 0) rotateY(-180deg);
  }
  &:nth-child(3) {
    top: 100%;
    left: 100%;
    transform: translate(-100%, calc(-100% - 10px)) rotate(-180deg);
  }
  &:nth-child(4) {
    top: 100%;
    left: 0;
    transform: translate(0, calc(-100% - 10px)) rotateY(0) rotateX(180deg);
  }
`;

const Title = styled.title``;

export default Project;
