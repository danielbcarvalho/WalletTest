import 'react-native-gesture-handler/jestSetup';
import { mockDefaultTheme } from '../src/theme/defaultTheme';

jest.mock('styled-components', () => {
  const original = jest.requireActual('styled-components');

  return {
    ...original,
    useTheme: () => {
      return mockDefaultTheme;
    },
  };
});
