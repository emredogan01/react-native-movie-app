import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
import {fallbackMoviePoster} from '../api';

const MovieListItem = ({item, searchPage}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className={`${searchPage && 'mb-4'}`}
      onPress={() => navigation.navigate(AppScreens.Movie, {id: item.id})}>
      <View className="gap-1 flex-col items-center mt-2">
        <Image
          className="rounded-3xl mx-5"
          source={{
            uri:
              `https://image.tmdb.org/t/p/w500${item.poster_path}` ||
              fallbackMoviePoster,
          }}
          style={{width: width * 0.33, height: height * 0.22}}
        />
        {!searchPage && (
          <Text className="text-neutral-300 ">
            {item.title.length > 12
              ? item.title.slice(0, 12) + '...'
              : item.title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MovieListItem;
