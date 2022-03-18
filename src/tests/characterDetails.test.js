import React from 'react';
import { waitFor } from '@testing-library/react';
import CharactersPage from '../pages/CharactersPage';
import renderWithRouter from './renderWithRouter';
import CharactersDetailsPage from '../pages/CharactersDetailsPage';

const { characterMock, character } = require('./mocks/index');
const mocks = require('../services');

describe('', () => {
  const films = ['A procura da felicidade', 'Madagascar'];
  const { history } = renderWithRouter(<CharactersPage />);

  test('', async () => {
    mocks.getCharacters = jest.fn().mockImplementation(() => characterMock);
    mocks.getCharacter = jest.fn().mockImplementation(() => character);
    mocks.getPlanet = jest.fn().mockImplementation(() => 'Terra');
    mocks.getFilms = jest.fn().mockImplementation(() => films);
    mocks.getSpecie = jest.fn().mockImplementation(() => 'Human');

    history.push('/details/1');
    const { getByText, queryByText } = renderWithRouter(<CharactersDetailsPage />);
    const { pathname } = history.location;

    expect(pathname).toBe('/details/1');

    await waitFor(() => {
      expect(getByText('Dados')).toBeTruthy();
      expect(queryByText('A procura da felicidade')).toBeTruthy();
    });
  });
});
