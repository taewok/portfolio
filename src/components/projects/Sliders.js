import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Sliders = ({ imgList }) => {
  return (
    <Containder>
      <Carousel>
        {imgList.map((v) => (
          <img
            src="https://i.ytimg.com/vi/9xd1oX0st4Q/maxresdefault.jpg"
            key={v}
            alt={v}
          />
        ))}
      </Carousel>
    </Containder>
  );
};

const Containder = styled.div`
  width: 50%;
  img {
    width: 100px;
    height: 100px;
  }
`;

export default Sliders;
