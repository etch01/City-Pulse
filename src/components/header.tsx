import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { colors } from '../theme/colors';

const { width, height } = Dimensions.get('window');

type Props = {
    title: string;
    left?: React.JSX.Element;
    right?: React.JSX.Element;
}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.left ? props.left:<Text></Text>}
      <Text style={styles.headerTitle}>{props.title}</Text>
      {props.right ? props.right:<Text></Text>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width: width ,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: colors.background
    },
    headerTitle:{
        fontSize: 18,
        color: colors.textPrimary,
        fontWeight: 700
    }
})