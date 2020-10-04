import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);

  border-radius: 12px;

  padding: min(32px, 6.25vw);
  width: calc(87.5vw);

  max-width: 400px;
  display: grid;
  gap: 20px;

  & h3 {
    line-height: 1.1;
    font-size: 24px;
  }
  & a {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    color: #222;
    cursor: pointer;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    font-variation-settings: "wght" 600;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    min-height: 72px;

    & svg {
      margin-right: 16px;
      height: 24px;
      width: 24px;
    }

    transition: all 0.2s ease-out;

    &:hover {
      box-shadow: 0px 22px 44px -9px rgba(80, 80, 140, 0.15);
    }
  }
`;

const PhoneIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M22 17v3a2 2 0 01-2.2 2 19.8 19.8 0 01-14.6-9.2 19.8 19.8 0 01-3-8.6 2 2 0 012-2.2h3a2 2 0 012 1.7c0 1 .3 2 .6 2.8a2 2 0 01-.4 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012-.4c1 .3 2 .6 2.9.7a2 2 0 011.7 2z"
      stroke="#222a45"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PhoneMenuProps {}

export const PhoneMenu: React.FC<PhoneMenuProps> = () => (
  <Wrapper>
    <h3>Выберите отделение</h3>

    <a href="tel:+380639368289">
      <PhoneIcon />
      Автосервис
    </a>
    <a href="tel:+380674666395">
      <PhoneIcon />
      {/* Выхлопные системы */}
      Глушители
    </a>
  </Wrapper>
);
