import Head from "next/head";
import "../styles/global.css";
import { Global, CacheProvider, css } from "@emotion/react";
import { cache } from "@emotion/css";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => (
  <>
    <CacheProvider value={cache}>
      <Head>
        <title>hello world</title>
      </Head>
      <Global
        styles={css`
          body {
            color: red;
          }
        `}
      />
      <Component {...pageProps} />
    </CacheProvider>
  </>
);

export default MyApp;
