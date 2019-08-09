import React from 'react'
import Programs from '../components/programs/Programs'
import ProgramInput from '../components/programs/ProgramInput'
import {connect} from 'react-redux'
import {fetchPrograms} from '../actions/fetchPrograms'

class ProgramsContainer extends React.Component {
  //we need our ProgramsContainer to render before we can fetchPrograms from our backend, so we put it inside componentDidMount(). It's also possible to put event listeners here, though I haven't personally done it.
  componentDidMount(){
    //imported my fetchPrograms action as a prop using connect
    this.props.fetchPrograms()
  }

  render(){
    return(
      <div>
        <ProgramInput />
        <Programs programs={this.props.programs} />
      </div>
    )
  }
}

//our programReducer has state = {programs: []} as one of its arguments. Since we moved our actions to their own individual files
const mapStateToProps = state => {
  return ({programs: state.programs})
}

export default connect(mapStateToProps, {fetchPrograms})(ProgramsContainer)
