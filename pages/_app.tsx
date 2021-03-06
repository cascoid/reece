import "../styles/index.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="google-site-verification" content="9M0oVvJpC0UGJBS13QeriAIq-mJepznykHnWCHl42x0" />
        <title>Reece</title>
      </Head>
      <DefaultSeo
        titleTemplate="%s - Reece Martin"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://reece.so",
          description: "Personal website for Reece Martin, software developer.",
          site_name: "Reece Martin | reece.so",
          images: [],
        }}
        canonical="https://reece.so"
      />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default App;
