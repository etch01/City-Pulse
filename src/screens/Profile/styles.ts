import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../theme/colors";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    profileBody:{
        marginTop: 30,
        padding: 16
    },
    profileImageContainer:{
        borderRadius: 50,
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    profileImage:{
        width: undefined,
        height: undefined,
        flex: 1
    },
    userName:{ 
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: colors.textPrimary
    },
    rowsBody:{
        height: height,
        marginTop: 40,
        gap:20
    },
    profileRow:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowIcon: {
        width:25, 
        height: 25
    },
    rowText: {
        fontSize: 12,
        color: colors.textSecondary,
        marginHorizontal: 10
    },
    activeLanguage:{
        color: colors.primary,
        fontWeight: '600'
    }
  });