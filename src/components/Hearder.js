import React from "react";
import styled, { keyframes } from "styled-components";

const Hearder = () => {
  const array = [
    {
      name: "HOME",
      link: "#introduction-container",
    },
    {
      name: "ABOUT",
      link: "#myexplanation-container",
    },
    {
      name: "SKILL",
      link: "#skill-container",
    },
    {
      name: "PROJECT",
      link: "#projectList",
    },
    {
      name: "CONTACT",
      link: "#footer-container",
    },
  ];
  return (
    <Container>
      <HearderWrap>
        <LogoBox>
          <a href="#introduction-container">T</a>
        </LogoBox>
        <NavList>
          {array.map((v) => (
            <NavItem key={v.name}>
              <a href={v.link}>{v.name}</a>
            </NavItem>
          ))}
        </NavList>
      </HearderWrap>
    </Container>
  );
};

const animate = keyframes`
    0%{
        width: 0%;
    }100%{
        width:100%;
    }
`;

const LogoBox = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;
  &::after {
    position: absolute;
    top: 100%;
    content: "";
    width: 0%;
    left: 0;
    height: 1px;
    background-color: white;
    animation: ${animate} 1.5s ease 0s forwards;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;
const HearderWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 100%;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
`;
const NavItem = styled.li`
  margin: 0 10px;
  padding: 0 5px;
`;

export default Hearder;
