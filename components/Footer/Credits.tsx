import * as React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: var(--color-gray-2);

  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 48px;
  & span {
    display: inline;
  }
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

interface CreditsProps {}

export const Credits: React.FC<CreditsProps> = React.memo(() => (
  <Link href="http://snelsi.now.sh/" target="_blank" rel="noreferrer noopener">
    Made with
    <span role="image" aria-label="love">
      ❤️
    </span>
    <span>by Snelsi</span>
  </Link>
));
