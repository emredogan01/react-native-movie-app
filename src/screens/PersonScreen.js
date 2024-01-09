import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {GetPersonDetails, GetMovieCreditsPerson} from '../app/movieAction';
import {
  getPersonDetailsState,
  getPersonMovieCreditsState,
} from '../app/movieSelector';
import BackAndFavorite from '../components/BackAndFavorite';
import PersonCard from '../components/PersonCard';

export default function PersonScreen() {
  const id = useRoute().params.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPersonDetails(id));
    dispatch(GetMovieCreditsPerson(id));
  }, [dispatch, id]);

  const person = useSelector(getPersonDetailsState());
  const personCredits = useSelector(getPersonMovieCreditsState());

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <BackAndFavorite heart />
      <PersonCard person={person} personMovies={personCredits} />
    </ScrollView>
  );
}
