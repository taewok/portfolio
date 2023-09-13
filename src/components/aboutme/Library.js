import React from "react";
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Library = () => {
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const libraryWrapOnClick = (e) => {
    setIsAnimating(false);
    let num = 0;

    libraryArray.forEach((v, i) => {
      if (e.textContent === v.name || e.textContent.includes(v.name))
        return (num = (i + 1) * (360 / libraryArray.length));
    });

    setRotation(num);

    const targetElement = document.getElementById("library-wrap");
    targetElement.style.transform = `perspective(700px) rotateY(-${num}deg)`;
  };

  const libraryWrapMouseLeave = (e) => {
    setIsAnimating(true);
    setRotation(0);
  };

  const libraryArray = [
    {
      name: "React",
      text: `React Hook을 통한 변수 관리와 라이프 사이클에 적절한 활용이 
      가능하며
      컴포넌트의 재사용성을 고려한 컴포넌트 분리와 다양한 라이브러리 응용 가능합니다.`,
      color: "#61DAFB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "Recoil",
      text: `Recoil 라이브러리를 사용하여 
      어떤 컴포넌트에서든 전역으로 상태를 읽고 업데이트할 수 있으며
      Recoil Persist를 사용해 페이지 새로고침 등에서도 상태를 유지할 수 있습니다.`,
      color: "#007AF4",
      img: "https://blog.kakaocdn.net/dn/A4ANT/btrHoMUAw6C/ikblOMCARWgVNDONK1My3k/img.png",
    },
    {
      name: "Axios",
      text: `HTTP 요청을 보내고 응답을 처리하는 기본적인 능력을 가졌으며
      interceptors를 사용하여 api 통신 error,success 처리에 발생하는 반복적인 코드를 줄일 수 있습니다. 또한
      async/await와 같은 비동기 프로그래밍 패턴을 사용헤 비동기 처리가 가능합니다. `,
      color: "#5B2BE1",
      img: "https://velog.velcdn.com/images/moonshadow/post/bc1ac3ba-9c3f-4695-8994-147ff8f85eaa/image.jpeg",
    },
    {
      name: "React-Query",
      text: `용도에 따라 useQuery와 useMutation 훅을 알맞게 사용할 수 있으며
      QueryClient를 사용해 queri,mutation에 따른 공통 옵션을 설정 할 수 있으며`,
      color: "#EA5259",
      img: "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQEeb2%2FbtrURVcrmPw%2F1JltG3p7ihC0tKi3IYmetK%2Fimg.png",
    },
    {
      name: `Styled\nComponents`,
      text: `HTTP 요청을 보내고 응답을 처리하는 기본적인 능력을 가졌으며
      interceptors를 사용하여 api 통신 error,success 처리에 발생하는 반복적인 코드를 줄일 수 있습니다. 또한
      async/await와 같은 비동기 프로그래밍 패턴`,
      color: "#D976B3",
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
          <LibraryBox
            key={i}
            num={i + 1}
            deg={360 / libraryArray.length}
            color={v.color}
            active={rotation === ((i + 1) * 360) / libraryArray.length}
          >
            <Front>
              <Name>{v.name}</Name>
              <Explain>
                <h2>{v.name}</h2>
                <p>{v.text}</p>
              </Explain>
            </Front>
            <Back>
              <Name>{v.name}</Name>
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
  padding: 7%;
  width: 80%;
  height: 80%;
  background-color: white;
  opacity: 0;
  font-size: 1rem;
  color: black;
  transition: all 0.5s;
  h2 {
    padding-bottom: 20px;
    text-align: center;
  }
  p {
    transform: translate3d(0, 0, 0);
  }
`;
const Front = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
const Name = styled.span`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const animate = keyframes`
    0%{ transform: perspective(700px) rotateY(${(props) => props.rotation}) }
    100% { transform: perspective(700px) rotateY(360deg) }
  `;
const upAndDown = keyframes`
  0%{
    transform: translate(-50%, -200%);
  } 100%{
    transform: translate(-50%, -230%);
  } 
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
  width: 30vh;
  height: 30vh;
  transform: perspective(700px);
  transform-style: preserve-3d;
  /* animation: ${(props) =>
    props.isAnimating
      ? css`
          ${animate} 70s linear infinite
        ` // 애니메이션이 적용되는 경우
      : "none"}; */
  &:hover {
    animation-play-state: paused;
  }
`;
const LibraryBox = styled.div`
  will-change: transform;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: ${(props) => `rotateY(calc(${props.num * props.deg}deg))`}
    translateZ(300px);
  cursor: pointer;
  white-space: pre-line;
  ${(props) =>
    props.active ||
    css`
      &:hover {
        &::after {
          position: absolute;
          content: "click";
          top: 0;
          left: 50%;
          transform: translate(-50%, -200%);
          color: white;
          font-size: 2rem;
          animation: ${upAndDown} 1s alternate-reverse infinite;
        }
      }
    `}
  &:hover > ${Front} {
    transform: rotateY(0) translateY(-10%);
  }
  &:hover > ${Back} {
    transform: rotateY(-180deg) translateY(-10%);
  }
  ${Name} {
    color: ${(props) => props.color};
  }
  ${Explain} {
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      inset: 10px;
      border: 3px solid ${(props) => props.color};
    }
  }
`;

export default Library;
