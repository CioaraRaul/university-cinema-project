export type Movie = {
  cinemaId: number;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  image: string;
  trailer: string;
  description: string;
  realeaseDate: string;
};

export type PageProps = {
  params: {
    id: number;
  };
};
