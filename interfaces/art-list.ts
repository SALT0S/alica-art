export interface ArticListResponse {
  pagination: Pagination;
  data: Datum[];
  artist: ArtistDatum[];
  info: Info;
  config: Config;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Datum {
  id: number;
  title: string;
  artist_title: string;
  alt_titles: null;
  is_boosted: boolean;
  img: string;
  image_id: string;
  thumbnail: Thumbnail;
}

export interface ArtistDatum {
  id: number;
  title: string;
  birth_date: number;
  death_date: number;
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

export interface SuggestAutocompleteAll {
  input: string[];
  weight?: number;
}

export interface Thumbnail {
  width: number;
  height: number;
  alt_text: string;
}
