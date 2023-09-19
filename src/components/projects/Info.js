import React from "react";
import styled from "styled-components";
import BlogModal from "./BlogModal";

const Info = ({ data }) => {
  return (
    <Container>
      <DescBox>
        <DescTitle>기술 스택</DescTitle>
        <DescText>{data.skill.join(", ")}</DescText>
      </DescBox>
      <DescBox>
        <DescTitle>구현 기능</DescTitle>
        <DescText>{data.function.join(", ")}</DescText>
      </DescBox>
      <DescBox>
        <DescTitle>프로젝트 소개</DescTitle>
        <DescText>{data.siteExplain}</DescText>
      </DescBox>
      <BtnBox>
        <button onClick={() => (window.location.href = data.githubUrl)}>
          Github
        </button>
        <BlogModal data={data.blog} />
      </BtnBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 150px;
  width: calc(55% - 150px);
  white-space: pre-line;
`;

const DescBox = styled.div`
  padding: 15px 0;
`;
const DescTitle = styled.h4`
  padding-bottom: 5px;
  text-align: left;
  font-size: 1.3rem;
  color: #444;
`;
const DescText = styled.p`
  text-align: left;
  color: #666666;
  font-size: 1.05rem;
`;

const BtnBox = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-evenly;
  button {
    width: 100px;
    height: 50px;
    background-color: transparent;
    border-radius: 40px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export default Info;
