import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
import {fallbackMoviePoster} from '../api';
import MovieListItem from './MovieListItem';

const MovieList = ({title, data, hideSeeAll}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <View className="my-2">
      <View className="flex-row justify-between mx-4 items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text className="text-[#eab308] text-lg">See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <MovieListItem item={item} key={item.id} />}
      />
    </View>
  );
};

export default MovieList;
