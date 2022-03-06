import { SlideButton } from "layout";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  user-select: none;
  width: 100%;
  max-width: 1580px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`;

export const Slides = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

export const Slide = styled.li<{ isActive: boolean; showSlides: boolean }>`
  padding: 0 12px;
  cursor: pointer;
  filter: ${(props) =>
    !props.isActive ? "brightness(50%)" : "brightness(100%)"};
`;

export const SlideImage = styled.img`
  width: 1034px;

  height: 100%;
  border-radius: 4px;

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 90vw;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    width: 90vw;
    height: 50vw;
  }
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

  span {
    display: flex;
  }
`;

export const PrevButton = styled(SlideButton)`
  left: calc((22%-1058px) / 2);
`;

export const NextButton = styled(SlideButton)`
  right: calc((22%-1058px) / 2);
`;
