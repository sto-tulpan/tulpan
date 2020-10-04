import * as React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";

import { scrollTo } from "scripts/scrollTo";
import { Button } from "components";
import { Card } from ".";

const StyledCard = styled(Card)`
  background: linear-gradient(90deg, #4f56e4 0%, #118bd4 100%);

  & svg {
    z-index: 0;
    height: 100%;
    width: 100%;
  }

  & > div.content {
    font-size: clamp(20px, 8vw, 40px);
    font-weight: 700;
    font-variation-settings: "wght" 700;
    max-width: 400px;

    & button,
    & a {
      margin-top: 40px;

      background-color: #00bc5e;
      &:hover,
      &:focus {
        background-color: #12ce70;
      }
      &:active {
        background-color: #0aad5b;
      }
    }
  }
  & img {
    position: absolute;
    right: -48px;
    top: 100px;
    width: clamp(240px, 60vw, 492px);
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

    & img {
      top: 125px;
      right: -56px;
      left: -40px;
      width: calc(100% + 96px);
    }
  }
`;

const BG = React.memo(() => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 572 338">
    <path fill="url(#paint0_linear)" d="M0 0h572v338H0z" />
    <path
      opacity=".8"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59 175c9-71 104-92 164-130 42-27 87-41 134-59 57-23 110-73 169-59C587-59 634-3 657 56c20 54-13 111-18 170-5 58 24 124-11 171-36 47-105 44-162 58-58 14-118 43-173 20-54-23-68-111-105-158-39-72-138-72-129-142z"
      fill="url(#paint1_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1074 663c2 87 2 184-62 244-69 65-178 100-267 65-82-32-95-138-130-219-25-58-12-333 0-394 35-30 124 20 177-17 28-20-40-79 46-67 85 12 124 127 164 203 33 60 71 116 72 185z"
      fill="url(#paint2_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M54 239c66-11 81 29 135 67 50 34 115 55 138 111s-5 117-18 176c-13 60-14 126-57 170-44 45-110 71-173 65-59-5-93-67-146-93-62-30-147-14-189-68-43-57-51-143-20-207 30-62-16-221 36-265 51-43 229 55 294 44z"
      fill="url(#paint3_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M733 430c32-46 28-104 21-158-6-46-40-70-57-113-20-54 12-131-33-167-43-35-115-22-167 5-46 25-48 92-87 128-44 41-133 34-144 79-12 52 75 75 92 153 11 48 32 87 73 115 47 32 99 66 157 58 59-8 110-51 145-100z"
      fill="url(#paint4_linear)"
      fillOpacity=".9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M393 614c-31-42-62-93-51-144 11-48 98-61 119-106 23-49-42-117 0-150 63-48 202 39 254 74 43 29 74 66 85 116s-27 76-58 116c-25 31-54 55-83 82-44 42-71 118-132 120-59 3-99-60-134-108z"
      fill="url(#paint5_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="338"
        x2="572"
        y2="338"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4F56E4" />
        <stop offset="1" stopColor="#118BD4" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="206.5"
        y1="367"
        x2="680.7"
        y2="-61"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#346BE8" />
        <stop offset="1" stopColor="#72B6DF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="1095.6"
        y1="674.8"
        x2="578.4"
        y2="586.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0FA9DB" />
        <stop offset="1" stopColor="#0CC1F6" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="107.9"
        y1="223.5"
        x2="67.9"
        y2="322"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#444AE1" />
        <stop offset="1" stopColor="#4C58E3" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="389"
        y1="434.8"
        x2="739.7"
        y2="63.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#84FAB0" />
        <stop offset="1" stopColor="#8FD3F4" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="558"
        y1="609.2"
        x2="650.8"
        y2="170"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4062E0" />
        <stop offset="1" stopColor="#5186FF" />
      </linearGradient>
    </defs>
  </svg>
));

interface PromoCardProps {}

export const PromoCard: React.FC<PromoCardProps> = React.memo(() => (
  <div>
    <Tilt className="Tilt" options={{ max: 10, scale: 1.05 }}>
      <StyledCard className="card">
        <div className="bg">
          <BG />
        </div>
        <div className="content">
          <div>Комфортная езда без лишних звуков</div>
          <Button
            as="a"
            href="#map"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#map");
            }}
          >
            Хочу!
          </Button>
        </div>
        <img src="delorean.png" alt="Делориан" loading="lazy" />
      </StyledCard>
    </Tilt>
  </div>
));
