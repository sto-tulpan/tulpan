import * as React from "react";
import { useRouter } from "next/router";
import styled, { createGlobalStyle } from "styled-components";
import { PhoneMenu } from "./PhoneMenu";

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;

    @media (hover: hover)  {
      padding-right: 16px;
    }
  }
`;

const BgDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transition: opacity 0.4s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:not([data-open="true"]) {
    pointer-events: none;
    opacity: 0;
  }

  z-index: 9999;
`;

export const useMenuContext = () => {
  const router = useRouter();
  const openMenu = () => {
    router.push("/?modal");
  };
  const closeMenu = () => {
    router.replace("/");
  };

  return {
    router,
    menuOpen: router.query["modal"] === "",
    openMenu,
    closeMenu,
  };
};

interface PhoneProps {}

export const Phone: React.FC<PhoneProps> = () => {
  const { menuOpen, closeMenu } = useMenuContext();
  return (
    <BgDrop data-open={menuOpen} onClick={closeMenu}>
      {menuOpen && <LockScroll />}
      <PhoneMenu />
    </BgDrop>
  );
};
