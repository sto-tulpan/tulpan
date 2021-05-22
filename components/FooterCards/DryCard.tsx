import * as React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import Image from "next/image";

import { Button } from "components";
import { Card } from ".";

const StyledCard = styled(Card)`
  background: url("bg_card.png"), #000;
  padding: 40px 40px 48px;

  & > div.content {
    font-size: clamp(20px, 8vw, 40px);
    font-weight: 700;
    font-variation-settings: "wght" 700;

    & button,
    & a {
      margin-top: 40px;
    }
  }
  & .illustration {
    position: absolute;
    right: 0;
    top: 60px;
    width: clamp(240px, 25vw, 320px);
  }

  @media (min-width: 941px) and (max-width: 1062px) {
    & > div.content {
      & button,
      & a {
        margin-top: 88px;
      }
    }
    & .illustration {
      top: 120px;
    }
  }
  @media (max-width: 640px) {
    padding: 40px 24px 32px;
    text-align: center;

    & > div.content {
      & > * {
        line-height: 1.1;
      }

      & button,
      & a {
        margin-top: 35%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    & .illustration {
      top: 140px;
      right: 32px;
      left: 48px;
      width: calc(100% - 64px);
    }
  }
`;

interface DryCardProps {}

export const DryCard: React.FC<DryCardProps> = React.memo(() => (
  <div>
    <Tilt className="Tilt" options={{ max: 10, scale: 1.05 }}>
      <StyledCard className="card">
        <div className="content">
          <div>
            Химчистка и<br />
            Перешивка
            <br />
            салонов
          </div>
          <Button as="a" href="tel:+380639368289">
            Хочу!
          </Button>
        </div>
        <div className="illustration">
          <Image
            src="/images/footer_cards/cardry.png"
            alt="Машина чистки высоким давлением"
            width={753}
            height={800}
            loading="eager"
          />
        </div>
      </StyledCard>
    </Tilt>
  </div>
));
