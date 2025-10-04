export interface Movie {
  id: string; 
  title: string;
  movieDirectorId: string; 
  userCreatorId: string;   
  releaseDate: string;     
  imgUrl: string;
}


interface MovieReviewNode {
  rating: number | null;
  __typename: string;
}

interface MovieReviews {
  totalCount: number;
  nodes: MovieReviewNode[];
  __typename: string;
}

export interface MovieNode {
  nodeId: string;
  id: string;
  title: string;
  releaseDate: string; // ISO string, ejemplo "2025-10-04"
  imgUrl: string;
  movieReviewsByMovieId: MovieReviews;
  __typename: string;
}

export interface ListMovies {
  totalCount: number;
  nodes: MovieNode[];
  __typename: string;
}
