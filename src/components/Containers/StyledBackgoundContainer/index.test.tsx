import React from 'react';

import { render } from '../../../../jest/test-utils';

import StyledBackgroundContainer from '.';

describe('StyledBackgroundContainer', () => {
  test('matches snapshot', () => {
    const component = <StyledBackgroundContainer>{}</StyledBackgroundContainer>;

    const { toJSON } = render(component);
    expect(toJSON()).toMatchSnapshot();
  });
});
