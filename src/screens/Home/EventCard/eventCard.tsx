import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable
} from 'react-native';
import { Event } from '../../../redux/interfaces/events';
import { Icons } from '../../../assets/icons';
import { RootState } from '../../../redux/store';
import { toggleFavorite } from '../../../redux/actions/eventsAction';

import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../styles';

interface EventCardProps{
    event: Partial<Event>;
    onPressEvent: (event:Partial<Event>)=> void;
}


const eventCard = (props :EventCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.events.favorites);
  
  const { event } = props;  

  const imageUrl = event.images?.[0]?.url;
  const city = event._embedded?.venues?.[0]?.city?.name ?? '';

  const isFavorite = (): boolean =>{
    return favorites.some((f) => f.id === event.id);
  }

  const onPressFavorite=()=>{
    dispatch(toggleFavorite({
      id:event.id as string,
      name:event.name as string
    }))
  }

  return (
      <TouchableOpacity style={styles.card} onPress={()=>props.onPressEvent(event)}>
        <Pressable style={styles.favorite} onPress={onPressFavorite}>
          <Image source={isFavorite() ? Icons.starFull.src :Icons.starOutline.src as any} style={{width: undefined, height: undefined, flex:1}}/>
        </Pressable>
        {imageUrl ? (
          <FastImage
          style={styles.image}
          source={{
              uri: imageUrl,
              priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
      />
        ) : (
          <View style={[styles.image, styles.placeholder]} />
        )}
        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Image source={Icons.event.src} style={styles.cardIcon}/>
            <Text style={styles.title}>{event.name}</Text>
          </View>
          {city ? <View style={styles.row}>
            <Image source={Icons.location.src} style={styles.cardIcon}/>
            <Text style={styles.city}>{city}</Text>
          </View> : null}
          <View style={styles.row}>
            <Image source={Icons.confetti.src} style={styles.cardIcon}/>
            <Text style={styles.type}>{event.type}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

export default eventCard;