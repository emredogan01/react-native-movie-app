import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';

const FavoritesCard = ({data}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
      }}>
      {data?.map(movie => (
        <TouchableOpacity
          key={movie.id}
          onPress={() => navigation.navigate(AppScreens.Movie, {id: movie.id})}>
          <View className="gap-1 flex-col items-center mt-2">
            <Image
              className="rounded-3xl mx-2"
              source={{
                uri:
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}` ||
                  fallbackMoviePoster,
              }}
              style={{width: width * 0.33, height: height * 0.22}}
            />
            <Text className="text-neutral-300 ">
              {movie.title.length > 12
                ? movie.title.slice(0, 12) + '...'
                : movie.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FavoritesCard;
