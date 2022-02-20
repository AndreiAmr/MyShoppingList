import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { ThemeProvider } from 'styled-components/native';
import Routes from './src/presentation/routes';
import theme from './src/presentation/styles/theme';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const GestureHandler = styled(GestureHandlerRootView)`
  flex: 1;
`;

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '405589218220-j974asss1tvf9j7k2nbdb8o9o3p590ag.apps.googleusercontent.com',
    });
  }, []);

  return (
    <SafeArea>
      <GestureHandler>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </GestureHandler>
    </SafeArea>
  );
};

export default App;
