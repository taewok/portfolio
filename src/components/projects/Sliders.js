import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Sliders = ({ imgList }) => {
  return (
    <Containder>
      <Carousel>
        {imgList.map((v) => (
          <img src={v} key={v} alt={v} />
        ))}
      </Carousel>
    </Containder>
  );
};

const Containder = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  .carousel-slider {
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.5);
  }
  .carousel-status {
    display: none;
  }
  @media screen and (max-width: 1080px) {
    margin: 0 auto;
    padding-top: 100px;
    width: 80%;
  }
`;

export default Sliders;
