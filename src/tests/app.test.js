import React from 'react';
import { render, screen } from '@testing-library/react';
import CharactersPage from '../pages/CharactersPage/index';
import '@testing-library/jest-dom/extend-expect';

describe('tela inicial', () => {
  it('Título h1', async () => {
    render(<CharactersPage />)
    expect(screen.queryByText('Star Wars')).toBeInTheDocument()
  })
})
