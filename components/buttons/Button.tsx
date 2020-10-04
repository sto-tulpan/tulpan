import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background: #2a46ff;
  box-shadow: 0px 22px 44px -12px rgba(42, 70, 255, 0.35);
  border-radius: 16px;
  border: none;

  cursor: pointer;
  color: #ffffff;
  display: flex;

  font-family: "Montserrat", var(--sans-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  justify-content: center;
  line-height: 20px;
  letter-spacing: -0.025em;
  padding: 1em 2em;
  width: fit-content;

  transition: all 0.2s ease-out;
  outline: none;

  &:hover {
    background-color: #345aff;
    box-shadow: 0px 22px 44px -9px rgba(42, 70, 255, 0.4);
  }
  &:focus {
    background-color: #345aff;
    box-shadow: 0px 22px 44px -9px rgba(42, 70, 255, 0.4), 0 0 0 2px #222a45;
  }
  &:active {
    background-color: #163eec;
  }
`;
