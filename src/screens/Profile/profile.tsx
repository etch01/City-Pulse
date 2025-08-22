import React from 'react';
import { View, Text, Pressable, Image, I18nManager, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components';
import { Icons } from '../../assets/icons';
import { useTranslation } from 'react-i18next';
import { colors } from '../../theme/colors';
import { LangCode } from '../../I18n/languageUtils';
import { removeToken } from '../Auth/token';

import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProfileProps = {
    navigation: any;
}

const Profile = ({ navigation }: ProfileProps) => {
  const { t, i18n } = useTranslation();
  
  const languageSwitch = async() =>{
    const changeTo:LangCode = !I18nManager.isRTL? LangCode.ar: LangCode.en
    if(!I18nManager.isRTL){
        I18nManager.forceRTL(true);
        I18nManager.allowRTL(true);
    }else{
        I18nManager.forceRTL(false);
        I18nManager.allowRTL(false);   
    }
    await AsyncStorage.setItem('appLanguage', changeTo);
    await i18n.changeLanguage(changeTo);
    RNRestart.restart();
  }

  const logout = () =>{
    removeToken();
    RNRestart.restart();
  }

  return (
    <View style={styles.container}>
        <Header title={t('profile.title')}
            left={<Pressable hitSlop={50} onPress={()=>navigation.goBack()}>
                    <Image source={Icons.back.src as any} style={{width: 25, height: 25}}/>
                </Pressable>}
        />
      <View style={styles.profileBody}>
        {/* Profile Image and Name */}
        <View style={styles.profileImageContainer}>
            <Image 
                source={{uri: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80'}}
                resizeMode='cover'
                style={styles.profileImage}
            />
        </View>
        <Text style={styles.userName}>John Doe</Text>
        {/* Rows */}
        <View style={styles.rowsBody}>
            {/* Favorites */}
            <View style={styles.profileRow}>
                <Image source={Icons.favorite.src} style={styles.rowIcon}/>
                <Text style={styles.rowText}>{t('profile.favorites')}</Text>
            </View>
            {/* Language */}
            <View style={styles.profileRow}>
                <Image source={Icons.language.src} style={styles.rowIcon}/>
                    <Text style={[styles.rowText, styles.activeLanguage]}>{I18nManager.isRTL ? 'العربيه' : 'English'} /</Text>
                    <Text style={styles.rowText}>{!I18nManager.isRTL ? 'العربيه' : 'English'}</Text>
                <Button title={t('profile.change')} color={colors.primary} onPress={languageSwitch}/>

            </View>
            {/* Logout */}
            <TouchableOpacity style={styles.profileRow} onPress={logout}>
                <Image source={Icons.shutdown.src} style={styles.rowIcon}/>
                <Text style={styles.rowText}>{t('profile.signout')}</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Profile;