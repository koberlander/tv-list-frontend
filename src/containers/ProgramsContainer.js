import React from 'react'
import Programs from '../components/programs/Programs'
import ProgramInput from '../components/programs/ProgramInput'
// import Watchlist from '../components/Watchlist'
import Program from '../components/programs/Program'
import {connect} from 'react-redux'
import {fetchPrograms} from '../actions/fetchPrograms'
import {Route, Switch} from 'react-router-dom'

class ProgramsContainer extends React.Component {

//Need the ProgramsContainer to render before fetching from my backend, so fetchPrograms goes inside componentDidMount(), just like usual JS. It's also possible to put event listeners here, though I haven't personally done it.
componentDidMount(){
  //imported fetchPrograms action as a prop using connect
  this.props.fetchPrograms()
}


/* Route component renders something as-is. Router can pass down props via routerProps the render method. Render also lets me do a show page for X item, hide a list of all items. Since I have both /programs and programs/:id routes, I used Switch to avoid confusion and double component rendering. Switch finds the first route that matches my URL. The double renderings occurred because when using 'exact path' with a URL, it returns everything that matches. I pass in routerProps to my routes using render because, unlike the commponent=, render= does not automatically provide our components with useful props like .match or .history */



  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' render={(routerProps) => <Programs {...routerProps} programs={this.props.programs}/>} /> />
          <Route exact path='/programs' render={(routerProps) => <Programs {...routerProps} programs={this.props.programs} />} />
          <Route path='/programs/new' render={(routerProps) => <ProgramInput {...routerProps}/>}/>
          <Route path='/programs/:id' render={(routerProps) => <Program {...routerProps} programs={this.props.programs}/>}/>
          <Route exact path='/programs/:id/comments' render={(routerProps) => <Program {...routerProps} program={this.props.program}/>}/>
          <Route exact path='/watchlist' render={(routerProps) => <Program {...routerProps} programs={this.props.programs} />} />
        </Switch>
      </div>
    )
  }
}


// programReducer has state = {programs: []} as one of its arguments.
const mapStateToProps = state => {
  return ({programs: state.programs})
}

export default connect(mapStateToProps, {fetchPrograms})(ProgramsContainer)
