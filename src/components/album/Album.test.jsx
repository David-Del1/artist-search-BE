import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Album from './Album';

describe('album component', () => {
  it('makes a album', () => {
    const { asFragment } = render(

      <MemoryRouter>
        <Album />
      </MemoryRouter>

    );

    expect(asFragment()).toMatchSnapshot();
  });
});
