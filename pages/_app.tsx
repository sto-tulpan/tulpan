import * as React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import SimpleReactLightbox from "simple-react-lightbox";

import "css/normalize.css";
import "css/styles.css";
import "css/typography.css";
import "css/colors.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}
