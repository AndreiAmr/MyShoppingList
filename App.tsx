import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/presentation/routes';
import theme from './src/presentation/styles/theme';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '405589218220-j974asss1tvf9j7k2nbdb8o9o3p590ag.apps.googleusercontent.com',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
