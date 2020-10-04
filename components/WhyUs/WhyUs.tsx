import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts/useInView";
import { Card } from ".";

const Wrapper = styled.div`
  padding: 80px 0;

  & > .text {
    text-align: center;
    margin-bottom: 48px;
    padding: 0 min(64px, 6.25vw);

    transition: all 1s ease;

    &[data-visible="false"] {
      opacity: 0;
    }

    & > p {
      color: #222a45;
      margin: auto;
      margin-top: 20px;
      max-width: 820px;
    }
  }
  & > .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    @media (max-width: 420px) {
      grid-template-columns: 1fr;
    }

    padding: 0 min(64px, 6.25vw);
    max-width: 1440px;
    margin: auto;

    transition: all 1s ease;

    &[data-visible="false"] {
      transform: translateY(12px);
      opacity: 0;
    }
  }
`;

interface WhyUsProps {}

export const WhyUs: React.FC<WhyUsProps> = React.memo(() => {
  const { visible, ref } = useInView({ rootMargin: "-180px 0px" });
  const { visible: visible2, ref: ref2 } = useInView({
    rootMargin: "-240px 0px",
  });

  return (
    <Wrapper id="whyUs">
      <div className="text" ref={ref} data-visible={visible}>
        <h2 data-font-size="Large">Почему нужно обслуживаться у нас?</h2>
        <p data-font-size="X">
          Мы ценим каждого клиента. Становитесь частью нашей большой семьи.
        </p>
      </div>
      <div className="grid" ref={ref2} data-visible={visible2}>
        <Card
          bgColor="#ECE9F4"
          image="images/Cards/car.jpg"
          title="Быстро"
          description="Персональное обслуживание в удобное для вас время"
        />
        <Card
          bgColor="#E6F6FF"
          image="images/Cards/disks.jpg"
          title="Качественно"
          description="Высококлассные мастера с многолетним опытом работы"
        />
        <Card
          bgColor="#ECE7FF"
          image="images/Cards/components.jpg"
          title="Дёшево"
          description="Не нужно переплачивать за обслуживание у официальных диллеров"
        />
        <Card
          bgColor="#EBFAFF"
          image="images/Cards/pistons.jpg"
          title="Смарт"
          description="Точечная работа с причинами проблем и их оптимальное решение"
        />
        <Card
          bgColor="#E8F9F2"
          image="images/Cards/consumables.jpg"
          title="Большой выбор комплектующих"
          description="Свой импорт деталей из Европы и Китая от более 30 брендов"
        />
        <Card
          bgColor="#F3F1F7"
          image="images/Cards/wheel.jpg"
          title="Бонусы постоянным клиентам"
          description="Получайте персональные скидки и приоритет обслуживания"
        />
      </div>
    </Wrapper>
  );
});
