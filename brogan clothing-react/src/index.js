import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Template2 from './views/template2'
import Editor from './views/editor'
import Index from './views/index'
import Template1 from './views/template1'
import Vcards from './views/vcards'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Template2} exact path="/template2" />
        <Route component={Editor} exact path="/" />
        <Route component={Index} exact path="/index" />
        <Route component={Template1} exact path="/template1" />
        <Route component={Vcards} exact path="/vcards" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
