import "./App.css";
import { BrowserRouter as Router, Switch } from  "react-router-dom";
import {Routes} from './constants/routes'

import { ws } from './api'
import {useEffect} from "react";

function App() {
  useEffect(() => ws(), [])

  return (
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
  )
}

export default App;
