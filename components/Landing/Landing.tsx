import * as React from "react";
import styled, { keyframes } from "styled-components";
import Img from "react-optimized-image";

import { scrollTo } from "scripts/scrollTo";
import { useInView } from "scripts/useInView";
import { Button } from "components";
import { Card } from ".";
import Motor from "./motor.jpg";

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
    & img {
      position: absolute;
      right: 5vw;
      z-index: -1;

      width: min(40vw, 540px);
      height: auto;
      top: -48px;
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
      margin-bottom: 40px;

      & span {
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
        backface-visibility: hidden;

        animation: 20s ${backgroundTransition} linear infinite;
      }
    }

    & p {
      color: #222a45;
      margin-top: 32px;
      margin-bottom: 40px;
      max-width: 580px;
      line-height: 1.5;
    }
  }
  & button,
  & a {
    border-radius: 16px;

    transition: opacity 1s ease-in;

    &[data-visible="false"] {
      opacity: 0;
    }
  }
`;

const Cards = styled.div`
  overflow: auto;
  transition: opacity 1.5s ease-in;

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
      margin-right: 20px;
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
            <p data-font-size="Focus">
              Ремонт и обслуживание выхлопных систем. Качественные детали для
              автомобилей всех ценовых категорий.
            </p>
          </div>
          <Button
            data-font-weight="600"
            data-visible={visible}
            as="a"
            href="#map"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#map");
            }}
          >
            Как до нас добраться
          </Button>
        </TitleWrapper>

        <Img src={Motor} alt="Мотор Wolksvagen" data-visible={visible} webp />
      </div>

      <Cards data-visible={visible}>
        <div className="conveyor">
          <Card
            color="green"
            title="Обслуживание"
            content="Ремонт и замена деталей любой сложности"
            icon="⭐️"
          />
          <Card
            color="red"
            title="Комплектующие"
            content="Большой выбор запчастей: глушители, гофры, катализаторы"
            icon="🚀"
          />
          <Card
            color="purple"
            title="Поддержка"
            content="Бесплатный осмотр, консультации, индивидуальный подход"
            icon="💎"
          />
        </div>
      </Cards>
    </Wrapper>
  );
};
