import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts/useInView";
import { Card } from ".";

const Wrapper = styled.div`
  padding: 64px min(64px, 6.25vw) 72px;
  background-color: #fafafa;

  transition: opacity 1s ease, transform 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > div {
    max-width: 1440px;
    margin: auto;

    & > .text {
      margin-bottom: 40px;

      & > p {
        color: #222a45;
        margin-top: 20px;
      }
    }
    & > .grid {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;

      max-width: 1272px;

      transition: opacity 1s ease, transform 1s ease;

      &[data-visible="false"] {
        transform: translateY(12px);
        opacity: 0;
      }

      @media (max-width: 920px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;

interface ComponentsProps {}

export const Components: React.FC<ComponentsProps> = React.memo(() => {
  const { visible, ref } = useInView({
    rootMargin: "-240px 0px",
  });
  const { visible: visible2, ref: ref2 } = useInView({
    rootMargin: "-240px 0px",
  });

  return (
    <Wrapper id="components" ref={ref} data-visible={visible}>
      <div>
        <div className="text">
          <h2>Комплектующие</h2>
          <p data-font-size="X">Европейское качество по украинским ценам.</p>
        </div>
        <div className="grid" ref={ref2} data-visible={visible2}>
          <Card
            imgSrc="turbo.png"
            title="Глушители"
            description="Только лучшее для вашего автомобиля. Любые формы на заказ."
            footer="От 700 гривен →"
          />
          <Card
            imgSrc="gofra.png"
            title="Гофры"
            description="Все размеры от производителя. Подгоним на месте."
            footer="От 500 гривен →"
          />
          <Card
            imgSrc="catalyst.png"
            title="Катализаторы"
            description="Новые / БУ + Родные аналоги на популярные модели."
            footer="От 2500 гривен →"
          />
          <Card
            imgSrc="parts.png"
            title="Импорт деталей"
            description={
              <>
                Купим, доставим и установим нужную деталь. Просто скиньте ссылку{" "}
                <span role="img" aria-label="эмодзи палец показывает вниз">
                  👇
                </span>
              </>
            }
            footer="Цена договорная →"
            data-special
          />
        </div>
      </div>
    </Wrapper>
  );
});
