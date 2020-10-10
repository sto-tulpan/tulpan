import * as React from "react";
import styled from "styled-components";

const BrandWrapper = styled.div`
  height: 100px;
  width: auto;

  opacity: 0.4;
  margin: 0 2rem 1rem;

  cursor: pointer;
  transition: var(--transition-ease);
  & a {
    outline: none;
  }

  &:hover,
  &:focus-within {
    opacity: 0.8;
  }

  & img {
    display: block;
    max-width: 200px;
    object-fit: contain;
    height: 100%;
    width: auto;
  }
`;

interface BrandProps {
  src: string;
  alt?: string;
  href: string;
}

export const Brand: React.FC<BrandProps> = React.memo(
  ({ src = "", href = "", alt = "brand logo" }) => (
    <BrandWrapper className="brand">
      <a href={href} target="_blank" rel="noreferrer noopener">
        <img src={src} alt={alt} loading="eager" />
      </a>
    </BrandWrapper>
  )
);
