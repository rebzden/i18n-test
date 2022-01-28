import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <div>
      <Head>
        <title>Discover</title>
        <meta name="description" content="Radioline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={() => push(`/test/de`)}>Go to DE</button>
      <button onClick={() => push(`/test/en`)}>Go to EN</button>
      <button onClick={() => push(`/test/random`)}>Go to random</button>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common"])),
  },
});

export default Home;
