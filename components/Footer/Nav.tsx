import * as React from "react";
import styled from "styled-components";

import { scrollTo } from "scripts/scrollTo";

const Block = styled.div`
  min-width: 220px;
  & h5 {
    color: #ffffff;
    margin-bottom: 24px;
  }
  & li {
    display: block;
    color: #e8e8e8;
    font-family: var(--sans-family);
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    & a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;

interface NavProps {}

export const Nav: React.FC<NavProps> = React.memo(() => (
  <Block>
    <h5>Навигация</h5>

    <nav>
      <ul>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#services");
            }}
          >
            Наши услуги
          </a>
        </li>
        <li>
          <a
            href="#components"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#components");
            }}
          >
            Комплектующие
          </a>
        </li>
        <li>
          <a
            href="#whyUs"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#whyUs");
            }}
          >
            Почему мы
          </a>
        </li>
        <li>
          <a
            href="#map"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#map");
            }}
          >
            Как добраться
          </a>
        </li>
      </ul>
    </nav>
  </Block>
));
