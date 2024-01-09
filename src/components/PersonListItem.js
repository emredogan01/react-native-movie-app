import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';

const PersonListItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(AppScreens.Person, {id: item.id})}
      className="mr-4 items-center">
      <View className="overflow-hidden rounded-full border border-neutral-300 items-center">
        <Image
          className="w-20 h-20 rounded-2xl"
          source={{uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`}}
        />
      </View>
      <Text className="text-neutral-400 mt-1">
        {item?.character.length > 10
          ? item?.character.slice(0, 12) + '...'
          : item?.character}
      </Text>
      <Text className="text-white mt-1">
        {item?.original_name.length > 10
          ? item?.original_name.slice(0, 12) + '...'
          : item?.original_name}
      </Text>
    </TouchableOpacity>
  );
};

export default PersonListItem;
