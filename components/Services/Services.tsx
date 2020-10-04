import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts/useInView";
import { Card } from ".";
import { Medal, Tool, Truck, Pull, Smile, Battery } from "./icons";

const Wrapper = styled.div`
  padding: 32px min(64px, 6.25vw);

  & > div.content {
    background: #fafafa;
    border-radius: 32px;
    padding: 64px min(64px, 6.25vw);
    transition: opacity 1s ease;

    &[data-visible="false"] {
      opacity: 0;
    }

    & > .text {
      margin-bottom: 40px;
      & > h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 52px;
      }
      & > p {
        color: #222a45;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        margin-top: 20px;
      }
    }

    & > .grid {
      display: grid;
      gap: clamp(20px, 2.5vw, 32px);
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      max-width: 1400px;

      @media (max-width: 520px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      & > div:last-child {
        & svg {
          transform: translateX(2px);
        }
      }
    }
  }

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
    & > div.content {
      border-radius: 0;
      padding-left: min(64px, 6.25vw);
      padding-right: min(64px, 6.25vw);
    }
  }
`;

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = React.memo(() => {
  const { visible, ref } = useInView({ rootMargin: "-240px 0px" });

  return (
    <Wrapper id="services">
      <div className="content" ref={ref} data-visible={visible}>
        <div className="text">
          <h2>Наши услуги</h2>
          <p>Ремонт и обслуживание вашего автомобиля</p>
        </div>
        <div className="grid">
          <Card
            title="Осмотр и Консультация"
            description="Мастера с опытом помогут найти и определить проблему"
            icon={<Medal />}
          />
          <Card
            title="Техобслуживание"
            description="Правильное обслуживание поможет машине служить долго"
            icon={<Tool />}
          />
          <Card
            title="Ремонт и Замена"
            description="Оперативное устранение неисправностей"
            icon={<Truck />}
          />
          <Card
            title="Ремонт Ходовой"
            description="Чтобы машина не делала лишних звуков и скрежетов"
            icon={<Pull />}
          />
          <Card
            title="Бюджетные решения"
            description="Родные детали и технические аналоги без наценок"
            icon={<Smile />}
          />
          <Card
            title="Автоэлектрик"
            description="Электроника, бортовой компьютер, сигнализация"
            icon={<Battery />}
          />
        </div>
      </div>
    </Wrapper>
  );
});
