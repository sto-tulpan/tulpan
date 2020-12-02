import * as React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

import { scrollTo } from "scripts/scrollTo";

const flow = keyframes`
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 100%;
  }
`;

const Wrapper = styled.div`
  border-radius: 24px;
  position: relative;
  transition: all 0.5s ease;

  & > div {
    background-color: var(--color-white);
    border-radius: 22px;
    color: var(--color-black);
    display: grid;
    gap: 32px;
    padding: 32px;
    height: 100%;
    box-shadow: var(--shadow);
    transition: var(--transition-ease);

    &:hover {
      box-shadow: var(--shadow-hover);
    }
    @media (min-width: 921px) {
      grid-template-columns: 100px 1fr;
    }
    @media (max-width: 920px) and (min-width: 640px) {
      grid-template-columns: 160px 1fr;
    }
    @media (max-width: 639px) {
      grid-template-rows: auto 1fr;
    }

    & > .card-icon {
      max-width: 100%;
      width: 160px;

      & > div {
        background: linear-gradient(
          45deg,
          rgba(245, 184, 255, 0.9) 17.71%,
          rgba(111, 136, 255, 0.9) 40.1%,
          rgba(245, 184, 255, 0.9) 70.83%,
          rgba(94, 255, 231, 0.9) 88.02%
        );
        background-size: 300%;
        animation: ${flow} 29s linear infinite;
        animation-direction: alternate;
        border-radius: 20px;
        min-width: 100px;
        height: 0;
        padding-bottom: 100%;

        cursor: pointer;

        position: relative;
        & > div {
          border: none;
          position: absolute;
          top: 0;
          right: 0;
          width: 125%;
          height: 125%;
          transition: transform 0.2s cubic-bezier(0.1, -0.02, 0.45, 1.05);

          transform-origin: right top;

          &:hover {
            transform: scale(1.02);
          }
          &:active {
            transform: scale(0.99);
          }
        }
      }
    }

    & > .card-content {
      @media (max-width: 920px) {
        padding: 0 2px;
      }
      & > h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        @media (max-width: 1020px) {
          font-size: 22px;
          line-height: 32px;
        }
      }
      & > p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        margin-top: 8px;
        margin-bottom: 16px;
        padding-right: 1em;
        max-width: 322px;
      }
      & > .card-footer {
        & a {
          text-decoration: none;
          color: inherit;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  &[data-special] {
    box-shadow: 12px 12px 52px rgba(51, 224, 121, 0.35);
    background: linear-gradient(101.48deg, #2adb82 10.77%, #2adb82 88.91%),
      #ffffff;
    padding: 2px;

    &::after {
      align-items: center;
      background: #2adc87;
      border-radius: 16px;
      content: "Собери сам!";
      color: #ffffff;
      display: flex;
      justify-content: center;
      font-family: "Montserrat", var(--sans-family);

      font-weight: bold;
      font-variation-settings: "wght" 600;

      font-size: 19px;
      line-height: 24px;

      padding: 4px 20px;
      position: absolute;
      right: -2px;
      top: -2px;

      transform: rotate(6deg);
    }
  }
`;

interface CardProps {
  title: string;
  description: string | React.ReactElement;
  footer: string;
  imgSrc: string;
  alt?: string;
}

export const Card: React.FC<CardProps> = React.memo(
  ({
    title = "",
    description = "",
    footer = "",
    imgSrc,
    alt = "",
    ...props
  }) => (
    <Wrapper {...props}>
      <div>
        <div className="card-icon">
          <div>
            <div>
              <Image
                src={`/images/components/${imgSrc}`}
                width={620}
                height={620}
                alt={alt}
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="card-footer" data-font-size="L">
            <a
              href="#map"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#map");
              }}
            >
              {footer}
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
);
