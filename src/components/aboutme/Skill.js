import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { gsap } from "gsap";

const Skill = () => {
  useEffect(() => {
    gsap.to("#skill-wrap", {
      opacity: 1,
      duration: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#skill-wrap",
        start: "-200px 80%",
        onEnter: () => {
          setActive(true);
        },
        onLeaveBack: () => {
          setActive(false);
        },
        toggleClass: "active",
      },
    });
  }, []);

  const skillArray = [
    {
      name: "HTML",
      explain: `시맨틱 태그 활용의 중요성을 인지하고 있으며
        반응형 웹에 따른 HTML구조를 설계할 수 있습니다.`,
      textColor: "#E44D26",
    },
    {
      name: "CSS",
      explain: `SCSS를 사용하여  CSS의 가독성과 유지보수성을 향상이 가능하고
        유동 그리드 레이아웃, 이미지 및 미디어 쿼리를 활용하여 반응형 웹 페이지 구현이 가능합니다. 
        CSS 선택자를 활용하여 특정 요소에 스타일을 적용하는데 능하며, 
        또한 styled-components를 사용하여 컴포넌트 기반의 동적 스타일링 구현이 가능합니다.`,
      textColor: "#1572B6",
    },
    {
      name: "JavaScript",
      explain: `async/await, Promise 등을 사용해 비동기 작업을 처리하는데 능하며, 
        axios 라이브러리를 통한 Rest API를 기반으로 서버 통신과 데이터 처리를 수행 경험이 있으며, 
        Vanilla JS 활용으로 DOM 조작이 가능합니다.`,
      textColor: "#F1BF26",
    },
    {
      name: "TypeScript",
      explain: `타입스크립트의 정적 타입 검사를 활용하여 코드 안정성을 높이고 런타임 에러를 사전에 방지할 수 있으며                     ,
        인터페이스 및 타입 정의를 통해 코드의 가독성과 재사용성 향상시킬 수 있습니다.
        또한 tsconfig.json 파일을 통해 TypeScript 컴파일러의 동작을 설정하고 프로젝트에 적합한 환경 구성이 가능합니다.`,
      textColor: "#3178C6",
    },
  ];

  const [active, setActive] = useState(false);

  return (
    <Container id="skill-container">
      <SkillsContainer id="skill-wrap">
        {skillArray.map((value, index) => (
          <>
            <SkillBox
              className="skill-box"
              key={value.name}
              rotate={index * 90}
              active={active}
            >
              <SkillNameBox textColor={value.textColor}>
                <Cicle />
                <span>{value.name}</span>
              </SkillNameBox>
            </SkillBox>
            <SkillExplainList>{value.explain}</SkillExplainList>
          </>
        ))}
      </SkillsContainer>
    </Container>
  );
};

const animate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg); /* 360도 회전 (시계방향) */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 600px 0;
  height: calc(100% - 466px);
`;

const Cicle = styled.div`
  position: absolute;
  width: 150px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: white;
  animation: ${animate} 10s linear infinite;
  &::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: blue;
    animation: ${animate} 10s linear infinite;
  }
`;
const SkillExplainList = styled.ul`
  list-style: none;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 420px;
  background-color: black;
  font-size: 1rem;
  transition: all 1s;
`;
const SkillExplainItem = styled.li``;

const SkillsContainer = styled.div`
  position: relative;
  display: flex;
  padding: 0 10vw;
  height: 100%;
  color: white;
  &::before {
    content: "마우스를 올려보세요";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
  }
`;
const SkillBox = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  display: flex;
  width: 150px;
  transition: all 1.5s;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      transform: ${(props) => `rotate(${props.rotate}deg)`} translate(350px)
        ${(props) => `rotate(-${props.rotate}deg)`} translate(-20%, -50%);
    `}
  &:hover {
    & + ul {
      opacity: 1;
    }
  }
`;
const SkillNameBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  text-align: center;
  font-size: 3rem;
  color: ${(props) => props.textColor};
  text-shadow: 6px 6px 6px gray;
  ${Cicle} {
    &::after {
      background-color: ${(props) => props.textColor};
    }
  }
  span {
    position: relative;
    z-index: 999;
  }
`;

export default Skill;
