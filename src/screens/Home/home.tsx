import React, { useState, useEffect } from 'react';
import {
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import { colors } from '../../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/actions/eventsAction';
import { Loader } from '../../components';
import { RootState } from '../../redux/store';
import EventItem from './EventCard/eventCard';

const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getEvents());
  },[])

  const {isLoadingEvents, error, events} = useSelector((state: RootState) => state.events);  

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search events..."
        placeholderTextColor={colors.placeholder}
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />
      {
        isLoadingEvents? <Loader/> :
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({item})=><EventItem event={item}/>}
          contentContainerStyle={styles.list}
          initialNumToRender={4}
          maxToRenderPerBatch={4}
          removeClippedSubviews={true}
      />
      }
    </SafeAreaView>
  );
};

export default HomeScreen;
