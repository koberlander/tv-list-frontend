import React, {Component} from 'react'
import NavBar from './containers/NavBar'
import ProgramsContainer from './containers/ProgramsContainer'
import Footer from './components/Footer'
import {connect} from 'react-redux'
import {fetchPrograms} from './actions/fetchPrograms'

class App extends Component{

//move componentDidMount here
//we need our ProgramsContainer to render before we can fetchPrograms from our backend, so we put it inside componentDidMount(). It's also possible to put event listeners here, though I haven't personally done it.
componentDidMount(){
  //imported my fetchPrograms action as a prop using connect
  this.props.fetchPrograms()
}
//connect to store
//provide ProgramsContainer with programs prop here

  render(){
    return (
      <div className="App">
        <NavBar />
        <ProgramsContainer programs={this.props.programs}/>
        <Footer />
      </div>
    )
  }
}

//move mapStateToProps here
//our programReducer has state = {programs: []} as one of its arguments. Since we moved our actions to their own individual files
const mapStateToProps = state => {
  return ({programs: state.programs})
}
export default connect(mapStateToProps, {fetchPrograms})(App)
