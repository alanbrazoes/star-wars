import React from 'react'
import {render, screen} from '@testing-library/react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

import CharactersPage from '../pages/CharactersPage';

describe('Lista de personagens', () => {
  const history = createMemoryHistory()
  render(
    <Router>
      <Switch>
        <Route history={ history }><CharactersPage /></Route>
      </Switch>
    </Router>
  )
  
  it(`Ao renderizar o componente cheractesPage o texto 'Loading...' aparece na tela.`, 
  () => {
    const loading = screen.getByText(/loading.../i)
    expect(loading).toBeInTheDocument()
  })
})