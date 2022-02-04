import React from 'react';
import { render, screen } from '@testing-library/react';
import CharactersPage from '../pages/CharactersPage/index';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  it('Título.', () => {
    render(<CharactersPage />)
    expect(screen.queryByText('Star Wars')).toBeInTheDocument()
  })

  it(`Renderiza componente de loading caso a prop character venha 'undefined'.`, () => {
    render(<CharactersPage character={ undefined }/>)
    expect(screen.queryByText('Loading...')).toBeInTheDocument()
  })
})
