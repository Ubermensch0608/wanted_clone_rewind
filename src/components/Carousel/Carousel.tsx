import { FC, useEffect, useRef, useState } from "react";

import SlideInfo from "./SlideInfo";
import { PrevArrow, NextArrow } from "assets/index";
import { SliderData } from "./types";

import * as Styled from "./styles";

const Carousel: FC<{ slides: SliderData[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef<HTMLUListElement>(null);

  const TOTAL_SLIDES = slides.length - 2;

  useEffect(() => {
    slideRef.current!.style.transform = `translateX(${
      -(currentSlide - 4) * 1058
    }px)`;
  }, [currentSlide]);

  const prevSlideHandler = () => {
    if (currentSlide === 1) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const nextSlideHandler = () => {
    if (currentSlide !== TOTAL_SLIDES) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else if (currentSlide === TOTAL_SLIDES) {
      setCurrentSlide(1);
    }
  };

  // useEffect(() => {
  //   const autoSlide: any = setTimeout(() => {
  //     nextSlideHandler();

  //     return clearTimeout(autoSlide);
  //   }, 4000);
  // }, [currentSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Styled.CarouselContainer>
      <Styled.Slides ref={slideRef}>
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
