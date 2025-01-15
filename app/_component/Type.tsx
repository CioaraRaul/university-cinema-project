export type Movie = {
  cinemaId: number;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  image: string;
  description: string;
  releaseDate: string;
  ageMinimum: number;
  myListAdd: boolean;
  view: string;
};

export type MyList = {
  cinemaId: number;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  image: string;
  description: string;
  releaseDate: string;
  ageMinimum: number;
  myListAdd: boolean;
};

export type PageProps = {
  params: {
    id: number;
  };
};

export type UserSignUP = {
  email?: string;
  password?: string;
  id?: number;
};

export type Users = {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  age?: number;
  reviewd?: boolean;
};

export interface Approve {
  approveEmail: boolean;
  approvePassword: boolean;
  approveUsername: boolean;
  approveAge: boolean;
}

export type UserReview = {
  id: number;
  username: string;
};

export type Review = {
  review_id: number;
  user_id: number;
  movie_id: number;
  review: string;
  created_at: string;
};
