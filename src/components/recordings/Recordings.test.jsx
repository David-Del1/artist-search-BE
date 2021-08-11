import React from 'react';
import { render } from '@testing-library/react';

describe('recordings Component', () => {
  it('li with h2 inside', () => {

    const { asFragment } = render (
      <li>
        <h2>Hi I&apos;m guessing</h2>
      </li>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
