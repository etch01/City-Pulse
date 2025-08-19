import { styles } from '../styles';
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Event } from '../../../redux/interfaces/events';
import FastImage from 'react-native-fast-image'

interface EventCardProps{
    event: Partial<Event>;
}


const eventCard = (props :EventCardProps) => {
    
  const { event } = props;  

  const imageUrl = event.images?.[0]?.url;
  const city = event._embedded?.venues?.[0]?.city?.name ?? '';

  return (
      <View style={styles.card}>
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
          <Text style={styles.title}>{event.name}</Text>
          {city ? <Text style={styles.city}>{city}</Text> : null}
          <Text style={styles.type}>{event.type}</Text>
        </View>
      </View>
    );
}

export default eventCard;