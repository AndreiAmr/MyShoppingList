import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import App from './App';

describe('App component', () => {
  it('should render correctly', () => {
    const AppComponent = render(<App />);

    expect(AppComponent).toMatchSnapshot();
  });
});
