import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/presentation/styles/theme';

const App = () => {
  return <ThemeProvider theme={theme} />;
};

export default App;
