import React, {Component} from 'react'
import Header from './containers/Header'
import ProgramsContainer from './containers/ProgramsContainer'

class App extends Component{


  render(){
    return (
      <div className="App">
        <Header />
        <ProgramsContainer />
      </div>
    )
  }
}

export default App;
