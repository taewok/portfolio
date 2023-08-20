import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";

const Skill = () => {
  useEffect(() => {
    const applyScrollTrigger = (e) => {
      gsap.to(e, {
        opacity: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: e,
          start: "50% 50%",
          toggleActions: "play play play reverse",
          toggleClass: "active",
          markers: true,
        },
      });
    };
    const elements = document.querySelectorAll(".skill-box");
    elements.forEach((e) => {
      applyScrollTrigger(e);
    });
  }, []);

  return (
    <Container>
      <SkillsContainer id="skill-container">
        <SkillBox className="skill-box">
          <SkillNameBox textColor="#E44D26">
            <span>HTML</span>
          </SkillNameBox>
          <SkillExplainList>
            <SkillExplainItem>dfsdfsdf</SkillExplainItem>
            <SkillExplainItem>dfsdfsdf</SkillExplainItem>
            <SkillExplainItem>dfsdfsdf</SkillExplainItem>
          </SkillExplainList>
        </SkillBox>
      </SkillsContainer>
    </Container>
  );
};

const animate = keyframes`
    0%{
        width: 100%;
    }100%{
        width: 0%;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 466px);
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
`;
const SkillBox = styled.div`
  display: flex;
  opacity: 0;
  padding: 20vh 0;
  width: 100%;
  font-size: 2rem;
  &.active {
    div {
      &::after {
        position: absolute;
        top: -30%;
        right: 0%;
        content: "";
        width: 100%;
        height: 200%;
        background-color: black;
        animation: ${animate} 1s ease-in forwards;
      }
    }
  }
`;
const SkillNameBox = styled.div`
  position: relative;
  width: 40%;
  text-align: center;
  font-size: 8vw;
  color: ${(props) => props.textColor};
  span {
    position: relative;
    z-index: 99;
  }
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 100%;
    height: 130%;
    background-image: url("https://github.com/TWOGATH3R/twogather-web-frontend/assets/88264006/56feae1e-cd7f-4db0-8de3-296ba5362863");
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
const SkillExplainList = styled.ul`
  width: 60%;
`;
const SkillExplainItem = styled.li``;

export default Skill;
