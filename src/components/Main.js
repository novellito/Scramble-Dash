import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Scoreboard from './Scoreboard.js'
import Container from '../components/Container.js';


//Main contains the home and scoreboard routes
const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Container}/>
      <Route exact path='/scoreboard' component={Scoreboard}/>
      <Route exact path='/:anything' component={Container}/>
    </Switch>
  </div>
)

export default Main;
