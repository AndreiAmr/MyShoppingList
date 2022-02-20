import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { ThemeProvider } from 'styled-components/native';
import NewList from '.';
import theme from '../../styles/theme';

jest.mock('react-native-responsive-screen', () => {
  return {
    heightPercentageToDP: jest.fn(() => 10),
    widthPercentageToDP: jest.fn(() => 10),
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('@fortawesome/react-native-fontawesome', () => {
  return {
    FontAwesomeIcon: '',
  };
});

jest.mock('@react-native-firebase/firestore', () => {});
jest.mock('@react-native-firebase/auth', () => {});

const ComponentToTest = () => {
  return (
    <ThemeProvider theme={theme}>
      <NewList />
    </ThemeProvider>
  );
};

describe('New List screen', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<ComponentToTest />);

    expect(toJSON()).toMatchSnapshot();
  });
});
