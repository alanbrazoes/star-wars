import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import { render } from '@testing-library/react'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return({
    ...render(
      <Router>
        <Switch>
          <Route history={history}>{component}</Route>
        </Switch>
      </Router>
    ),
    history
  })
}

export default renderWithRouter