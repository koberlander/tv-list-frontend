import React, {Component} from 'react'
import NavBar from './containers/NavBar'
import ProgramsContainer from './containers/ProgramsContainer'

class App extends Component{
// we attached app to the DOM in index.js. Here we render the NavBar and ProgramsContainer, using connect to access our async fetchPrograms action

  render(){
    return (
      <div className="App">
        <NavBar />
        <ProgramsContainer />
        <div>Footer</div>
      </div>
    )
  }
}

export default App;
