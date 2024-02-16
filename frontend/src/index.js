import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Editor from './views/editor'
import Vcards from './views/vcards'
import NotFound from './views/not-found'
import Profile from './views/profile'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route component={Editor} exact path="/" />
        <Route component={Editor} exact path="/editor" />
        <Route component={Vcards} exact path="/vcards" />
        <Route component={Profile} exact path="/:short_id" />


        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
