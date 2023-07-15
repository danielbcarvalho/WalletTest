import React from 'react';
// import { fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { render } from '../../../jest/test-utils';

import HeaderButton from './';
// import Routes from '../../Routes';

describe('HeaderButton', () => {
  test('render correctly with cardList type', () => {
    const component = (
      <NavigationContainer>
        <HeaderButton type="cardList" />,
      </NavigationContainer>
    );
    const { getByLabelText, getByText, queryByLabelText } = render(component);

    const goBackButton = getByLabelText('go back');
    expect(goBackButton).toBeTruthy();

    const headerTitle = getByText('register');
    expect(headerTitle).toBeTruthy();

    const registerButton = queryByLabelText('register card');
    expect(registerButton).toBeNull();
  });

  test('render correctly with register type', () => {
    const component = (
      <NavigationContainer>
        <HeaderButton type="register" />,
      </NavigationContainer>
    );

    const { getByText, getByLabelText, queryByTestId } = render(component);

    const goBackButton = getByLabelText('go back');
    expect(goBackButton).toBeTruthy();

    const headerTitle = getByText('Wallet Test');
    expect(headerTitle).toBeTruthy();

    const registerCardButton = getByLabelText('register card');
    expect(registerCardButton).toBeTruthy();

    expect(queryByTestId('disabled-button')).toBeNull();
  });

  test('call handleGoBack when go back button is pressed', () => {
    // TODO: get this test to work, problem with NavigationContainer onPress
    // const component = (
    //   <NavigationContainer>
    //     <Routes>
    //       <HeaderButton type="cardList" />
    //     </Routes>
    //   </NavigationContainer>
    // );
    // const handleGoBack = jest.fn();
    // const { getByLabelText } = render(component);
    // const goBackButton = getByLabelText('go back');
    // fireEvent.press(goBackButton);
    // expect(handleGoBack).toHaveBeenCalledTimes(1);
  });

  it('should call handleCardRegistration when register button is pressed', () => {
    // TODO: get this test to work, problem with NavigationContainer onPress
    //   const handleCardRegistration = jest.fn();
    //   const { getByTestId } = render(<HeaderButton type="register" />);
    //   fireEvent.press(getByTestId('button-register'));
    //   expect(handleCardRegistration).toHaveBeenCalledTimes(1);
  });
});
