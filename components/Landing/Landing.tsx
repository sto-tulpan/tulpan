import * as React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

import { useInView } from "scripts/useInView";
import { Card } from ".";
import { Actions } from "./Actions";

const levitation = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Wrapper = styled.div`
  color: #222a45;

  padding: 64px 0;

  & > .title {
    display: block;
    position: relative;
    & .hero {
      position: absolute;
      right: 5vw;
      z-index: -1;

      width: min(40vw, 640px);
      height: auto;
      top: -12px;
      animation: 10s ${levitation} infinite ease-in-out;

      transition: opacity 1.4s ease-in;

      &[data-visible="false"] {
        opacity: 0;
      }

      @media (max-width: 1023px) {
        display: none;
      }
    }
  }
`;

const backgroundTransition = keyframes`
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 300%;
  }
`;

const TitleWrapper = styled.div`
  margin: 0px min(64px, 6.25vw) 48px;

  & > div {
    transition: opacity 1s ease;

    &[data-visible="false"] {
      opacity: 0;
    }

    & > h1 {
      font-style: normal;
      font-size: clamp(24px, 11vw, 80px);
      line-height: calc(2px + 2ex + 2px);
      margin-bottom: min(0.5em, 40px);
      overflow: hidden;

      & span {
        display: block;
        font-size: clamp(24px, 15vw, 100px);
        font-variation-settings: "wght" 750;
        position: relative;

        background: linear-gradient(
          90deg,
          #ff3362 0%,
          #ff5562 15%,
          #ffbe47 35%,
          #ff64af 50%,
          #b278ff 70%,
          #ca75fb 85%,
          #ff3362 100%
        );
        background-size: 300%;
        background-clip: text;
        background-repeat: repeat-x;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: 20s ${backgroundTransition} linear infinite;
        overflow: hidden;
      }
    }

    & p {
      color: #222a45;
      margin-top: 32px;
      margin-bottom: 4px;
      max-width: 550px;
      line-height: 1.5;
      margin-bottom: 40px;

      padding-right: 1.5em;
    }
  }
  & button,
  & a {
    border-radius: 16px;
    transition: all 0.2s ease-out, opacity 1s ease-in;

    &[data-visible="false"] {
      opacity: 0;
    }
  }
`;

const Cards = styled.div`
  overflow: auto;
  transition: opacity 1.5s ease-in;
  scroll-snap-type: x mandatory;

  &[data-visible="false"] {
    opacity: 0;
  }

  & > .conveyor {
    display: flex;
    flex-wrap: nowrap;
    grid-auto-flow: column;
    padding: 32px min(64px, 6.25vw);
    width: fit-content;

    & > div:not(:last-child) {
      margin-right: min(4vw, 20px);
    }
  }
`;

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "0px" });

  return (
    <Wrapper ref={ref}>
      <div className="title">
        <TitleWrapper>
          <div data-visible={visible}>
            <h1>
              Автосервис
              <br />
              <span>С ДУШОЙ</span>
            </h1>
            <div data-font-size="Focus">
              <p>
                Качественное обслуживание ходовой и двигателя. Ремонт выхлопных
                систем. Устранение проблем с автоэлектрикой.
              </p>
            </div>
          </div>
          <Actions visible={visible} />
        </TitleWrapper>

        <div className="hero" data-visible={visible}>
          <Image
            src="/images/motor.jpg"
            alt="Мотор Wolksvagen"
            width={865}
            height={1027}
            priority
          />
        </div>
      </div>

      <Cards data-visible={visible}>
        <div className="conveyor">
          <Card
            color="green"
            title="Обслуживание"
            content={
              <ul>
                <li>Замена жидкостей</li>
                <li>Вырезка катализаторов</li>
                <li>Замена глушителей, резонаторов, гофр</li>
              </ul>
            }
          />
          <Card
            color="red"
            title="Комплектующие"
            content={
              <ul>
                <li>Большой выбор гофр, стронгеров, глушителей</li>
                <li>Качественные детали ходовой части автомобиля</li>
              </ul>
            }
          />
          <Card
            color="purple"
            title="Поддержка"
            content={
              <ul>
                <li>Бесплатный осмотр</li>
                <li>Плановые ТО</li>
                <li>Консультации</li>
              </ul>
            }
          />
        </div>
      </Cards>
    </Wrapper>
  );
};
