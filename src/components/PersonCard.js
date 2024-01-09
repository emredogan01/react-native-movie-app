import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import MovieList from './MovieList';
const PersonCard = ({person, personMovies}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View
      className="items-center mt-3"
      style={{
        shadowColor: 'gray',
        shadowRadius: 40,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
      }}>
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: 'gray',
          shadowRadius: 40,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 1,
        }}>
        <View className="h-72 w-72 items-center rounded-full overflow-hidden border-neutral-400 border-2">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
            }}
            style={{
              width: width * 0.74,
              height: height * 0.38,
            }}
          />
        </View>
      </View>
      {/* name and birth place */}
      <View className="mt-6">
        <Text className="text-3xl text-white font-bold text-center">
          {person?.name}
        </Text>
        <Text className="text-neutral-500 text-center text-sm">
          {person?.place_of_birth?.length > 20 ? (
            <Text>{person?.place_of_birth?.slice(0, 20)}...</Text>
          ) : (
            person?.place_of_birth
          )}
        </Text>
        {/* other information*/}
      </View>
      <View className="flex-row mt-6 p-4 justify-between items-center bg-neutral-700 rounded-full ">
        {/* 1 */}
        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
          <Text className="text-white text-semibold">Gender</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.gender === 1 ? 'Femele' : 'Male'}
          </Text>
        </View>
        {/* 2 */}
        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
          <Text className="text-white text-semibold">Birthday</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.birthday?.replace(/-/g, '.')}
          </Text>
        </View>
        {/* 3 */}
        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
          <Text className="text-white text-semibold">Known For</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.known_for_department}
          </Text>
        </View>
        {/* 4 */}
        <View className=" px-2 items-center">
          <Text className="text-white text-semibold">Popularity</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.popularity?.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View className="items-center space-y-2 mt-4">
        <Text className="text-white text-xl">Biography</Text>
        <Text className="text-white tracking-wide mx-4">
          {person?.biography || 'Biography not found.'}
        </Text>
      </View>
      <MovieList data={personMovies} title="Movies" hideSeeAll />
    </View>
  );
};

export default PersonCard;
