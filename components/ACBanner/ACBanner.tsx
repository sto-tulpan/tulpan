import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "components";

import { useInView } from "scripts/useInView";
import { useMenuContext } from "components/Phone";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 64px min(64px, 6.25vw);
`;
const Banner = styled.div`
  background: url("bg_card-2.png"), #000;
  border-radius: 16px;
  color: #fff;
  position: relative;
  overflow: hidden;
  max-width: 1440px;
  margin: auto;

  display: grid;
  grid-template-columns: minmax(0, 6fr) minmax(500px, 8fr);

  transition: opacity 1s ease;

  &[data-visible="false"] {
    opacity: 0;
  }

  & .ac {
    height: 100%;
    width: 100%;
    position: relative;

    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0) 100%
    );
    mask-repeat: no-repeat;
    mask-position: left center, right center;

    & img {
      object-fit: cover;
      object-position: left;
    }
    & * {
      height: 100%;
      width: auto;
    }
  }

  & .content {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding: clamp(32px, 6vw, 64px) 6.25vw;
    width: 100%;

    & > div {
      max-width: 480px;
      width: 100%;

      font-size: clamp(20px, 6.5vw, 40px);
      font-weight: 700;
      font-variation-settings: "wght" 700;
      & .emoji {
        font-size: 0.85em;
      }

      & button,
      & a {
        margin-top: 40px;
      }
    }
  }

  @media (max-width: 780px) {
    grid-template-columns: minmax(0, 1fr);

    & .ac {
      grid-row: 2;
      mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 75%,
        rgba(0, 0, 0, 0) 100%
      );
      mask-repeat: no-repeat;
      mask-position: center center, top center;
    }
    & .content {
      padding-bottom: 20px;
      text-align: center;

      & button,
      & a {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
      }
    }
  }
`;

interface ACBannerProps {}
const ACBanner: React.FC<ACBannerProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "-160px 0px" });
  const { openMenu } = useMenuContext();

  return (
    <Wrapper>
      <Banner ref={ref} data-visible={visible}>
        <div className="ac">
          <Image
            src="/images/ac.jpg"
            width={847}
            height={450}
            loading="eager"
            layout="responsive"
            alt=""
          />
        </div>

        <div className="content">
          <div>
            <div>
              Ремонт и заправка кондиционеров&nbsp;
              <span className="emoji">❄️</span>
            </div>
            <Button onClick={openMenu}>Записаться</Button>
          </div>
        </div>
      </Banner>
    </Wrapper>
  );
};

export default ACBanner;
