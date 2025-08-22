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
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to your account</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
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
            placeholder={"Password"}
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
            {loading ? "Logging in..." : "Login"}
          </Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don’t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Biometrics Button */}
        <TouchableOpacity onPress={handleBiometricLogin} style={{ marginTop: 20 }}>
          <Text style={styles.footerLink}>Use Biometrics</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;