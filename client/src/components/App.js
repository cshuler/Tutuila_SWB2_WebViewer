import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Workspace from './Workspace'
import Background from './Background'
import About from './About'
import Instruction from './Instruction'
import FooterBar from './FooterBar'
import ModelDetails from './ModelDetails'
import TempWS from './TempWS'
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/tempworkspace" component={TempWS} />
          <Route exact path="/workspace" component={Workspace} />
          <Route exact path="/modeldetails" component={ModelDetails} />
          <Route exact path="/background" component={Background} />
          <Route exact path="/about" component={About} />
          <Route exact path="/instruction" component={Instruction} />
          <FooterBar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
