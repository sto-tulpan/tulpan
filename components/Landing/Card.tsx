import * as React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  &::before {
    background: url(/images/dots-small.svg);
    border-top-left-radius: 20%;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 140px;
    opacity: 0.2;
    width: 140px;
    z-index: 0;
  }
  &::after {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.15;
    height: 120px;
    width: 120px;
    z-index: 0;
    transform: translate(-12%, 30%);
  }
  background-color: var(--color-red-500);
  border-radius: 24px;
  color: var(--color-white);
  max-width: 360px;
  min-height: 240px;
  position: relative;
  overflow: hidden;
  width: 100vw;

  padding: 32px min(32px, 6.5vw);

  cursor: pointer;
  transition: var(--transition-ease);

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }

  &[data-color="green"] {
    background-color: var(--color-green-400);
    background-image: linear-gradient(-45deg, #1be2c7 0%, #30e089 100%);
  }
  &[data-color="red"] {
    background-color: var(--color-red-400);
    background-image: linear-gradient(-45deg, #ff5f84 0%, #ff4c4c 100%);
  }
  &[data-color="purple"] {
    background-color: var(--color-purple-400);
    background-image: linear-gradient(-45deg, #e0c3fc 0%, #79a8ff 100%);
  }

  & > div {
    position: relative;
    z-index: 1;
    & > h3 {
      font-style: normal;
      font-weight: 600;
      font-variation-settings: "wght" 600;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 16px;
    }
    & > .card-description {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      margin-top: 16px;
      padding-right: 1em;
      & * {
        font-size: 18px;
        line-height: 26px;
      }
    }
    & ul {
      list-style: outside;
      padding-left: 1em;
    }
  }
  & > span {
    position: absolute;
    left: 32px;
    bottom: 24px;
    font-size: 24px;
  }
`;

type Color = "green" | "red" | "purple";

interface CardProps {
  title: string;
  content: React.ReactNode | string;
  color: Color;
  icon?: string;
}

export const Card: React.FC<CardProps> = ({
  title = "",
  content = "",
  color = "green",
  icon = "",
}) => (
  <StyledCard data-color={color}>
    <div>
      <h3>{title}</h3>
      <div className="card-description">{content}</div>
    </div>
    {icon && <span>{icon}</span>}
  </StyledCard>
);
