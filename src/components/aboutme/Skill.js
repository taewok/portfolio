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
          console.log("Dfs");
        },
        toggleClass: "active",
      },
    });
  }, []);

  const skillArray = [
    {
      name: "HTML",
      explain: [
        "시맨틱 마크업에 대한 이해를 바탕으로 웹표준을 준수한 레이아웃 설계",
      ],
      textColor: "#E44D26",
    },
    {
      name: "CSS",
      explain: [
        "유동 그리드 레이아웃, 이미지, 미디어 쿼리 등을 이용한 반응형 웹 구현",
        "CSS의 가독성을 높이고, 유지보수에 용이한 SCSS 사용",
        "CSS 선택자를 사용하여 웹 페이지의 특정 요소를 선택하고 스타일을 적용",
        "프로젝트의 디자인에 알맞은 스타일 적용",
      ],
      textColor: "#1572B6",
    },
    {
      name: "JavaScript",
      explain: [
        "async/await 등을 axios 라이브러리를 활용한 비동기 작업 처리 경험",
        "Rest API 기반의 서버 통신 및 데이터 처리 경험",
        "JS를 이용한 연산과 DOM 객체의 조작",
        "React를 활용한 컴포넌트 단위의 개발",
      ],
      textColor: "#F1BF26",
    },
    {
      name: "TypeScript",
      explain: [
        "타입스크립트의 정적 타입 검사를 활용하여 코드 안정성을 높이고 런타임 에러를 사전에 방지",
        "인터페이스 및 타입 정의를 사용하여 코드의 가독성과 재사용성 상승",
      ],
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
            <SkillExplainList>
              {value.explain.map((v) => (
                <SkillExplainItem key={v}>{v}</SkillExplainItem>
              ))}
            </SkillExplainList>
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
  transform: translate(-45%, -50%);
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
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
    content: "Skills";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      transform: ${(props) => `rotate(${props.rotate}deg)`} translate(300px)
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
    z-index: 99;
  }
`;

export default Skill;
