import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Welcome from '.';
import theme from '../../styles/theme';

const ComponentToTest = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
};

describe('Welcome screen', () => {
  it('should render correctly', () => {
    const screen = render(<ComponentToTest />);

    expect(screen).toMatchSnapshot();
  });

  it('should render the app name', () => {
    const { getByTestId } = render(<ComponentToTest />);
    const appName = getByTestId('app-name-test-id');

    expect(appName).toBeTruthy();
  });

  it('should render the app description', () => {
    const { getByTestId } = render(<ComponentToTest />);
    const description = getByTestId('app-description-test-id');

    expect(description).toBeTruthy();
  });

  it('should have a Google button', () => {
    const { getByTestId } = render(<ComponentToTest />);
    const googleButton = getByTestId('google-button-test-id');
    fireEvent(googleButton, 'press');

    expect(googleButton).toBeCalled();
  });
});
