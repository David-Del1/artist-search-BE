import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import AlbumList from './AlbumList';

describe('Album List Component', () => {
  it('ul and two buttons', () => {
    const album = [{
      'id': '1',
      'title': 'something',
      'url': 'https://supercool.com'
    }];

    const { asFragment } = render (
      <MemoryRouter>
        <AlbumList {...album} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
