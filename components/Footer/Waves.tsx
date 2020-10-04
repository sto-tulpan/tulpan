import * as React from "react";
import styled from "styled-components";

const WavesContainer = styled.div`
  & .waves {
    position: relative;
    width: 100%;
    height: 5vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
    z-index: -1;
  }

  & .parallax > use {
    animation: move-forever 40s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & .parallax > use:nth-child(1) {
    animation-delay: -4s;
    animation-duration: 14s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -6s;
    animation-duration: 20s;
  }
  & .parallax > use:nth-child(3) {
    animation-delay: -8s;
    animation-duration: 26s;
  }
  & .parallax > use:nth-child(4) {
    animation-delay: -10s;
    animation-duration: 40s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    & .waves {
      height: 40px;
      min-height: 40px;
    }
  }
`;

interface WavesProps {}

export const Waves: React.FC<WavesProps> = React.memo(() => (
  <WavesContainer>
    <svg
      className="waves"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7)" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0,0,0,1)" />
      </g>
    </svg>
  </WavesContainer>
));
