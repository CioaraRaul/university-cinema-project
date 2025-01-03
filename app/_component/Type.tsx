export type Movie = {
  id?: number;
  cinemaId: number;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  image: string;
  trailer: string;
  description: string;
  releaseDate: string;
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
