import React, {Component} from 'react'
import NavBar from './containers/NavBar'
import ProgramInput from './components/programs/ProgramInput'
import {connect} from 'react-redux'
import {fetchPrograms} from './actions/fetchPrograms'
import {addProgram} from './actions/addProgram'
import ProgramsContainer from './containers/ProgramsContainer'

class App extends Component{


  render(){
    return (
      <div className="App">
        <NavBar />
        <ProgramInput />
        <ProgramsContainer />
        <div>Footer</div>
      </div>
    )
  }
}


export default connect(null, {fetchPrograms, addProgram })(App);
