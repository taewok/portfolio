import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const BlogModal = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <Container active={active}>
      <button onClick={() => setActive(!active)}>
        {active ? "닫기" : "Blog"}
      </button>
      <BlogList>
        {data.map((v) => (
          <BlogItem key={v.title}>
            <a href={v.url}>{v.title}</a>
          </BlogItem>
        ))}
      </BlogList>
    </Container>
  );
};

const animate = keyframes`
  0%{
    white-space: nowrap; /* 텍스트를 한 줄에 표시하고 줄 바꿈을 금지합니다. */
  overflow: hidden; /* 요소의 내용이 넘칠 경우, 내용을 숨깁니다. */
  text-overflow: ellipsis;
  }100%{
    white-space: pre-wrap; /* 텍스트를 한 줄에 표시하고 줄 바꿈을 금지합니다. */
  overflow: none; /* 요소의 내용이 넘칠 경우, 내용을 숨깁니다. */
  text-overflow: clip;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 40px;
  font-size: 1.3rem;
  ${(props) =>
    props.active
      ? css`
          display: block;
          position: absolute;
          padding-bottom: 100px;
          width: 80%;
          height: fit-content;
          top: 10%;
          left: 0;
          background-color: white;
          border: 1px solid #444;
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
          transition: all 0.5s;
          button {
            position: absolute;
            z-index: 15;
            top: 95%;
            left: 50%;
            transform: translate(-50%, -100%);
            /* display: none; */
          }
          ul {
            animation: ${animate} 1.5s;
          }
        `
      : css`
          ul {
            display: none;
          }
        `}
`;

const BlogList = styled.ul`
  padding: 5% 5% 5% 8%;
  text-align: left;
  font-size: 1rem;
`;
const BlogItem = styled.li`
  padding: 7px 5px;
  a {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: black;
    &:hover {
      color: #6b6b6b;
    }
  }
`;

export default BlogModal;
