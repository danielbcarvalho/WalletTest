import React from 'react';

import { render } from '../../../jest/test-utils';

import StyledBackgroundContainer from '.';

describe('StyledBackgroundContainer', () => {
  test('matches snapshot', () => {
    const { toJSON } = render(<StyledBackgroundContainer />);
    expect(toJSON()).toMatchSnapshot();
  });
});
