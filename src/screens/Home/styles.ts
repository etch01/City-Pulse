import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    search: {
      backgroundColor: colors.inputBg,
      padding: 12,
      margin: 16,
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
    }
  });