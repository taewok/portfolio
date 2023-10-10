import { gsap } from "gsap";
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const Library = () => {
  const libraryArray = [
    {
      name: "React",
      text: `React Hook을 통한 변수 관리와 라이프 사이클에 적절한 활용이 
      가능하며
      컴포넌트의 재사용성을 고려한 컴포넌트 분리와 다양한 라이브러리 응용 가능합니다.`,
      color: "rgb(61 181 213)",
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
      text: `스타일 관리가 편리한 컴포넌트 지향적 스타일링 구사와  createGlobalStyle를 통한 전역 스타일링이 가능하며
      Props 값을 활용하여 컴포넌트의 스타일을 동적으로 변경할 수 있습니다.`,
      color: "#D976B3",
      img: "https://blog.kakaocdn.net/dn/bJnCEB/btrwJwIaH3z/K0E3JkariSbVpxDywoWw11/img.png",
    },
  ];

  useEffect(() => {
    const libraryBoxes = document.querySelectorAll(".library-box");

    libraryBoxes.forEach((box, index) => {
      gsap.to(box, {
        delay: index % 2 === 0 ? index * 0.2 : index * 0.6, // 인덱스에 따라 지연을 추가하여 stagger 효과 생성
        duration: index % 2 === 0 ? 3 : 3,
        onStart: () => {
          // 애니메이션이 시작될 때 클래스 추가
          box.classList.add("active");
        },
        scrollTrigger: {
          trigger: "#library-wrap",
          start: "20% 80%",
          toggleActions: "play play play reverse",
          markers: true,
        },
      });
    });
  }, []);

  return (
    <Container id="library-ontainer">
      <LibraryWrap id="library-wrap">
        {libraryArray.map((v, i) => (
          <LibraryBox
            key={i}
            odd={i % 2 === 0}
            className="library-box"
            delay={i + 1 * 0.5}
          >
            <InfoBox color={v.color}>
              <Name>{v.name}</Name>
              <Explain>
                <p>{v.text}</p>
              </Explain>
            </InfoBox>
          </LibraryBox>
        ))}
      </LibraryWrap>
    </Container>
  );
};

const InfoBox = styled.div`
  padding: 30px 15px 15px 15px;
  width: calc(100% - 30px);
  height: calc(100% - 45px);
  background-color: ${(props) => `${props.color}`};
`;

const Explain = styled.div`
  font-family: "IM_Hyemin-Bold";
  font-size: 1.2rem;
  p {
    letter-spacing: 2px;
    padding-top: 30px;
  }
`;
const Name = styled.span`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1.5rem;
  text-align: center;
`;

const photoAnimate = (odd) => keyframes`
  0%{
    scale:1.5;
  }100% {
    scale: 1;
    opacity: 1; 
    transform: translateY(-20%) translateX(0) rotateZ(${odd ? 8 : -8}deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30vh 0 15vh 0;
  width: 100%;
  background-color: black;
`;
const LibraryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const LibraryBox = styled.div`
  position: relative;
  opacity: 0;
  margin: 5%;
  padding: 15px 8px 60px 8px;
  width: 350px;
  height: 300px;
  aspect-ratio: 1/1;
  background-color: white;
  color: white;
  &.active {
    animation: ${photoAnimate()} 1.5s forwards;
  }
  ${(props) =>
    props.odd &&
    css`
      &.active {
        animation: ${photoAnimate(props.odd)} 2s forwards;
      }
    `}
  &::after {
    position: absolute;
    content: "";
    top: 5px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 18px;
    aspect-ratio: 1/1;
    background-color: black;
    border-radius: 50%;
  }
`;

export default Library;
