import React from "react";
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Library = () => {
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const libraryWrapOnClick = (e) => {
    setIsAnimating(false);
    const target = e.src;
    let num = 0;

    libraryArray.forEach((v, i) => {
      if (target === v.img || e.textContent === v.text)
        return (num = (i + 1) * 90);
    });

    setRotation(num);

    const targetElement = document.getElementById("library-wrap");
    targetElement.style.transform = `perspective(700px) rotateY(-${num}deg)`;
  };

  const libraryWrapMouseLeave = (e) => {
    setIsAnimating(true);
  };

  const libraryArray = [
    {
      name: "Recoil",
      text: `This is a\n string with line 
      breaks.`,
      img: "https://blog.kakaocdn.net/dn/A4ANT/btrHoMUAw6C/ikblOMCARWgVNDONK1My3k/img.png",
    },
    {
      name: "Axios",
      text: "2",
      img: "https://velog.velcdn.com/images/moonshadow/post/bc1ac3ba-9c3f-4695-8994-147ff8f85eaa/image.jpeg",
    },
    {
      name: "React-Query",
      text: "3",
      img: "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQEeb2%2FbtrURVcrmPw%2F1JltG3p7ihC0tKi3IYmetK%2Fimg.png",
    },
    {
      name: "Styled-Components",
      text: "4",
      img: "https://blog.kakaocdn.net/dn/bJnCEB/btrwJwIaH3z/K0E3JkariSbVpxDywoWw11/img.png",
    },
  ];

  return (
    <Container id="library-ontainer">
      <LibraryWrap
        id="library-wrap"
        onClick={(e) => libraryWrapOnClick(e.target)}
        onMouseLeave={() => libraryWrapMouseLeave()}
        rotation={rotation}
        isAnimating={isAnimating}
      >
        {libraryArray.map((v, i) => (
          <LibraryBox key={i} num={i + 1}>
            <Front>
              <Explain>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </Explain>
              <img src={v.img} alt={v.img} />
            </Front>
            <Back>
              dfsfds
              <img src={v.img} alt={v.img} />
            </Back>
          </LibraryBox>
        ))}
      </LibraryWrap>
    </Container>
  );
};

const Explain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10%;
  width: 80%;
  height: 80%;
  background-color: rgb(0, 0, 0, 0.9);
  opacity: 0;
  font-size: 1rem;
  color: white;
  transition: all 0.5s;
  h3 {
    text-align: center;
  }
`;
const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  transition: all 0.5s;
  backface-visibility: hidden;
  &:hover > ${Explain} {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
const Back = styled(Front)`
  transform: rotateY(-180deg);
`;

const animate = keyframes`
    0%{ transform: perspective(700px) rotateY(${(props) => props.rotation}) }
    100% { transform: perspective(700px) rotateY(360deg) }
  `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30vh;
  width: 100%;
  height: 100vh;
  background-color: black;
`;
const LibraryWrap = styled.div`
  position: relative;
  width: 35vh;
  height: 35vh;
  transform: perspective(700px);
  transform-style: preserve-3d;
  animation: ${(props) =>
    props.isAnimating
      ? css`
          ${animate} 70s linear infinite
        ` // 애니메이션이 적용되는 경우
      : "none"};
  &:hover {
    animation-play-state: paused;
  }
`;
const LibraryBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: ${(props) => `rotateY(calc(${props.num} * 90deg))`}
    translateZ(300px);
  cursor: pointer;
  white-space: pre-line;
  &:hover > ${Front} {
    transform: translateY(-10%);
  }
  &:hover > ${Back} {
    transform: rotateY(-180deg) translateY(-10%);
  }
`;

export default Library;
