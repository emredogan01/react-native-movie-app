import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setUpdateFavoriteMoviesState} from '../app/movieSlice';
import {getUpdateFavoriteMoviesState} from '../app/movieSelector';

const BackAndFavorite = ({isAbsolute, heart, data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const movies = useSelector(getUpdateFavoriteMoviesState());

  useEffect(() => {
    // data tanımlı mı ve id özelliğine sahip mi diye kontrol et
    if (data && data.id) {
      // movie ve data'nın id'sini kontrol et ve eşleşen bir film varsa setIsFavorite(true) yap
      const foundMovie = movies?.find(movie => movie.id === data.id);
      setIsFavorite(foundMovie ? true : false);
    }
  }, [movies, data]);

  const handleToggleFavorite = () => {
    dispatch(setUpdateFavoriteMoviesState({...data}));
  };

  return (
    <SafeAreaView
      className={`flex-row justify-between items-center mx-4  z-20 ${
        isAbsolute && 'absolute w-[360px]'
      }`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-1 rounded-lg"
        style={{backgroundColor: '#eab308'}}>
        <Icon name="chevron-left" size={30} color="#fff" />
      </TouchableOpacity>
      {!heart && (
        <TouchableOpacity onPress={handleToggleFavorite}>
          <Icon name="heart" size={40} color={isFavorite ? 'red' : '#fff'} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default BackAndFavorite;
