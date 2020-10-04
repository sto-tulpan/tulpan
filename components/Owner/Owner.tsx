import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts/useInView";
import { Button } from "components";

const Wrapper = styled.div`
  padding: 64px min(64px, 6.25vw) 128px;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    opacity: 0;
  }

  & > .image-wrapper {
    width: 180px;
    height: 180px;
    max-width: 100%;
    margin: auto;

    & > div {
      position: relative;
      height: 0;
      padding-bottom: 100%;

      border-radius: 50%;
      overflow: hidden;

      cursor: pointer;
      transition: var(--transition-ease);

      &:hover {
        transform: scale(1.01);
      }
      &:active {
        transform: scale(0.99);
      }

      & > img {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  & > .text-wrapper {
    text-align: center;
    margin-top: 32px;
    & h5 {
      font-size: 32px;
      line-height: 36px;

      & > * {
        display: inline;
      }
      & div {
        font-size: 30px;
      }
    }
    & p {
      color: #222a45;
      max-width: 800px;
      margin: auto;
      margin-top: 20px;
      line-height: 1.5;

      font-weight: 400;
      font-variation-settings: "wght" 420;
    }
    & .action-button {
      margin-top: 36px;
      & a {
        margin: auto;
      }
    }
  }
`;

interface OwnerProps {}

export const Owner: React.FC<OwnerProps> = React.memo(() => {
  const { visible, ref } = useInView({
    rootMargin: "-300px 0px",
  });

  return (
    <Wrapper ref={ref} data-visible={visible}>
      <div className="image-wrapper">
        <div>
          <img src="images/profile.jpg" alt="Owner" />
        </div>
      </div>
      <div className="text-wrapper">
        <h5 data-font-size="Large" data-font-weight="Semibold">
          Работаем для вас
          <br />
          <div>
            более десяти лет{" "}
            <span role="img" aria-label="Конфети">
              🎉
            </span>
          </div>
        </h5>
        <p data-font-size="focus">
          Наш сервис направлен на качественные и доступные услуги для
          автолюбителей любого уровня. Обращаясь к нам, вы всегда можете быть
          уверены, что получете классное и профессиональное решение именно вашей
          проблемы.
        </p>
        <div className="action-button">
          <Button as="a" href="tel:+38067 466 6395" data-font-size="focus">
            Записаться на диагностику
          </Button>
        </div>
      </div>
    </Wrapper>
  );
});
