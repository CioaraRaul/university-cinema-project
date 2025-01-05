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
};

export type PageProps = {
  params: {
    id: number;
  };
};

export type UserSignUP = {
  email?: string;
  password?: string;
};

export type Users = {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  age?: number;
};

export interface Approve {
  approveEmail: boolean;
  approvePassword: boolean;
  approveUsername: boolean;
  approveAge: boolean;
}
