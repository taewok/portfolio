import React from "react";
import styled from "styled-components";
import Sliders from "./Sliders";
import Info from "./Info";

const Project = ({ data }) => {
  return (
    <Container>
      <Corner></Corner>
      <Corner></Corner>
      <Corner></Corner>
      <Corner></Corner>
      <Title>{data.title}</Title>
      <ContentBox>
        <Info data={data} />
        <Sliders imgList={data.img} />
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 4vh 50px 0 50px;
  width: calc(100% - 100px);
  height: calc(100% - 4vh);
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

const Title = styled.h1`
  padding-left: 4vw;
  text-align: left;
  font-size: 4.5rem;
  color: white;
  text-shadow: -2px 0 #444, 0 2px #444, 2px 0 #444, 0 -2px #444;
`;
const ContentBox = styled.div`
  display: flex;
  padding: 0 4vw;
  width: calc(100% - 8vw);
  height: calc(100% - 96.67px);
`;

export default Project;
