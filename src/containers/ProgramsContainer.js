import React from 'react'
import Programs from '../components/programs/Programs'
import ProgramInput from '../components/programs/ProgramInput'
import Watchlist from './Watchlist'
import {connect} from 'react-redux'
import {fetchPrograms} from '../actions/fetchPrograms'
import {Route} from 'react-router-dom'
import Program from '../components/programs/Program'

class ProgramsContainer extends React.Component {

//Need the ProgramsContainer to render before fetching from my backend, so fetchPrograms goes inside componentDidMount(), just like usual JS. It's also possible to put event listeners here, though I haven't personally done it.
componentDidMount(){
  //imported fetchPrograms action as a prop using connect
  this.props.fetchPrograms()
}


/* Route component renders something as-is. Router can pass down props via routerProps the render method. Render also lets me do a show page for X item, hide a list of all items. See Program.js for how to make a show page, specifically. */



  render(){
    return(
      <div>
        <Route path='/programs/new' component={ProgramInput} />
        <Route path='/programs/:id' render={(routerProps) => <Program {...routerProps} programs={this.props.programs} />} />
        <Route exact path='/programs' render={(routerProps) => <Programs {...routerProps} programs={this.props.programs}/>} />
        <Route path='/watchlist' render={() => <Watchlist programs={this.props.programs} />} />
      </div>
    )
  }
}


// programReducer has state = {programs: []} as one of its arguments. Since we moved our actions to their own individual files
const mapStateToProps = state => {
  return ({programs: state.programs})
}

export default connect(mapStateToProps, {fetchPrograms})(ProgramsContainer)
