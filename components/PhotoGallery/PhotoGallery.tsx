import * as React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import Img from "react-optimized-image";

import { useInView } from "scripts/useInView";
import { photos } from ".";

const Gallery = styled.div`
  overflow: hidden;
  padding: 64px 0;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    opacity: 0;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    margin-right: -2px;
    margin-left: -2px;

    & > * {
      margin: 2px 0;
      padding: 0 2px;

      flex: 0 0 100%;
      max-width: 100%;
      min-height: 200px;

      border: none;
      box-shadow: none;
      cursor: pointer;
      overflow: hidden;
      position: relative;

      transition: filter 0.15s ease-out;
      filter: grayscale(100%);
      max-height: 280px;

      &:hover,
      &:focus {
        filter: unset;
        & img {
          transform: scale(1.015);
        }
      }
      & picture,
      & img {
        background-color: #bbb;
        display: block;
        object-fit: cover;
        transition: transform 0.2s cubic-bezier(0.1, -0.02, 0.45, 1.05);
        height: 100%;
        width: 100%;
      }

      & picture {
        overflow: hidden;
      }
      & picture,
      & img {
        display: block;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }

      @media (max-width: 768px) {
        padding: 0;
      }
      &[data-size="20"] {
        @media (min-width: 768px) {
          flex: 0 0 20%;
          max-width: 20%;
        }
      }
      &[data-size="25"] {
        @media (min-width: 768px) {
          flex: 0 0 25%;
          max-width: 25%;
        }
      }
      &[data-size="33"] {
        @media (min-width: 768px) {
          flex: 0 0 33.3333333333%;
          max-width: 33.3333333333%;
        }
      }
      &[data-size="50"] {
        @media (min-width: 768px) {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }
    }
  }
`;

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
  caption: {
    showCaption: false,
  },
};

interface PhotoGalleryProps {}

export const PhotoGallery: React.FC<PhotoGalleryProps> = React.memo(() => {
  const { visible, ref } = useInView({
    rootMargin: "-220px 0px",
  });

  return (
    <SRLWrapper options={options}>
      <Gallery ref={ref} data-visible={visible}>
        <div>
          {photos.map(({ src, alt, size }) => (
            <div data-size={size} key={src}>
              <Img
                src={require(`./images/${src}`)}
                webp
                sizes={[400, 800, 1200]}
                alt={alt}
                placeholder={require(`./images/${src}?lqip`)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Gallery>
    </SRLWrapper>
  );
});
