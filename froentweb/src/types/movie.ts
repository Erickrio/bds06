import { Genre } from "./genre";
import { Review } from "./review";

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgUrl: string;
  synopsis: string;
  genries: Genre[];
  reviews: Review[];
};
