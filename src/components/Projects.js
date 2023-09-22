import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect } from "react";
import Project from "./projects/Project";

const Projects = () => {
  useEffect(() => {
    const projectList = document.getElementById("projectList");

    gsap.to(".projectsBox", {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".projectsBox",
        start: `${projectList.clientHeight + 150}px 99%`,
        end: `100%-=${projectList.clientHeight}px 10%`,
        scrub: 0.5,
      },
    });
  }, []);

  const projectArray = [
    {
      title: "Gridians",
      siteExplain: `팀원 모두가 처음부터 기획, 디자인, 요구사항 정의를 토대로 구현하는 과정을 학습하는 것을 목표로 삼았습니다.\n 
      개발자를 위한 프로필 카드 만들기 및 소통 사이트로 
      자신만의 프로필 카드를 만들어 다양한 개발자들과 소통할 수 있으며 github 연동을 통해 카드에 잔디, 마지막 커밋 같은 정보를 표시할 수 있고 상대방 카드에 좋아요를 누르면 상단에 먼저 뜨게 되며 스크롤을 내리면 자동으로 데이터를 불러오는 무한 스크롤로 구성되어 있습니다.`,
      function: [
        "github연동 및 잔디",
        "프로필카드 생성 및 수정",
        "무한스크롤",
        "즐겨찾기",
        "슬라이드",
      ],
      skill: ["React", "React-Query", "Recoil", "Styled-Components"],
      img: [
        "https://github.com/gridians/gridians-fe/assets/88264006/088081cc-903e-4cad-9d1b-1a2c77a9ecf5",
      ],
      siteUrl: "https://www.gridians.site",
      githubUrl: "https://github.com/gridians/gridians-fe",
      blog: [
        {
          title: "비동기 작업을 동기적으로 처리하기 위한 async & await 사용",
          url: "https://taewok.github.io/posts/async,await%EC%82%AC%EC%9A%A9/",
        },
        {
          title: "상태관리 라이브러리인 Recoil을 사용한 전역 산태 관리",
          url: "https://taewok.github.io/posts/recoil/",
        },
        {
          title: "데이터 관리 라이브러리인 React-Query 사용",
          url: "https://taewok.github.io/posts/react-query/",
        },
        {
          title: "React 제공 함수인 lazy() 숙지",
          url: "https://taewok.github.io/posts/react-lazy/",
        },
        {
          title: "sweet alert2 라이브러리 사용",
          url: "https://taewok.github.io/posts/jwt-login%EB%B0%A9%EC%8B%9D/",
        },
      ],
    },
    {
      title: "Twogather",
      siteExplain: `음식점 검색과 등록 사이트로 
      카테고리, 키워드, 지역, 가게 명을 사용하여 음식점을 검색하고 다양한 정렬 순서로 정렬된 결과를 확인할 수 있습니다.
      자신의 가게를 등록해서 홍보를 할 수도 있으며, 리뷰를 작성할 수도 있으며 자신의 가게라면 작성한 리뷰에 대댓글로 답변을 할 수도 있습니다.
      관리자 계정을 통해서 신청된 가게들을 승인/거부하며 거부 시에는 사유를 입력하게 됩니다.
      로그인한 회원들은 자신의 정보를 변경하고 탈퇴할 수 있으며 아이디나 비밀번호를 잃어버린 회원들은 자신의 정보를 찾을 수 있습니다.`,
      function: [
        "댓글/대댓글 CRUD",
        "사용자 권한별 ui",
        "좋아요 추가/해제",
        "페이지네이션",
        "가게 CRUD",
        "회원가입",
        "필터링",
        "모달창",
        "로그인",
        "pw찾기",
        "id찾기",
      ],
      skill: [
        "React",
        "TypeScript",
        "React-Query",
        "Recoil",
        "Styled-Components",
      ],
      img: [
        "https://user-images.githubusercontent.com/66842566/253209413-b574649c-ebb5-4cf6-b282-1a6693ffd6b5.gif",
        "https://user-images.githubusercontent.com/66842566/253203697-b3efb2e6-d37b-4f49-8e87-d10e3e1f28a7.gif",
        "https://user-images.githubusercontent.com/66842566/253204018-a2231219-b886-4fa0-a39b-e3c09f5b2d8f.gif",
        "https://user-images.githubusercontent.com/66842566/253202618-bccee6fc-a390-48e0-b49d-12fb929631c4.gif",
      ],
      siteUrl: "https://twogather.netlify.app",
      githubUrl: "https://github.com/TWOGATH3R/twogather-web-frontend",
      blog: [
        {
          title: "jwt와 jwt + refreshToke + accessToken로그인 방식에 이해",
          url: "https://taewok.github.io/posts/jwt-login%EB%B0%A9%EC%8B%9D/",
        },
        {
          title: "accessToken에 payload를 decoding을 통하여 정보 읽기",
          url: "https://taewok.github.io/posts/jwt-Token-decoding/",
        },
        {
          title: "axios interceptors를 사용해 api 통신 처리시 반복부분 간결화",
          url: "https://taewok.github.io/posts/axios-interceptors/#interceptors-%EC%82%AC%EC%9A%A9%EB%B2%95",
        },
        {
          title: "Query String 형식을 이용한 URL경로를 통한 매개변수 전달",
          url: "https://taewok.github.io/posts/query-string/",
        },
        {
          title: "path parameter를 사용해 URL경로를 통한 변수 전달",
          url: "https://taewok.github.io/posts/path-Parameter/",
        },
        {
          title: "react-query가 V4 업데이트로 인한 import 에러해결",
          url: "https://taewok.github.io/posts/No-QueryClient-set,-use-QueryClientProvider-to-set-one/",
        },
        {
          title: "axios error 핸들링중 객체 안나오는 현상 문제해결",
          url: "https://taewok.github.io/posts/Cannot-destructure-property-'data'-of-'(intermediate-value)'-as-it-is-undefined/",
        },
        {
          title:
            "타입스크립트 setState hook을 자식 컴포넌트로 전달할 떄 is not a function 문제해결",
          url: "https://taewok.github.io/posts/in-not-a-function/",
        },
      ],
    },
  ];

  return (
    <ProjectsBox className="projectsBox">
      <ProjectList id="projectList">
        {projectArray.map((v) => (
          <ProjectItem key={v.title}>
            <Project data={v} />
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsBox>
  );
};

const ProjectsBox = styled.section`
  width: 100%;
  height: 200vw;
  background-color: #8080ff;
`;
const ProjectList = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  overflow-x: hidden;
  width: 200%;
  height: 100vh;
  list-style: none;
`;
const ProjectItem = styled.li`
  box-sizing: border-box;
  padding: 60px 5vw 0 5vw;
  width: 100vw;
  height: 100%;
  background-color: white;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  text-align: center;
  transition: all 1s;
`;

export default Projects;
