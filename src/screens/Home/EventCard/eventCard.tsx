import { styles } from '../styles';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Event } from '../../../redux/interfaces/events';
import FastImage from 'react-native-fast-image';
import { Icons } from '../../../assets/icons';

interface EventCardProps{
    event: Partial<Event>;
    onPressEvent: (event:Partial<Event>)=> void;
}


const eventCard = (props :EventCardProps) => {
    
  const { event } = props;  

  const imageUrl = event.images?.[0]?.url;
  const city = event._embedded?.venues?.[0]?.city?.name ?? '';

  return (
      <TouchableOpacity style={styles.card} onPress={()=>props.onPressEvent(event)}>
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