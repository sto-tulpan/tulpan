import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 240px;

  background: var(--color-white);
  border-radius: 20px;
  padding: 24px;

  display: grid;
  grid-template-rows: 1fr 78px;
  height: 100%;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0px 22px 44px -9px rgba(80, 80, 140, 0.15);
  }
  & > div.text {
    & > h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }

    & > p {
      color: #222a45;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      margin-top: 12px;
      margin-bottom: 20px;
      max-width: max(50vw, 420px);
      @media (min-width: 640px) {
        padding-right: 1em;
      }
    }
  }
  & > div.icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 78px;
    height: 78px;

    background: #ecf4ff;
    border-radius: 12px;

    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export const Card: React.FC<CardProps> = React.memo(
  ({ title = "", description = "", icon, ...props }) => (
    <Wrapper {...props}>
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="icon">{icon}</div>
    </Wrapper>
  )
);
