import styled from "styled-components";

const SlideButton = styled.button`
  position: absolute;
  top: 47%;
  width: 30px;
  height: 60px;
  z-index: 100;

  display: flex;
  align-items: center;

  background-color: #fff;
  border-radius: 15px;
  border: 0;
  font-size: 16px;
  opacity: 0.5;

  cursor: pointer;
  user-select: none;

  @media (max-width: 1199px) {
    display: none;
  }
`;
export { SlideButton };
