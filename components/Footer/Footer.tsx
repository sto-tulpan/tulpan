import * as React from "react";
import styled from "styled-components";
import { Nav, Credits, Schedule, Waves } from ".";

const Wrapper = styled.footer`
  background-color: black;
  color: #e8e8e8;
  padding: 64px min(64px, 6.25vw);
  display: grid;
  gap: 48px max(64px, 8vw);
  grid-template-columns: 1fr auto auto;

  & > div {
    padding-right: min(32px, 6.25vw);
  }

  @media (min-width: 721px) and (max-width: 1120px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;

    & .about {
      grid-row: 1 / span 2;
    }
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Block = styled.div`
  & h4 {
    color: white;
    margin-bottom: 20px;
  }
  & p {
    color: #e8e8e8;
    font-family: var(--sans-family);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    max-width: 480px;
  }
  & a.address {
    display: flex;
    align-items: center;
    & span.icon {
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }
    color: #e8e8e8;
    text-decoration: none;
    margin-top: 24px;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => (
  <>
    <Waves />
    <Wrapper>
      <Block className="about">
        <h4>СТО Тюльпан</h4>
        <p>
          Киевский Автосервис возле м. Сырец. Ремонт и обслуживание выхлопных
          систем. Большой выбор катализаторов и гофр на все популярные модели.
          Персональное обслуживание и подбор деталей на заказ.
        </p>
        <a
          href="https://goo.gl/maps/T8PjbhfBoecyDZqe8"
          target="_blank"
          rel="noreferrer noopener"
          className="address"
        >
          <span className="icon">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 13.933l3.3-3.3a4.666 4.666 0 10-6.6 0l3.3 3.3zm0 1.886l-4.243-4.243a6 6 0 118.486 0L8 15.82zm0-7.152A1.333 1.333 0 108 6a1.333 1.333 0 000 2.667zM8 10a2.667 2.667 0 110-5.333A2.667 2.667 0 018 10z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>Ул. Ивана Виговского 6б, Киев, 04136</span>
        </a>
        <Credits />
      </Block>
      <Nav />
      <Schedule />
    </Wrapper>
  </>
);
