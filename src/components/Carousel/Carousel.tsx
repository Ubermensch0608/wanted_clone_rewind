import { SlideButton } from "layout";
import React, { FC, useEffect, useRef, useState } from "react";

import styled, { css } from "styled-components";

export interface SliderData {
  id: string;
  title: string;
  sub: string;
  imageUrl: string;
}

const Carousel: FC<{ slides: SliderData[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  const TOTAL_SLIDES = slides.length - 1;

  useEffect(() => {
    slideRef.current!.style.transition = "all 0.5s ease-in-out";
    slideRef.current!.style.transform = `translateX(-${
      (currentSlide - 3) * 1034
    }px)`;
  }, [currentSlide]);

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

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <CarouselWrapper>
      <Slides ref={slideRef}>
        {slides.map((data: SliderData, index: number) => (
          <Slide
            key={data.id}
            isActive={index === currentSlide}
            isSide={
              index - 1 === currentSlide ||
              index + 1 === currentSlide ||
              index === currentSlide
            }
          >
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
      {currentSlide}
      <PrevButton onClick={prevSlideHandler}>{"<"}</PrevButton>
      <NextButton onClick={nextSlideHandler}>{">"}</NextButton>
    </CarouselWrapper>
  );
};

export const CarouselWrapper = styled.div`
  user-select: none;
`;

const Slides = styled.ul`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slide = styled.li<{ isActive: boolean; isSide: boolean }>`
  filter: ${(props) =>
    !props.isActive ? "brightness(50%)" : "brightness(100%)"};
  opacity: ${(props) => (props.isSide ? "1" : "0")};
`;

export const SlideImage = styled.img`
  width: 1034px;
  height: 100%;
  border-radius: 4px;
`;

export const SlideInfo = styled.div`
  text-align: center;

  @media (min-width: 1200px) {
    position: absolute;
    bottom: 250px;
    left: 300px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;

    text-align: left;
  }

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

const PrevButton = styled(SlideButton)`
  left: calc((25%-1210px) / 2);
`;

const NextButton = styled(SlideButton)`
  right: calc((25%-1210px) / 2);
`;

export default Carousel;
