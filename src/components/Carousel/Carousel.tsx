import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import SlideInfo from "./SlideInfo";
import { PrevArrow, NextArrow } from "assets/index";
import { SliderData } from "./types";

import * as Styled from "./styles";

const Carousel: FC<{ slides: SliderData[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const slideRef = useRef<HTMLUListElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const TOTAL_SLIDES = slides.length - 2;

  useEffect(() => {
    const childrenNode = slideRef.current!.children[0];
    const SLIDE_WIDTH = childrenNode.clientWidth;
    // slideRef.current!.style.transform = `translateX(${
    //   -(slides.length / TOTAL_SLIDES) * SLIDE_WIDTH
    // }px)`;

    slideRef.current!.style.transform = `translateX(${
      -(currentSlide - 4) * SLIDE_WIDTH
    }px)`;
    // if (currentSlide === TOTAL_SLIDES - 1) {
    //   setTimeout(() => {
    //     slideRef.current!.style.transition = `0s`;
    //     setCurrentSlide(0);
    //   }, 501);
    //   setTimeout(() => {
    //     // slideRef.current!.style.transition = `all 0.5s ease-in-out`;
    //   }, 501);
    // }
  }, [currentSlide]);

  const prevSlideHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const nextSlideHandler = useCallback(() => {
    if (currentSlide !== TOTAL_SLIDES) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else if (currentSlide === TOTAL_SLIDES) {
      setCurrentSlide(1);
    }
  }, [currentSlide, TOTAL_SLIDES]);

  useEffect(() => {
    const autoSlide: any = setInterval(() => {
      if (!isMouseOver) {
        nextSlideHandler();
      }
    }, 4000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [currentSlide, isMouseOver, nextSlideHandler]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const slidePauseHandler = () => {
    setIsMouseOver(true);
  };
  const slideReStartHandler = () => {
    setIsMouseOver(false);
    setIsDrag(false);
  };

  const startDragHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDrag(true);
    setStartX(event.pageX + slideRef.current!.scrollLeft);
  };

  const mouseDragHandler = (event: React.MouseEvent) => {
    if (isDrag) {
      slideRef.current!.scrollLeft = startX - event.pageX;
    }
  };

  const endDragHandler = (event: React.MouseEvent) => {
    if (isDrag) {
      if (startX > event.pageX) {
        nextSlideHandler();
      } else {
        prevSlideHandler();
      }
    }

    setIsDrag(false);
  };

  return (
    <Styled.CarouselContainer ref={scrollRef}>
      <Styled.Slides
        ref={slideRef}
        onMouseEnter={slidePauseHandler}
        onMouseLeave={slideReStartHandler}
        onMouseDown={startDragHandler}
        onMouseMove={mouseDragHandler}
        onMouseUp={endDragHandler}
      >
        {slides.map((data: SliderData, index: number) => (
          <Styled.Slide
            key={data.id}
            isActive={index === currentSlide}
            showSlides={
              index === currentSlide - 1 ||
              index === currentSlide ||
              index === currentSlide + 1
            }
          >
            <Styled.SlideImage src={data.imageUrl} alt={data.title} />
            <SlideInfo
              index={index}
              currentSlide={currentSlide}
              title={data.title}
              sub={data.sub}
            />
          </Styled.Slide>
        ))}
      </Styled.Slides>
      <Styled.PrevButton onClick={prevSlideHandler}>
        <PrevArrow />
      </Styled.PrevButton>
      <Styled.NextButton onClick={nextSlideHandler}>
        <NextArrow />
      </Styled.NextButton>
    </Styled.CarouselContainer>
  );
};

export default Carousel;
