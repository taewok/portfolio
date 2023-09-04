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
          start: "20% 50%",
          toggleActions: "play play play reverse",
          toggleClass: "active",
        },
      });
    };
    const elements = document.querySelectorAll(".skill-box");
    elements.forEach((e) => {
      applyScrollTrigger(e);
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

  return (
    <Container>
      <SkillsContainer id="skill-container">
        {skillArray.map((value, index) =>
          index % 2 === 0 ? (
            <SkillBox className="skill-box" key={value.name}>
              <SkillExplainList>
                {value.explain.map((v) => (
                  <SkillExplainItem key={v}>{v}</SkillExplainItem>
                ))}
              </SkillExplainList>
              <SkillNameBox textColor={value.textColor}>
                <span>{value.name}</span>
              </SkillNameBox>
            </SkillBox>
          ) : (
            <SkillBox className="skill-box" key={value.name}>
              <SkillNameBox textColor={value.textColor}>
                <span>{value.name}</span>
              </SkillNameBox>
              <SkillExplainList>
                {value.explain.map((v) => (
                  <SkillExplainItem key={v}>{v}</SkillExplainItem>
                ))}
              </SkillExplainList>
            </SkillBox>
          )
        )}
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
  padding: 0 10vw;
  width: 100%;
  height: 100%;
  color: white;
`;
const SkillBox = styled.div`
  display: flex;
  opacity: 0;
  padding: 25vh 0;
  width: 100%;
  &.active {
    div {
      &::after {
        position: absolute;
        top: -15%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  text-align: center;
  font-size: 6vw;
  color: ${(props) => props.textColor};
  text-shadow: 6px 6px 6px gray;
  span {
    position: relative;
    z-index: 99;
  }
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 130%;
    background-image: url("https://github.com/TWOGATH3R/twogather-web-frontend/assets/88264006/56feae1e-cd7f-4db0-8de3-296ba5362863");
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
const SkillExplainList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 8vw;
  width: 60%;
  font-size: 1.7rem;
`;
const SkillExplainItem = styled.li`
  padding: 0 3vw 15px 0;
`;

export default Skill;