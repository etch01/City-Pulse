import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useLoginViewModel } from '../../../hooks/useLogin';
import { styles } from './styles'
import { colors } from "../../../theme/colors";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    loading,
    error,
    handleLogin,
    handleBiometricLogin,
  } = useLoginViewModel();

  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Illustration */}
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/295/295128.png" }}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Welcome Text */}
        <Text style={styles.title}>{t('auth.welcome')}</Text>
        <Text style={styles.subtitle}>{t('auth.loginTitle')}</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={t('auth.emailPlaceholder')}
            placeholderTextColor={colors.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize={"none"}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={t('auth.passwordPlaceholder')}
            placeholderTextColor={colors.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Show error */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? t('auth.loginLoadingText') : t('auth.login')}
          </Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{t('auth.dontHaveAccount')}</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>{t('auth.signup')}</Text>
          </TouchableOpacity>
        </View>

        {/* Biometrics Button */}
        <TouchableOpacity onPress={handleBiometricLogin} style={{ marginTop: 20 }}>
          <Text style={styles.footerLink}>{t('auth.useBiometrics')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;