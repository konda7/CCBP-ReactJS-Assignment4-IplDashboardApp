import './App.css'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <>
    {/* <Home /> */}
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ipl/:id" component={TeamMatches} />
    </Switch>
  </>
)

export default App
