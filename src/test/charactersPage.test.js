import React from 'react'
import { screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import * as apis from '../services'
import { character_mock } from './mocks'

import CharactersPage from '../pages/CharactersPage';
import renderWithRouter from './renderWithRouter'

describe('Characters Page', () => {
  it(`When rendering CharactersPage the text 'Loading' appears on the screen.`, 
  () => {
    renderWithRouter(<CharactersPage />)

    const loading = screen.getByText(/loading.../i)
    expect(loading).toBeInTheDocument()
  })

  it('Should render persons in screen.', async () => {    
    const getCharacters = apis.getCharacters = jest.fn().mockImplementation(() => character_mock)

    const { queryByText, queryByRole } = renderWithRouter(<CharactersPage />)
    await waitFor(() => {
      expect(getCharacters).toBeCalled()
      expect(queryByText(/nome: alan/i)).toBeTruthy()
      expect(queryByText(/Aniversário: 2000/i)).toBeTruthy()
      expect(queryByText(/genero: male/i)).toBeTruthy()
      expect(queryByRole('button', { name: /conhecer alan/i })).toBeTruthy()
    })
  })
})