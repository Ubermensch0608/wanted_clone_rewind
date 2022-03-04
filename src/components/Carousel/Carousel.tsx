import { SlideButton } from "layout";
import React, { FC, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { transform } from "typescript";

export interface SliderData {
  id: string;
  title: string;
  sub: string;
  imageUrl: string;
}

const Carousel: FC<{ slides: SliderData[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef<HTMLUListElement>(null);

  const TOTAL_SLIDES = slides.length - 2;

  useEffect(() => {
    // slideRef.current!.style.transform = `translateX(${
    //   -(currentSlide - 4) * 1058
    // }px)`;
  }, [currentSlide]);

  const prevSlideHandler = () => {
    if (currentSlide === 1) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const nextSlideHandler = () => {
    slideRef.current!.style.transform = `translateX(-14.286%)`;

    // if (currentSlide !== TOTAL_SLIDES) {
    //   setCurrentSlide((prevSlide) => prevSlide + 1);
    // } else if (currentSlide === TOTAL_SLIDES) {
    //   setCurrentSlide(1);
    // }
  };

  //   useEffect(() => {
  //     const autoSlide: any = setTimeout(() => {
  //       nextSlideHandler();

  //       return clearTimeout(autoSlide);
  //     }, 4000);
  //   }, [currentSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const setNewSlideHandler = () => {
    const firstElementChild: any = slideRef.current!.firstElementChild;
    slideRef.current!.appendChild(firstElementChild);
    slideRef.current!.style.transition = `none`;
    slideRef.current!.style.transform = `transitionX(0)`;
    setTimeout(() => {
      slideRef.current!.style.transition = `all 0.5s ease-in-out`;
    });
  };

  return (
    <CarouselContainer>
      <Slides ref={slideRef}>
        {slides.map((data: SliderData, index: number) => (
          <Slide
            key={data.id}
            isActive={index === currentSlide}
            showSlides={
              index === currentSlide - 1 ||
              index === currentSlide ||
              index === currentSlide + 1
            }
            onTransitionEnd={setNewSlideHandler}
          >
            <SlideImage src={data.imageUrl} alt={data.title} />

            <SlideInfo isActive={index === currentSlide}>
              <h2>{data.title}</h2>
              <h3>{data.sub}</h3>
              <hr />
              <a href="/">
                <span>바로가기</span>
                <span>{">"}</span>
              </a>
            </SlideInfo>
          </Slide>
        ))}
      </Slides>
      <PrevButton onClick={prevSlideHandler}>{"<"}</PrevButton>
      <NextButton onClick={nextSlideHandler}>{">"}</NextButton>
    </CarouselContainer>
  );
};

export const CarouselContainer = styled.div`
  user-select: none;
  width: 100%;
  max-width: 1580px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Slides = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* test */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  transition: all 0.5s ease-in-out;
`;

const Slide = styled.li<{ isActive: boolean; showSlides: boolean }>`
  padding: 0 12px;
  height: 100%;
  cursor: pointer;
  filter: ${(props) =>
    !props.isActive ? "brightness(50%)" : "brightness(100%)"};
`;

export const SlideImage = styled.img`
  width: 1034px;
  height: 100%;
  border-radius: 4px;
`;

export const SlideInfo = styled.div<{ isActive: boolean }>`
  text-align: center;
  opacity: ${(props) => (!props.isActive ? "0" : "1")};
  transition: opacity 0.1s ease-out;

  @media (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    left: 34px;
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

    @media (min-width: 1200px) {
      margin: 20px 20px 0 20px;
      font-size: 20px;
      line-height: 1.5;
    }
  }

  h3 {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 500;
    color: #666;

    @media (min-width: 1200px) {
      margin: 0 20px;
      font-size: 14px;
      color: #333;
      height: 44px;
      line-height: 1.64;
    }
  }

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    box-sizing: border-box;

    padding: 6px 8px;
    font-size: 14px;
    font-weight: 700;
    color: #36f;
    line-height: 1;
    height: 40px;
    text-decoration: none;

    @media (min-width: 1200px) {
      margin: 6px 0 0 13px;
    }
  }

  hr {
    display: none;
    height: 1px;
    margin: 0;
    border: none;
    flex-shrink: 0;
    background-color: #ececec;

    @media (min-width: 1200px) {
      display: block;
    }
  }
`;

const PrevButton = styled(SlideButton)`
  left: calc((22%-1058px) / 2);
`;

const NextButton = styled(SlideButton)`
  right: calc((22%-1058px) / 2);
`;

export default Carousel;
