import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  movieDetail: {},
  movieCredits: [],
  movieSimilar: [],
  personDetail: {},
  personCredits: [],
  searchResults: [],
  favoriteMovies: [],
  loading: false,
  error: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingState: (state, action) => {
      state.trending = action.payload;
    },
    setUpcomingState: (state, action) => {
      state.upcoming = action.payload;
    },
    setTopRatedState: (state, action) => {
      state.topRated = action.payload;
    },
    setMovieDetailState: (state, action) => {
      state.movieDetail = action.payload;
    },
    setMovieCreditsState: (state, action) => {
      state.movieCredits = action.payload;
    },
    setSimilarMoviesState: (state, action) => {
      state.movieSimilar = action.payload;
    },
    setPersonDetailState: (state, action) => {
      state.personDetail = action.payload;
    },
    setPersonMovieCreditsState: (state, action) => {
      state.personCredits = action.payload;
    },
    setSearchResultsState: (state, action) => {
      state.searchResults = action.payload;
    },
    setUpdateFavoriteMoviesState: (state, action) => {
      const existingIndex = state.favoriteMovies.findIndex(
        movie => movie.id === action.payload.id,
      );

      const updatedFavorites =
        existingIndex !== -1
          ? [
              ...state.favoriteMovies.slice(0, existingIndex),
              ...state.favoriteMovies.slice(existingIndex + 1),
            ]
          : [...state.favoriteMovies, action.payload];

      state.favoriteMovies = updatedFavorites;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTrendingState,
  setMovieDetailState,
  setMovieCreditsState,
  setSimilarMoviesState,
  setPersonDetailState,
  setPersonMovieCreditsState,
  setSearchResultsState,
  setUpdateFavoriteMoviesState,
  setLoading,
  setError,
  setUpcomingState,
  setTopRatedState,
} = movieSlice.actions;

export default movieSlice.reducer;
