import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Schedule as FooterSchedule } from "components/Footer/Schedule";

const Wrapper = styled.div`
  position: relative;
  margin-right: 24px;

  @media (max-width: 420px) {
    margin-right: 16px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #222a45;
  height: 48px;
  width: 48px;
  user-select: none;
  transition: all 0.2s ease-out;

  &:hover,
  &:focus {
    background-color: #e6e6e6;
  }

  &:active {
    background-color: #ccc;
  }

  & svg {
    height: 24px;
    width: 24px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-out;

  &:not([data-open="true"]) {
    background-color: transparent;
    pointer-events: none;
    user-select: none;
    opacity: 0;
  }
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;

    @media (hover: hover)  {
      padding-right: 16px;
    }
  }
`;

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  z-index: 2;

  width: 0px;

  &::before {
    display: block;
    position: absolute;
    background-color: #fff;
    content: "";
    left: 12px;
    top: -6px;
    width: 12px;
    height: 6px;
    clip-path: polygon(50% 0, 100% 100%, 0% 100%);
  }

  &:not([data-open="true"]) {
    pointer-events: none;
    user-select: none;
    display: none;
  }

  & > div {
    background-color: #fff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 16px;

    width: 268px;

    @media (min-width: 325px) {
      padding-right: 32px;
      width: 300px;
    }

    @media (max-width: 324px) {
      & li {
        &::before {
          display: none;
        }
      }
    }

    & h5 {
      color: #000;
    }
    & li {
      color: #222a45;
      gap: 20px;
      grid-template-columns: 120px 100px;
      &[data-is-current="true"] {
        color: #000;
      }
    }

    transform: translateX(min(0px, calc(40vw - 120%)));

    @media (min-width: 421px) and (max-width: 520px) {
      transform: translateX(min(0px, calc(45vw - 100%)));
    }
    @media (max-width: 380px) {
      transform: translateX(min(0px, calc(46vw - 115%)));
    }
  }
`;

interface ScheduleProps {}

export const Schedule: React.FC<ScheduleProps> = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Wrapper>
      <Button onClick={() => setOpen(true)}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 23a11 11 0 100-22 11 11 0 000 22z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4.8V12l4.8 2.4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      {open && <LockScroll />}
      <Backdrop onClick={() => setOpen(false)} data-open={open} />
      <Menu data-open={open}>
        <FooterSchedule iconPosition="right" />
      </Menu>
    </Wrapper>
  );
};
