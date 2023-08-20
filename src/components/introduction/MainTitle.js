import React from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";

const MainTitle = () => {
  const nameTextArray = ["T", "A", "E", "W", "O", "K"];
  const textArray = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];

  useEffect(() => {
    gsap.to("#introduction-text > p>span>span", {
      opacity: 1,
      y: -0,
      x: 0,
      duration: 0.6,
      stagger: 0.2,
      rotate: 0,
    });
  }, []);
  
  return (
    <IntroductionTextBox>
      <IntroductionText id="introduction-text">
        <p>
          {nameTextArray.map((v) => (
            <span key={v}>
              <span>{v}</span>
            </span>
          ))}
        </p>
        <p>
          {textArray.map((v) => (
            <span key={v}>
              <span>{v}</span>
            </span>
          ))}
        </p>
      </IntroductionText>
    </IntroductionTextBox>
  );
};

const animate = keyframes`
    0%{
        width: 0%;
    }100%{
        width:100%;
    }
`;

const IntroductionTextBox = styled.div`
  padding-top: 50vh;
  width: 85%;
`;
const IntroductionText = styled.div`
  padding-bottom: 10vh;
  width: 100%;
  font-size: 8rem;
  p {
    position: relative;
    padding-left: 5vw;
    &:nth-child(1) {
      &::after {
        position: absolute;
        top: 100%;
        left: 0;
        content: "";
        width: 0;
        height: 1px;
        background-color: white;
        animation: ${animate} 1s ease 1s forwards;
      }
    }
  }
  span {
    display: inline-block;
    overflow: hidden;
    max-height: 130px;
    span {
      display: block;
      opacity: 0;
      rotate: 30deg;
      transform: translate(100px, 99px);
    }
  }
`;

export default MainTitle;
