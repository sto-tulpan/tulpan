import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  color: white;

  font-size: 32px;
  margin: auto;
  min-height: 320px;
  max-width: var(--card-width);
  height: 100%;
  padding: min(48px, 6.25vw);
  width: 100%;

  z-index: 2;
  position: relative;

  box-shadow: var(--shadow);
  transition: var(--transition-ease);
  overflow: hidden;
  &:hover {
    box-shadow: var(--shadow-hover);
    transform: scale(1.01);
  }

  & > .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  & > .content {
    z-index: 1;
    position: relative;
  }
`;
