import React, {Component} from 'react'
import NavBar from './containers/NavBar'
import ProgramsContainer from './containers/ProgramsContainer'
import Footer from './components/Footer'

class App extends Component{


  render(){
    return (
      <div className="App">
        <NavBar />
        <ProgramsContainer />
        <Footer />
      </div>
    )
  }
}


export default App
