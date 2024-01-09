export const getTrendingState =
  () =>
  ({movie: {trending}}) =>
    trending;

export const getUpcomingState =
  () =>
  ({movie: {upcoming}}) =>
    upcoming;

export const getTopRatedState =
  () =>
  ({movie: {topRated}}) =>
    topRated;

export const getMovieDetailState =
  () =>
  ({movie: {movieDetail}}) =>
    movieDetail;

export const getMovieCreditsState =
  () =>
  ({movie: {movieCredits}}) =>
    movieCredits;

export const getSimilarMoviesState =
  () =>
  ({movie: {movieSimilar}}) =>
    movieSimilar;

export const getPersonDetailsState =
  () =>
  ({movie: {personDetail}}) =>
    personDetail;

export const getPersonMovieCreditsState =
  () =>
  ({movie: {personCredits}}) =>
    personCredits;

export const getSearchResultsState =
  () =>
  ({movie: {searchResults}}) =>
    searchResults;

export const getUpdateFavoriteMoviesState =
  () =>
  ({movie: {favoriteMovies}}) =>
    favoriteMovies;

// export const getIsFavoriteState =
//   () =>
//   ({movie: {isFavorite}}) =>
//     isFavorite;
