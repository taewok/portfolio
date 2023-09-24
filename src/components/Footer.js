import { gsap } from "gsap";
import React, { useEffect } from "react";
import styled from "styled-components";
import Email from "./footer/Email";
import Contact from "./footer/Contact";

const Footer = () => {
  useEffect(() => {
    gsap.to("#footer-container", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#footer-container",
        start: `0% 100%`,
        end: `100% 90%`,
        scrub: 1.5,
        // markers: true,
      },
    });
  }, []);

  return (
    <Container id="footer-container">
      <ContentsBox>
        <Email />
        <Contact />
      </ContentsBox>
    </Container>
  );
};

const Container = styled.footer`
  opacity: 0;
  padding-top: 60px;
  height: calc(100vh - 60px);
  background-color: black;
  color: white;
  overflow: hidden;
  @media screen and (max-width: 1080px) {
    height: fit-content;
  }
`;
const ContentsBox = styled.div`
  position: relative;
  display: flex;
  padding: 5%;
  height: calc(100% - 60px);
  &::before {
    position: absolute;
    content: "";
    top: 80%;
    left: 0;
    transform: translate(50%, -30%);
    width: 40vw;
    height: 40vw;
    background-color: rgb(135 135 135 / 33%);
    border-radius: 50%;
  }
  &::after {
    position: absolute;
    content: "";
    top: 70%;
    left: 0;
    transform: translate(-40%, -30%);
    width: 50vw;
    height: 50vw;
    background-color: rgb(65 65 65 / 44%);
    border-radius: 50%;
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

export default Footer;
