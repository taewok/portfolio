import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const MyExplanation = () => {
  useEffect(() => {
    gsap.to("#myexplanation-container", {
      opacity: 1,
      duration: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#aboutme-container",
        start: "400px 80%",
        toggleActions: "play play play reverse",
        // markers: true,
      },
    });
  }, []);
  return (
    <Container id="myexplanation-container">
      <h4>
        {/* 안녕하세요 프론트엔드 개발자를 꿈꾸는 "김태욱"입니다.
        <br />
        <br />
        저는 코드의 성능 향상을 위한 코드와 알고리즘에 관심이 많아 적극적으로
        <br />
        학습하고 인상 깊은 코드 혹은 기술은 블로그를 통해 기록하며 자신의 것으로
        <br />
        만들어가며 성장하고 있습니다.
        <br />
        <br />
        사용자에게 편하고 부드러운 인터페이스와 경험을 중요하게 생각하며 그러기
        <br />
        위한 과정에서 팀원간의 소통을 중요시하며 재사용이 용이한 코드 후일에도
        <br /> */}
        안녕하세요 2년간 학습하며 성장해온 프론트엔드 개발자 <b>"김태욱"</b>
        입니다.
        <br />
        <br />
        저는 코드의 성능 향상을 위한 코드와 알고리즘에 관심이 많아 적극적으로
        학습하며 인상 깊은 코드 혹은 기술은 Github 블로그를 통해 기록해가며
        성장하고 있습니다.
        <br />
        <br />
        사용자에게 편하고 부드러운 인터페이스와 경험을 중요하게 생각하며 그러기
        위한 과정에서 팀원 간의 소통을 핵심으로 여기고 있으며
        <br />
        항상 재사용이 용이한 코드와 이해하기 쉬운 코드를 쓰려고 노력하고
        있습니다.
      </h4>
    </Container>
  );
};

const Container = styled.div`
  opacity: 0;
  transform: translateY(60px);
  display: inline-block;
  padding-top: 30vh;
  padding-bottom: 30vh;
  width: 100%;
  height: fit-content;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  line-height: 150%;
  h4 {
    margin: 0 auto;
    width: 70%;
  }
`;

export default MyExplanation;
