import * as React from "react";
import styled from "styled-components";
import { useInView } from "scripts/useInView";

const Wrapper = styled.div`
  padding: 64px 0;

  transition: opacity 1s ease, transform 1s ease;

  &[data-visible="false"] {
    transform: translateY(20px);
    opacity: 0;
  }

  & > .text {
    padding: 0 min(64px, 6.25vw) 48px;
    & > h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 32px;
    }
    & > p {
      color: #222a45;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      margin-top: 20px;
      max-width: 780px;
      & > a {
        display: inline-block;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  & > .content {
    position: relative;
    height: 520px;
    & > iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

interface MapProps {}

export const Map: React.FC<MapProps> = () => {
  const { visible, ref } = useInView({
    rootMargin: "-200px 0px",
  });

  return (
    <Wrapper id="map" ref={ref} data-visible={visible}>
      <div className="text">
        <h2>Пять минут на машине от станции метро Сырец</h2>
        <p>
          Мы рядом! На{" "}
          <a
            href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%A2%D0%B8%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F/@50.4802507,30.409033,19z/data=!4m5!3m4!1s0x40d4cd0145ceef4b:0x4f180c76fa788ceb!8m2!3d50.480069!4d30.408499"
            target="_blank"
            rel="noreferrer noopener"
          >
            перекрёстке Стеценка
          </a>{" "}
          сверните в переулок на улице Тираспольской и едьте прямо 300м вдоль
          забора.
        </p>
      </div>
      <div className="content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795.1693045739926!2d30.409971559461166!3d50.48294599459408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc53ef289126c2c6!2z0KHQotCeINCi0Y7Qu9GM0L_QsNC9LSDQoNC10LzQvtC90YIg0JLRi9GF0LvQvtC_0L3Ri9GFINCh0LjRgdGC0LXQvCwg0JPQu9GD0YjQuNGC0LjQu9C10LksINCa0LDRgtCw0LvQuNC30LDRgtC-0YDQvtCyLCDQk9C-0YTRgNGLLiDQl9Cw0LzQtdC90LAsINGD0LTQsNC70LXQvdC40LU!5e0!3m2!1sru!2sua!4v1597608599785!5m2!1sru!2sua"
          frameBorder="0"
          allowFullScreen={false}
          aria-hidden={false}
          loading="lazy"
        />
      </div>
    </Wrapper>
  );
};
