import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/movies/:imdbID' children={<SingleMovie />}></Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App;
