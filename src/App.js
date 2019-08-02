import React, {Component} from 'react';
import ProgramInput from './components/programs/ProgramInput'
import {connect} from 'react-redux'
import {fetchPrograms} from './actions/fetchPrograms'


class App extends Component{


  render(){
    return (
      <div className="App">

        <ProgramInput />
      </div>
    )
  }
}


export default connect(null, {fetchPrograms})(App);
