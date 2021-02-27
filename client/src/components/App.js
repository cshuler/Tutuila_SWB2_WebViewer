import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './NavBar'
import Home from './Home'
import Workspace from './Workspace'
import Background from './Background'
import About from './About'
import Instruction from './Instruction'
import ModelDetails from './ModelDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  navBar: {
    width: "745px"
  }
}

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar style={styles.navBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/workspace" component={Workspace} />
          <Route exact path="/modeldetails" component={ModelDetails} />
          <Route exact path="/background" component={Background} />
          <Route exact path="/about" component={About} />
          <Route exact path="/instruction" component={Instruction} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
