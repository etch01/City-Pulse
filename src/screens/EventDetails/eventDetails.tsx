import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { styles } from './styles';
import { Event } from '../../redux/interfaces/events';
import { Header } from '../../components';
import { Icons } from '../../assets/icons';

type Props = {
  navigation: any;
  route: {
    params:{
        event: Event
    }
  }
};

const EventDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { event } = route.params;
  const imageUrl = event.images?.[0]?.url;
  const venue = event._embedded?.venues?.[0];
  const city = venue?.city?.name;
  const state = venue?.state?.name;
  const country = venue?.country?.name;

  return (
    <>
        <Header title={'Event Details'}
            left={<Pressable hitSlop={50} onPress={()=>navigation.goBack()}>
                    <Image source={Icons.back.src as any} style={{width: 25, height: 25}}/>
                </Pressable>}
        />
        <ScrollView style={styles.container}>
        {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : null}
        <View style={styles.content}>
            <Text style={styles.title}>{event.name}</Text>
            <Text style={styles.type}>{event.type}</Text>
            {city ? (
            <Text style={styles.location}>
                {city} {state ? `, ${state}` : ''} {country ? `- ${country}` : ''}
            </Text>
            ) : null}
            {event.info ? <Text style={styles.info}>{event.info}</Text> : null}
            {event.pleaseNote ? (
            <Text style={styles.note}>{event.pleaseNote}</Text>
            ) : null}
        </View>
        </ScrollView>
    </>
  );
};

export default EventDetailsScreen;
