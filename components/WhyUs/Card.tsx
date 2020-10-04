import * as React from "react";
import styled from "styled-components";

interface WrapperProps {
  bgColor?: string;
}
const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  overflow: hidden;

  & > .thumbnail {
    background: ${({ bgColor = "ece9f4" }) => bgColor};
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 58.35%;

    & img {
      border: none;
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      transition: all 0.2s ease;
      width: 100%;
      &:hover {
        transform: scale(1.02);
      }
      &:active {
        transform: scale(0.99);
      }
    }
  }
  & > .content {
    color: #000000;
    padding: 20px;

    padding: 20px 12px;

    & > h4 {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 12px;
    }
    & p {
      color: #222a45;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

interface CardProps extends WrapperProps {
  image: string;
  alt?: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = React.memo(
  ({ bgColor = "#ece9f4", image, alt = "", title = "", description = "" }) => (
    <Wrapper bgColor={bgColor}>
      <div className="thumbnail">
        {image && <img src={image} alt={alt} loading="lazy" />}
      </div>
      <div className="content">
        <h4 data-font-size="X">{title}</h4>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
);
