import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts/useInView";
import { Button } from "components";
import Link from "next/link";

import { Schedule, Phone } from ".";

const StyledHeader = styled.header`
  padding: 0 min(64px, 6.25vw);

  transition: opacity 1s ease;

  &[data-visible="false"] {
    opacity: 0;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-gray-1);
    padding: 12px 0;

    & > nav {
      & .name {
        color: var(--color-red-400);
        & a {
          color: inherit;
        }
      }
    }
    & > div {
      display: flex;
      align-items: center;

      & > button,
      & > a {
        min-height: 48px;
      }
      & a.phone-link {
        & span {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        & svg {
          margin-right: 8px;

          @media (min-width: 720px) {
            display: none;
          }
        }
        @media (max-width: 720px) {
          padding: 8px 16px;
          border-radius: 8px;
        }
        @media (max-width: 420px) {
          & svg {
            margin-right: 0;
          }
          & span {
            display: none;
          }
        }
      }
    }
  }
`;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "0px" });
  return (
    <StyledHeader ref={ref} data-visible={visible}>
      <div>
        <nav>
          <h1 className="name" data-font-size="XL" data-font-weight="700">
            <Link href="/">СТО Тюльпан</Link>
          </h1>
        </nav>
        <div>
          <Schedule />
          <Phone />
          <Button as="a" href="tel:+380674666395" className="phone-link">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="20"
              width="20"
            >
              <path
                d="M14.94 6a5 5 0 013.95 3.95M14.94 2a9 9 0 017.95 7.94m-1 7.98v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 5.18 2 2 0 014 3h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.1-.45c.92.34 1.86.57 2.82.7a2 2 0 011.72 2.03z"
                stroke="#f8f8f8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Записаться</span>
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
};
