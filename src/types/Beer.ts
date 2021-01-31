export interface BeerTypes {
  beer: IBeer[];
}
export interface IBeer {
  image_url: string;
  name: string;
  description: string;
  id: number;
  tagline: string;
}
