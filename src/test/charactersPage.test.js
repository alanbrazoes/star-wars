import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {render, screen, waitFor} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import * as apis from '../services'

import CharactersPage from '../pages/CharactersPage';

describe('Lista de personagens', () => {
  it(`Ao renderizar o componente cheractesPage o texto 'Loading...' aparece na tela.`, 
  () => {
    const history = createMemoryHistory()
    render(
      <Router>
        <Switch>
          <Route history={ history }><CharactersPage /></Route>
        </Switch>
      </Router>
    )
    const loading = screen.getByText(/loading.../i)
    expect(loading).toBeInTheDocument()
  })

  it('Renderiza personagens na tela', async () => {
    const history = createMemoryHistory()
    const character = [{
      name: 'Alan',
      gender: 'male',
      birth_year: 21
    }]

    apis.getCharacters = jest.fn().mockImplementation(() => character)

    const {queryByText} = render(
      <Router>
        <Switch>
          <Route history={ history }><CharactersPage /></Route>
        </Switch>
      </Router>
    )
    
    await waitFor(() => {
      expect(queryByText('Nome: Alan')).toBeTruthy()
    })
  })
})