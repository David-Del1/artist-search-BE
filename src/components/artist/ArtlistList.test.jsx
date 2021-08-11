import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ArtistList from './ArtistList';

describe('Artist List Component', () => {
  it('form, ul and two buttons', () => {

    const artist = [{
      'id': '1',
      'name': 'sam',
    }];

    const { asFragment } = render (
      <MemoryRouter>
        <ArtistList {...artist} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
