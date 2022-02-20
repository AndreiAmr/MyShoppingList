import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Header from '.';
import theme from '../../styles/theme';

jest.mock('react-native-responsive-screen', () => {
  return {
    heightPercentageToDP: jest.fn(() => 10),
    widthPercentageToDP: jest.fn(() => 10),
  };
});

jest.mock('@fortawesome/react-native-fontawesome', () => {
  return {
    FontAwesomeIcon: '',
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

const ComponentToTest = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header goBackLabel="voltar" title="Test" />
    </ThemeProvider>
  );
};

describe('Header component', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<ComponentToTest />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render goBack button', () => {
    const { getByTestId } = render(<ComponentToTest />);
    const goBackButton = getByTestId('go-back-button-test-id');
    expect(goBackButton).toBeTruthy();
  });

  it('should render title', () => {
    const { getByTestId } = render(<ComponentToTest />);
    const title = getByTestId('title-test-id');
    expect(title).toBeTruthy();
  });
});
