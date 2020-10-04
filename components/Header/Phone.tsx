import * as React from "react";
import styled from "styled-components";

const PhoneWrapper = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
  margin-right: 40px;
  padding-bottom: 4px;
  & div {
    color: #222a45;
    color: #404040;
  }
  & a {
    color: var(--color-text-main);
    display: block;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface PhoneProps {}

export const Phone: React.FC<PhoneProps> = React.memo(() => (
  <PhoneWrapper className="phone">
    <div data-font-size="Focus">Телефон</div>
    <a data-font-size="X" href="tel:+380674666395">
      (067) 46-66-395
    </a>
  </PhoneWrapper>
));
