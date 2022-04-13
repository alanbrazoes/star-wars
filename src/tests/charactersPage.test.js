import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import CharactersPage from '../pages/CharactersPage';
import renderWithRouter from './renderWithRouter';

const { characterMock } = require('./mocks/index');

const mocks = require('../services');

describe('Characters Page', () => {
  it(`When rendering CharactersPage the text 'Loading' appears on the screen.`, () => {
    renderWithRouter(<CharactersPage />);
    const loading = screen.getByText(/loading.../i);
    expect(loading).toBeInTheDocument();
  });

  it('Should render persons in screen.', async () => {
    mocks.getCharacters = jest.fn().mockImplementation(() => characterMock);

    const { queryByText, queryByRole } = renderWithRouter(<CharactersPage />);
    await waitFor(() => {
      expect(mocks.getCharacters).toBeCalled();
      expect(queryByRole('heading', { name: 'Nome: Alan', level: 3 })).toBeInTheDocument();
      expect(queryByText(/Aniversário: 2000/i)).toBeTruthy();
      expect(queryByText(/genero: male/i)).toBeTruthy();
    });
  });
});
