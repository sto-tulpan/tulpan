import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts/useInView";
import { PromoCard, DryCard } from ".";

const Wrapper = styled.div`
  --card-width: 560px;
  margin: 64px min(64px, 6.25vw) -64px;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    opacity: 0;
  }

  & > .cards {
    display: grid;

    gap: min(64px, 6.25vw);
    max-width: calc(var(--card-width) * 2 + min(64px, 6.25vw));

    grid-template-columns: 1fr 1fr;
    margin: auto;

    @media (max-width: 940px) {
      grid-template-columns: 1fr;
    }
    z-index: 1;

    & .Tilt {
      height: 100%;
    }
  }
`;

interface FooterCardsProps {}

export const FooterCards: React.FC<FooterCardsProps> = React.memo(() => {
  const { visible, ref } = useInView({ rootMargin: "-200px 0px" });
  return (
    <Wrapper ref={ref} data-visible={visible}>
      <div className="cards">
        <PromoCard />
        <DryCard />
      </div>
    </Wrapper>
  );
});
