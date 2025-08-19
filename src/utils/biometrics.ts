import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BIOMETRIC_ENABLED_KEY = 'biometric_enabled';
const rnBiometrics = new ReactNativeBiometrics();

export async function isBiometricAvailable(): Promise<boolean> {
  const { available } = await rnBiometrics.isSensorAvailable();
  return available;
}

export async function getBiometricLabel(): Promise<string> {
  const { available, biometryType } = await rnBiometrics.isSensorAvailable();
  if (!available) return '';
  switch (biometryType) {
    case BiometryTypes.FaceID:
      return 'Login with Face ID';
    case BiometryTypes.TouchID:
      return 'Login with Touch ID';
    default:
      return 'Login with Biometrics';
  }
}

export async function setBiometricEnabled(enabled: boolean) {
  await AsyncStorage.setItem(BIOMETRIC_ENABLED_KEY, enabled ? '1' : '0');
}

export async function getBiometricEnabled(): Promise<boolean> {
  const v = await AsyncStorage.getItem(BIOMETRIC_ENABLED_KEY);
  return v === '1';
}

// Auth prompt
export async function biometricPrompt(): Promise<boolean> {
  const { success } = await rnBiometrics.simplePrompt({
    promptMessage: 'Authenticate to login',
    cancelButtonText: 'Cancel',
  });
  return success;
}
