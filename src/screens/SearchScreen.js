import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearchMovies} from '../app/movieAction';
import {getSearchResultsState} from '../app/movieSelector';
import MovieListItem from '../components/MovieListItem';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchTextModified = text.trim().toLowerCase().replace(/\s+/g, ' ');

    dispatch(GetSearchMovies(searchTextModified));
  }, [text, dispatch]);

  const searchResults = useSelector(getSearchResultsState());

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between item-center border border-neutral-500 rounded-full">
        <TextInput
          className="py-2 px-6  text-base font-semibold text-white tracking-wide"
          value={text}
          onChangeText={text => setText(text)}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(AppScreens.Home)}
          className="p-3 m-1 bg-neutral-500 rounded-full">
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      {searchResults?.length > 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 15,
            paddingHorizontal: 15,
          }}
          className="space-y-4">
          <Text className="text-white font-semibold tracking-wide ml-2">
            Results length: {searchResults?.length}
          </Text>
          <View className="flex-row justify-between flex-wrap px-4">
            {searchResults?.map((item, idx) => (
              <MovieListItem searchPage key={idx} item={item} />
            ))}
          </View>
        </ScrollView>
      )}

      {searchResults?.length === 0 && (
        <View className="items-center">
          <Image
            source={require('../assets/movieTime.png')}
            className="w-96 h-96 "
          />
          <Text className="text-white tracking-wide font-semibold text-xl">
            No matches found!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
