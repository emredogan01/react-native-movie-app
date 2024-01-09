import {View, Dimensions, Text, ScrollView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetMovieCredits,
  GetMovieDetails,
  GetSimilarMovies,
} from '../app/movieAction';
import {
  getMovieCreditsState,
  getMovieDetailState,
  getSimilarMoviesState,
} from '../app/movieSelector';
import BackAndFavorite from '../components/BackAndFavorite';
import {LinearGradient} from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';

export default function MovieScreen() {
  const {id} = useRoute().params;
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    dispatch(GetMovieDetails(id));
    dispatch(GetMovieCredits(id));
    dispatch(GetSimilarMovies(id));
  }, [id, dispatch]);

  const movieDetail = useSelector(getMovieDetailState());
  const movieCredits = useSelector(getMovieCreditsState());
  const similarMovies = useSelector(getSimilarMoviesState());

  return (
    <ScrollView className="flex-1 bg-neutral-900 pb-5">
      <BackAndFavorite isAbsolute data={movieDetail} />
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
          }}
          style={{width: width, height: height * 0.55}}
        />
        <LinearGradient
          colors={[
            'transparent',
            'rgba(23, 23, 23, 0.8)',
            'rgba(23, 23, 23, 1)',
          ]}
          style={{width: width, height: height * 0.4}}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          className="absolute bottom-0"
        />
      </View>

      {/* movie details */}
      <View
        style={{
          marginTop: -height * 0.09,
        }}
        className="space-y-3">
        <Text className="text-white text-center font-semibold text-3xl tracking-wider">
          {movieDetail?.title}
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          {movieDetail?.status} | {movieDetail?.release_date?.split('-')[0]} |{' '}
          {movieDetail?.runtime} min
        </Text>
        <View className="flex-row justify-center mx-4">
          {movieDetail?.genres?.map((genre, idx) => {
            let showDot = idx + 1 !== movieDetail?.genres?.length;
            return (
              <Text
                key={idx}
                className="text-neutral-400 font-semibold text-base text-center">
                {genre.name} {showDot && '&'}
              </Text>
            );
          })}
        </View>
        <Text className="text-neutral-400 mx-6  tracking-wider">
          {movieDetail?.overview || 'No Description.'}
        </Text>
      </View>
      {/* casts */}
      {movieCredits?.length > 0 && <Cast data={movieCredits} />}

      {/* similar movies */}
      {similarMovies?.length > 0 && (
        <MovieList title="Similar Movies" data={similarMovies} hideSeeAll />
      )}
    </ScrollView>
  );
}
