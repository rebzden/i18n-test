import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

const Home: NextPage = () => {
  const { defaultLocale, locale, query } = useRouter();
  return (
    <div>
      <Head>
        <title>Test i18n</title>
        <meta name="description" content="Radioline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {JSON.stringify(query)}
    </div>
  );
};
export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common"])),
  },
});

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default Home;
