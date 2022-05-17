import type { NextPage } from "next";
import { GetStaticProps } from "next";

import articApi from "../api/articApi";

import { Layout } from "../components/Layout";
import {
  HeroSection,
  ArtistsSection,
  ArtSection,
  AboutSection,
  CategorySection,
} from "../components/ui";

import { ArticListResponse, Datum } from "../interfaces";

interface Props {
  arts: Datum[];
}

const HomePage: NextPage<Props> = ({ arts }) => {
  return (
    <Layout>
      <HeroSection />
      <ArtistsSection />
      <ArtSection arts={arts} />
      <CategorySection />
      <AboutSection />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await articApi.get<ArticListResponse>("/artworks?limit=9"); // your fetch function here

  const arts: Datum[] = data.data.map((art) => ({
    ...art,
    img: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
  }));

  return {
    props: {
      arts,
    },
  };
};

export default HomePage;
