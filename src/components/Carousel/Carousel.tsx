import React, { useEffect, useRef, useState } from "react";
import { DUMMY_SLIDER } from "utils/index";

import styled from "styled-components";

export interface sliderData {
  id: string;
  title: string;
  sub: string;
  imageUrl: string;
}

const TOTAL_SLIDES = 6;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  const prevSlideHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const nextSlideHandler = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current!.style.transition = "all 0.5s ease-in-out";
    slideRef.current!.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <CarouselWrapper>
      {currentSlide}
      <Slides ref={slideRef}>
        {DUMMY_SLIDER.map((data: sliderData) => (
          <Slide key={data.id}>
            <SlideImage src={data.imageUrl} alt={data.title} />
            <SlideInfo>
              <h2>{data.title}</h2>
              <h3>{data.sub}</h3>
              <a href="/">
                <span>바로가기</span>
                <span>{` >`}</span>
              </a>
            </SlideInfo>
          </Slide>
        ))}
      </Slides>
      <button onClick={prevSlideHandler}>이전으로</button>
      <button onClick={nextSlideHandler}>다음으로</button>
    </CarouselWrapper>
  );
};

export const CarouselWrapper = styled.div``;

const Slides = styled.ul`
  position: relative;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Slide = styled.li`
  display: inline-block;
  width: 100%;
`;

export const SlideImage = styled.img`
  width: 1034px;
  height: 100%;
  border-radius: 4px;
`;

export const SlideInfo = styled.div`
  text-align: center;

  h2,
  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  h2 {
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
    color: #333;
  }

  h3 {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 500;
    color: #666;
  }

  a {
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 700;
    color: #36f;
    text-decoration: none;
  }
`;

export default Carousel;
