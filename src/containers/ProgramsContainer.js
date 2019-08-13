import React from 'react'
import Programs from '../components/programs/Programs'
import ProgramInput from '../components/programs/ProgramInput'
import Watchlist from '../components/Watchlist'
import {connect} from 'react-redux'
import {fetchPrograms} from '../actions/fetchPrograms'
import {Route, Switch} from 'react-router-dom'
import Program from '../components/programs/Program'

class ProgramsContainer extends React.Component {

//Need the ProgramsContainer to render before fetching from my backend, so fetchPrograms goes inside componentDidMount(), just like usual JS. It's also possible to put event listeners here, though I haven't personally done it.
componentDidMount(){
  //imported fetchPrograms action as a prop using connect
  this.props.fetchPrograms()
}


/* Route component renders something as-is. Router can pass down props via routerProps the render method. Render also lets me do a show page for X item, hide a list of all items. Since I have both /programs and programs/:id routes, I used Switch to avoid confusion and double component rendering. Switch finds the first route that matches my URL. The double renderings occurred because when using 'exact path' with a URL, it returns everything that matches. */



  render(){
    return(
      <div>
        <Switch>
          <Route path='/programs/new' component={ProgramInput} />
          <Route path='/programs/:id' render={(props) => {let programId = props.match.params.id
            return <Program programs={this.props.programs.find(program => program.id === programId)}
          />}} />
          <Route path='/programs' render={() => <Programs programs={this.state.programs}/>} />
        </Switch>
        <Route path='/watchlist' render={() => <Watchlist programs={this.props.programs} />} />
      </div>
    )
  }
}


// programReducer has state = {programs: []} as one of its arguments.
const mapStateToProps = state => {
  return ({programs: state.programs})
}

export default connect(mapStateToProps, {fetchPrograms})(ProgramsContainer)
