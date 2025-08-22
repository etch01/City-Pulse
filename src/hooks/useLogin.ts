import { useCallback, useEffect, useMemo, useState, useContext } from 'react';
import {
  biometricPrompt,
  getBiometricEnabled,
  getBiometricLabel,
  isBiometricAvailable,
  setBiometricEnabled,
} from '../utils/biometrics';
import { saveToken, removeToken } from '../screens/Auth/token';
import { TokenCtx } from "../screens/Auth/token";

export type LoginVM = ReturnType<typeof useLoginViewModel>;

export function useLoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [biometricEnabled, setBiometricEnabledState] = useState(false);
  const [biometricLabel, setBiometricLabel] = useState('Login with Biometrics');

  const  { setToken }  = useContext(TokenCtx);

  const canSubmit = useMemo(
    () => email.length > 0 && password.length >= 6 && !loading,
    [email, password, loading]
  );

  useEffect(() => {
    (async () => {
      const available = await isBiometricAvailable();
      setBiometricAvailable(available);
      setBiometricEnabledState(await getBiometricEnabled());
      setBiometricLabel(await getBiometricLabel());
    })();
  }, []);

  const handleLogin = useCallback(async (): Promise<boolean> => {
    setError(null);
    setLoading(true);
    try {
      //Login api should be called here
      if (email == 'test@app.com' && password == '123456'){
        setLoading(false);
        saveToken("mocked-token")
        setToken("mocked-token")
        return true;
      }else{
        setLoading(false);
        setError('Wrong email or password');
        return false;
      }

    } catch (e: any) {
      setLoading(false);
      setError(e?.message ?? 'Login failed');
      return false;
    }
  }, [email, password]);

  const handleBiometricToggle = useCallback(async (next: boolean) => {
    setBiometricEnabledState(next);
    await setBiometricEnabled(next);
  }, []);

  const handleBiometricLogin = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const success = await biometricPrompt();
      saveToken("mocked-token")
      setToken("mocked-token")
      setLoading(false);
      return success;
    } catch (e: any) {
      setLoading(false);
      setError('Biometric auth failed');
      return null;
    }
  }, []);

  const handleLogout = () =>{
    removeToken();
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    canSubmit,
    biometricAvailable,
    biometricEnabled,
    biometricLabel,
    handleLogin,
    handleBiometricToggle,
    handleBiometricLogin,
    handleLogout
  };
}