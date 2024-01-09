import {Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';

const MovieCard = ({movie}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(AppScreens.Movie, {id: movie.id})}>
      <Image
        className="rounded-3xl"
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        style={{width: width * 0.62, height: height * 0.46}}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
