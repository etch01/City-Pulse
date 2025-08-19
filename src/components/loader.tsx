import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

type Props = {}

export const loader = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <ActivityIndicator size={20} color={colors.primary}/>
    </View>
  )
}