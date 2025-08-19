import React, { useState, useEffect } from 'react';
import {
  TextInput,
  FlatList,
  SafeAreaView,
  View,
  Pressable,
  Text,
  Image
} from 'react-native';
import { styles } from './styles';
import { colors } from '../../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, searchEvents } from '../../redux/actions/eventsAction';
import { Loader, Header } from '../../components';
import { RootState } from '../../redux/store';
import EventItem from './EventCard/eventCard';
import { Icons } from '../../assets/icons';

const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('keyword');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getEvents());
  },[])

  const searchEvent = (text: string) =>{
    setSearch(text)
    dispatch(searchEvents(text, searchType))
  }

  const onPressKeyword = (keyword: string) =>{
    setSearchType(keyword);
    setSearch('');
  }

  const {isLoadingEvents, error, events} = useSelector((state: RootState) => state.events);  

  return (
    <SafeAreaView style={styles.container}>
      <Header
       title='Home'
       right={<Image source={Icons.profile.src as any} style={{width: 25, height: 25}}/>}
      />
      <View style={styles.seachType}>
        <Pressable style={searchType == 'keyword' ? styles.typeButtonActive: styles.typeButton} onPress={()=>onPressKeyword('keyword')}>
          <Text style={searchType == 'keyword' ? styles.typeTextActive: styles.typeText}>Keyword</Text>
        </Pressable>
        <Pressable style={searchType == 'city' ? styles.typeButtonActive : styles.typeButton} onPress={()=>onPressKeyword('city')}>
          <Text style={searchType == 'city' ? styles.typeTextActive: styles.typeText}>City</Text>
        </Pressable>
      </View>
      <TextInput
        placeholder="Search events..."
        placeholderTextColor={colors.placeholder}
        style={styles.search}
        value={search}
        onChangeText={searchEvent}
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
