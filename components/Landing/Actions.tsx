import * as React from "react";
import styled, { keyframes } from "styled-components";

import { scrollTo } from "scripts/scrollTo";
import { Button } from "components";

import { useMenuContext } from "components/Phone";

const backgroundTransition = keyframes`
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 300%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 20px;

  .phone-button {
    background: var(--color-red-400);
    box-shadow: 0px 22px 44px -12px rgba(255, 68, 68, 0.35);
    display: none;

    &:hover,
    &:focus {
      background-color: var(--color-red-300);

      box-shadow: 0px 22px 44px -9px rgba(255, 51, 97, 0.4);
    }
    &:active {
      background-color: var(--color-red-500);
      box-shadow: 0px 22px 44px -9px rgba(255, 51, 97, 0.4), 0 0 0 2px #222a45;
    }
  }

  @media (max-width: 520px) {
    & a,
    & button {
      border-radius: 10px;
      min-height: 52px;
      width: 100%;
    }

    .map-button {
      background: linear-gradient(
        90deg,
        #ff3362 0%,
        #ff5562 15%,
        #ffbe47 35%,
        #ff64af 50%,
        #b278ff 70%,
        #ca75fb 85%,
        #ff3362 100%
      );
      background-size: 300%;
      overflow: hidden;
      padding: 0;

      animation: 20s ${backgroundTransition} linear infinite;

      & div {
        width: 100%;
        height: 48px;
        margin: 2px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        color: var(--color-red-400);
      }
    }

    .phone-button {
      display: flex;
    }
  }
`;

interface ActionsProps {
  visible: boolean;
}

export const Actions: React.FC<ActionsProps> = ({ visible }) => {
  const { openMenu } = useMenuContext();
  return (
    <Wrapper className="actions">
      <Button
        data-font-weight="600"
        data-visible={visible}
        onClick={openMenu}
        className="phone-button"
      >
        Записаться
      </Button>
      <Button
        className="map-button"
        data-font-weight="600"
        data-visible={visible}
        as="a"
        href="#map"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("#map");
        }}
      >
        <div>Как до нас добраться</div>
      </Button>
    </Wrapper>
  );
};
