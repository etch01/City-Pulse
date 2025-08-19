import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    seachType:{
      margin: 16,
      height: 36,
      flexDirection: 'row'
    },
    search: {
      backgroundColor: colors.inputBg,
      padding: 12,
      marginHorizontal: 16,
      marginBottom: 16,
      borderRadius: 8,
      fontSize: 16,
      color: colors.textPrimary,
    },
    list: {
      paddingHorizontal: 16,
    },
    card: {
      backgroundColor: colors.light,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    image: {
      height: 180,
      width: '100%',
      resizeMode: 'cover',
    },
    placeholder: {
      backgroundColor: colors.inputBg,
    },
    cardContent: {
      padding: 12,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textPrimary,
    },
    city: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    type: {
      fontSize: 12,
      color: colors.primary,
      fontWeight: '500',
    },
    row:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
      marginBottom: 4,

    },
    cardIcon:{
      width:16, 
      height: 16
    },
    typeButton:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.border
    },
    typeButtonActive:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary
    },
    typeText:{
      fontWeight: 500
    },
    typeTextActive:{
      color: colors.light,
      fontWeight: 500
    }
  });