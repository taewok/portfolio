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
        <span>안녕하세요</span>
        <br />
        Front-end 개발자를 꿈꾸는 "김태욱"입니다.
        <br />
        열정과 호기심을 베이스로 끊임 없이 노력하며 성장하고 있습니다.
        <br />
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
`;

export default MyExplanation;
