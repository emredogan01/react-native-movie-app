import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../components/Logo';
import FavoritesCard from '../components/FavoritesCard';
import {getUpdateFavoriteMoviesState} from '../app/movieSelector';
import {useSelector} from 'react-redux';

const FavoritesScreen = () => {
  const favoritesMovie = useSelector(getUpdateFavoriteMoviesState());
  useEffect(() => {
    // console.log(JSON.stringify(favoritesMovie, null, 4));
  }, [favoritesMovie]);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800 items-center">
      <Logo />
      <Text className="text-3xl font-semibold mt-10 text-white">
        {favoritesMovie.length > 0
          ? `Your Favorites -${favoritesMovie.length}`
          : 'YourFavorites is empty!'}
      </Text>
      <FavoritesCard data={favoritesMovie} />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
