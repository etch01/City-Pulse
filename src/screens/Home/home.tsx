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
import { Icons } from '../../assets/icons';
import EventItem from './EventCard/eventCard';
import { Event } from '../../redux/interfaces/events.ts'

interface HomeProps{
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
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


  const {isLoadingEvents, events, favorites} = useSelector((state: RootState) => state.events);  

  const isFavorite = (event: Event): boolean =>{
    return favorites.some((f) => f.id === event.id);
  }

    // this sort events to make favorite events render first 
    const sortedEvents = [...events].sort((a, b) => {
      const aFav = isFavorite(a) ? 1 : 0;
      const bFav = isFavorite(b) ? 1 : 0;
      return bFav - aFav;
    });

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
          data={sortedEvents}
          keyExtractor={(item) => item.id}
          renderItem={({item})=><EventItem event={item} onPressEvent={(event)=>navigation.navigate('EventDetails',{
            event
          })}/>}
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
