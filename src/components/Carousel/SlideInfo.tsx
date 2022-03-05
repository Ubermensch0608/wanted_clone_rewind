import { BlueArrow } from "assets/index";
import { FC } from "react";
import * as Styled from "./styles";

export interface SlideInfoProps {
  index: number;
  currentSlide: number;
  title: string;
  sub: string;
}

const SlideInfo: FC<SlideInfoProps> = ({ index, currentSlide, title, sub }) => {
  return (
    <Styled.SlideInfo isActive={index === currentSlide}>
      <h2>{title}</h2>
      <h3>{sub}</h3>
      <hr />
      <a href="/">
        <span>
          바로가기 <BlueArrow width={14} height={14} fill={"#36f"} />
        </span>
      </a>
    </Styled.SlideInfo>
  );
};

export default SlideInfo;
