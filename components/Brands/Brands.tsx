import * as React from "react";
import styled from "styled-components";
import useMedia from "use-media";

import { useInView } from "scripts/useInView";
import { Brand } from ".";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 64px 0;

  transition: all 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > .conveyer {
    &::-webkit-scrollbar {
      width: 16px;
      height: 16px;
    }
    &::-webkit-scrollbar-track {
      background: none;
      box-shadow: none;
      border: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-gray-2);
      border-radius: 20px;
      border: 6px solid white;
      transition: var(--transition-ease);
      &:hover {
        background-color: var(--color-gray-4);
        opacity: 1;
        border: 5px solid white;
      }
      &:active {
        background-color: var(--color-gray-5);
        opacity: 1;
      }
    }

    & > .frame {
      align-items: center;
      display: flex;
      margin: auto;
      justify-content: center;
      width: fit-content;

      flex-wrap: wrap;
    }
  }
  @media (max-width: 720px) {
    padding: 32px 0 48px;
    & > .conveyer {
      padding: 32px 0 16px;

      overflow-x: auto;

      & > .frame {
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 1640px;
        & > div {
          margin-bottom: 0;
          opacity: 0.8;

          &:hover,
          &:focus-within {
            transform: scale(1.05);
            opacity: 0.8;
          }
          &:active {
            transform: scale(0.99);
          }

          &:last-child {
            display: none;
          }
        }
      }
    }
  }
`;

interface BrandsProps {}

export const Brands: React.FC<BrandsProps> = () => {
  const isMobile = useMedia({ maxWidth: "720px" });
  const [paused, setPaused] = React.useState(false);
  const [direction, setDirection] = React.useState<"right" | "left">("right");
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

  const ListRef = React.useRef<HTMLDivElement>();
  const dirRef = React.useRef(direction);

  const { visible, ref } = useInView({
    rootMargin: "-240px 0px",
    triggerOnce: true,
  });

  const moveListLeft = () => {
    if (!isMobile || !ListRef.current) return;
    const dir = dirRef.current;

    if (dir === "right") {
      // If scrolled to the end, scroll to start
      if (
        ListRef.current.scrollWidth - ListRef.current.scrollLeft ===
        ListRef.current.clientWidth
      ) {
        setDirection("left");
        dirRef.current = "left";
        // Ref.current.scrollTo({ left: 0 });
      }
      // Othervise scroll left 1 pixel
      else ListRef.current.scrollLeft = ListRef.current.scrollLeft + 1;
    }
    // scroll left
    else {
      if (ListRef.current.scrollLeft <= 1) {
        setDirection("right");
        dirRef.current = "right";
      } else ListRef.current.scrollLeft = ListRef.current.scrollLeft - 1;
    }
  };

  // Scroll 1px in direction every 30ms
  React.useEffect(() => {
    if (isMobile && !paused) {
      const num = setInterval(() => moveListLeft(), 30);
      return () => clearInterval(num);
    }
  }, [isMobile, paused]);

  return (
    <Wrapper ref={ref} data-visible={visible}>
      <div
        className="conveyer"
        ref={ListRef}
        // Stop scroll on interaction
        onMouseDown={() => setPaused(true)}
        onTouchStart={() => setPaused(true)}
        // Continue scroll after interaction
        onMouseUp={() => setPaused(false)}
        onTouchEnd={() => setPaused(false)}
        onScroll={() => {
          const newCurrent = ListRef.current.scrollLeft;

          if (newCurrent < lastScrollPosition) {
            if (direction !== "left") {
              setDirection("left");
              dirRef.current = "left";
            }
          } else if (newCurrent > lastScrollPosition && direction !== "right") {
            setDirection("right");
            dirRef.current = "right";
          }

          setLastScrollPosition(newCurrent);
        }}
      >
        <div className="frame">
          <Brand
            src="brands/lesjofors.svg"
            alt="Lesjofors logo"
            href="https://www.lesjofors-automotive.com/default-ru.asp"
          />
          <Brand
            src="brands/bilstein.svg"
            alt="Bilstein logo"
            href="https://www.bilstein.com/ru/ru/"
          />
          <Brand
            src="brands/sidem.svg"
            alt="Sidem logo"
            href="https://www.sidem.be/ru/"
          />
          <Brand
            src="brands/lemforder.svg"
            alt="Lemforder logo"
            href="https://aftermarket.zf.com/go/en/lemfoerder/home/"
          />
          <Brand
            src="brands/zf.svg"
            alt="ZF logo"
            href="https://www.zf.com/mobile/en/homepage/homepage.html"
          />
          <Brand
            src="brands/nipparts.svg"
            alt="Nipparts logo"
            href="https://www.nipparts.com/"
          />
          <Brand
            src="brands/febest.svg"
            alt="Febest logo"
            href="https://febest.de/ru"
          />
          <Brand src="brands/kyb.svg" alt="KYB logo" href="https://kyb.ru/" />
          <Brand
            src="brands/sachs.svg"
            alt="Sachs logo"
            href="https://sachs.com.ua/"
          />
          <Brand
            src="brands/swag.svg"
            alt="SWAG logo"
            href="https://www.swag.de/ru/"
          />
          <Brand
            src="brands/starline.jpg"
            alt="Starline logo"
            href="https://www.starline-parts.com/"
          />
          <Brand
            src="brands/bosch.svg"
            alt="Bosch logo"
            href="https://ua.bosch-automotive.com/uk/"
          />
          <Brand
            src="brands/textar.svg"
            alt="Textar logo"
            href="https://textar.com/ru/"
          />
          <Brand
            src="brands/brembo.svg"
            alt="Brembo logo"
            href="https://www.brembo.com/ru"
          />
        </div>
      </div>
    </Wrapper>
  );
};
