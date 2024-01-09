import {View, Text, FlatList} from 'react-native';
import React from 'react';
import PersonListItem from './PersonListItem';

const Cast = ({data}) => {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 15}}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <PersonListItem item={item} />}
      />
    </View>
  );
};

export default Cast;
