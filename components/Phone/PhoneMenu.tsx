import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);

  border-radius: 12px;

  padding: min(32px, 6.25vw);
  width: calc(87.5vw);

  max-width: 400px;
  display: grid;
  gap: 20px;

  & h3 {
    line-height: 1.1;
    font-size: 24px;
  }

  & .big-links {
    display: grid;
    gap: 20px;

    & a {
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      color: #222;
      cursor: pointer;
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
      font-variation-settings: "wght" 600;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      min-height: 72px;

      & .phone {
        font-size: 16px;
        opacity: 0.5;
        margin-top: 3px;
        letter-spacing: 0.3px;
      }

      & svg {
        margin-right: 16px;
        height: 24px;
        width: 24px;
      }

      transition: all 0.2s ease-out;

      &:hover {
        box-shadow: 0px 22px 44px -9px rgba(80, 80, 140, 0.15);
      }
    }
  }

  & .messangers {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;

    & a {
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      color: #222;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
      font-variation-settings: "wght" 600;
      padding: 6px 24px;
      display: flex;
      align-items: center;
      height: 64px;

      & svg {
        height: 36px;
        width: 36px;
      }

      transition: all 0.2s ease-out;

      &:hover {
        box-shadow: 0px 22px 44px -9px rgba(80, 80, 140, 0.15);
      }
    }
  }
`;

const PhoneIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M22 17v3a2 2 0 01-2.2 2 19.8 19.8 0 01-14.6-9.2 19.8 19.8 0 01-3-8.6 2 2 0 012-2.2h3a2 2 0 012 1.7c0 1 .3 2 .6 2.8a2 2 0 01-.4 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012-.4c1 .3 2 .6 2.9.7a2 2 0 011.7 2z"
      stroke="#222a45"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TelegramIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 322">
    <path d="M161 322a161 161 0 100-322 161 161 0 000 322z" fill="#039BE5" />
    <path
      d="M74 157l154-59c7-3 14 1 11 13l-27 124c-1 9-7 11-13 7l-41-30-20 19c-2 2-4 4-8 4l3-40 75-68c3-4 0-5-5-2l-93 57-40-13c-8-1-8-6 3-11l1-1z"
      fill="#fff"
    />
  </svg>
);

const ViberIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 322">
    <path
      d="M251 322H71c-39 0-71-32-71-71V71C0 32 32 0 71 0h180c39 0 71 32 71 71v180c0 39-32 71-71 71z"
      fill="#6E64C3"
    />
    <path
      d="M139 132a11 11 0 002-16l-12-16a9 9 0 00-13-2l-7 6c-5 5-8 12-5 19a143 143 0 0082 83 17 17 0 0021-7l4-8c3-4 2-9-2-12l-15-10a11 11 0 00-16 4l-2 2a4 4 0 01-6 1c-14-9-26-21-35-35-2-2-1-5 1-6l3-3zm77 22c-2 0-4-2-4-5a53 53 0 00-53-53 4 4 0 110-9c34 0 62 28 62 62 0 3-2 5-5 5z"
      fill="#fff"
    />
    <path
      d="M203 154c-3 0-5-2-5-5 0-21-17-39-39-39a4 4 0 010-9 48 48 0 0148 48c0 3-2 5-4 5z"
      fill="#fff"
    />
    <path
      d="M189 154c-3 0-5-2-5-5 0-14-11-25-25-25a4 4 0 010-9 34 34 0 0134 34c0 3-2 5-4 5z"
      fill="#fff"
    />
    <path
      d="M271 127c0-44-36-80-80-80h-57a83 83 0 00-83 83v35a83 83 0 0053 78v28a8 8 0 0014 5l24-28h49c44 0 80-36 80-80v-41zm-18 41c0 34-28 62-62 62h-43l-33 38a2 2 0 01-3-1v-41a64 64 0 01-42-61v-35a64 64 0 0164-65h57c34 0 62 28 62 62v41z"
      fill="#fff"
    />
  </svg>
);
interface PhoneMenuProps {}

export const PhoneMenu: React.FC<PhoneMenuProps> = () => (
  <Wrapper onClick={(e) => e.stopPropagation()}>
    <h3>Выберите отделение</h3>

    <div className="big-links">
      <a href="tel:+380639368289">
        <PhoneIcon />
        <div>
          <div>Автосервис</div>
          <div className="phone">0639368289</div>
        </div>
      </a>
      <a href="tel:+380674666395">
        <PhoneIcon />
        {/* Выхлопные системы */}
        <div>
          <div>Глушители</div>
          <div className="phone">0674666395</div>
        </div>
      </a>
    </div>

    <div className="messangers">
      <a
        href="https://telegram.me"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Telegram"
      >
        <TelegramIcon />
      </a>
      <a
        href="viber://chat?number=380639368289"
        rel="noreferrer noopener"
        aria-label="Viber"
      >
        <ViberIcon />
      </a>
    </div>
  </Wrapper>
);
