import React, {Component} from 'react';
import ProgramInput from './components/programs/ProgramInput'
import {connect} from 'react-redux'
import {fetchPrograms} from './actions/fetchPrograms'


class App extends Component{

  componentDidMount(){
    this.props.fetchPrograms({type: 'FETCH_PROGRAMS', payload: {name: 'Maxwell Dog Variety Hour'}})

  }

  render(){
    return (
      <div className="App">

        <ProgramInput />
      </div>
    )
  }
}


export default connect(null, {fetchPrograms})(App);
