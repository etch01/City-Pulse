import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    image: {
      width: '100%',
      height: 240,
      resizeMode: 'cover',
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 8,
    },
    type: {
      fontSize: 16,
      color: colors.primary,
      marginBottom: 8,
    },
    location: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 8,
    },
    info: {
      fontSize: 14,
      color: colors.textPrimary,
      marginBottom: 12,
    },
    note: {
      fontSize: 12,
      color: colors.danger,
    },
  });