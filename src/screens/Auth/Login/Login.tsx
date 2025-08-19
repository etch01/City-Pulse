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
import { colors } from "../../../theme/colors";
import { useLoginViewModel } from '../../../hooks/useLogin';

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
            placeholder="Email"
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
            placeholder="Password"
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
          <Text style={styles.footerText}>Don’t have an account? </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  image: {
    width: "90%",
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: colors.textPrimary,
  },
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 15,
  },
  footerLink: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});
