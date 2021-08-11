import React from 'react';
import { render } from '@testing-library/react';

describe('album component', () => {
  it('makes a album', () => {
    const { asFragment } = render(
      <section>
        <p>Sara</p>
        <p>5</p>
      </section>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
