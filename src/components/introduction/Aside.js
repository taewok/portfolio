import React from "react";
import styled, { keyframes } from "styled-components";

const Aside = () => {
  return (
    <ContactBox>
      <ContactList id="contact-list">
        <ContactItem>
          <a href="mailto:taewok51615@gmail.com">Email.</a>
        </ContactItem>
        <ContactItem>
          <a href="https://github.com/taewok">Github.</a>
        </ContactItem>
        <ContactItem>
          <a href="https://taewok.github.io">Blog.</a>
        </ContactItem>
      </ContactList>
      <LastUpdate>Last update: 2023-08-19</LastUpdate>
    </ContactBox>
  );
};

const animate = keyframes`
    0%{
        height: 0%;
    }100%{
        height:100%;
    }
`;

const ContactBox = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  width: 15%;
  /* border-right: 2px solid white; */
  font-weight: bold;
  &::after {
    position: absolute;
    top: 0;
    right: 0%;
    content: "";
    width: 1px;
    height: 0px;
    background-color: white;
    animation: ${animate} 1.5s ease 0.4s forwards;
  }
  @media screen and (max-width: 1080px) {
    width: 25%;
  }
`;
const ContactList = styled.ul`
  display: inline;
  list-style: none;
`;
const ContactItem = styled.li`
  position: relative;
  margin: 30px 0;
  &::before {
    position: absolute;
    z-index: 1;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    transition: all 0.5s;
    background-color: transparent;
  }
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
      background-color: white;
      border-radius: 10px;
    }
    a {
      color: black;
    }
  }
  a {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    font-size: 2.3rem;
    transition: all 1s;
  }
`;

const LastUpdate = styled.div`
  padding-bottom: 80px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 200;
  color: #d9d9d9;
`;

export default Aside;
