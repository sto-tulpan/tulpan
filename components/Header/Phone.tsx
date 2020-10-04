import * as React from "react";
import styled from "styled-components";

const PhoneWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
  margin-right: 40px;
  padding-bottom: 4px;
  & div {
    color: #222a45;
    color: #404040;
  }
  & a,
  & button {
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    color: var(--color-text-main);
    display: block;
    color: inherit;
    padding: 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface PhoneProps {}

export const Phone: React.FC<PhoneProps> = React.memo(() => (
  <>
    <PhoneWrapper className="phone">
      <div data-font-size="Focus">Автосервис</div>
      <a data-font-size="X" href="tel:+380639368289">
        (063) 93-68-289
      </a>
    </PhoneWrapper>
    <PhoneWrapper className="phone">
      <div data-font-size="Focus">Глушители</div>
      <a data-font-size="X" href="tel:+380674666395">
        (067) 46-66-395
      </a>
    </PhoneWrapper>
  </>
));
