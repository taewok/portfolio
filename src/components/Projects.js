import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect } from "react";

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

  return (
    <ProjectsBox className="projectsBox">
      <ProjectList id="projectList">
        <ProjectItem>page1</ProjectItem>
        <ProjectItem>Page2</ProjectItem>
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
  width: 100vw;
  height: 100%;
  background-color: white;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  text-align: center;
  transition: all 1s;
`;

export default Projects;
