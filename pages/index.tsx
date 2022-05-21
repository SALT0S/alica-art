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

import { ArticListResponse, ArtistDatum, Datum } from "../interfaces";

interface Props {
  arts: Datum[];
  artist: ArtistDatum[];
}

const HomePage: NextPage<Props> = ({ arts, artist }) => {
  return (
    <Layout>
      <HeroSection />
      <ArtistsSection artist={artist} />
      <ArtSection arts={arts} />
      <CategorySection />
      <AboutSection />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await articApi.get<ArticListResponse>(
    "/artworks?fields=id,title,artist_display,date_display,image_id,thumbnail&page=45&limit=20"
  );
  const arts: Datum[] = data.data.map((art) => ({
    ...art,
    img: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
  }));

  const res = await articApi.get<ArticListResponse>("/artists?page=2&limit=10");
  const artist = res.data.data;

  return {
    props: {
      arts,
      artist,
    },
  };
};

export default HomePage;
