import React from 'react'
import Programs from '../components/programs/Programs'
import ProgramInput from '../components/programs/ProgramInput'
import Program from '../components/programs/Program'
import Watchlist from '../components/programs/Watchlist'
import {connect} from 'react-redux'
import {fetchPrograms} from '../actions/programs/fetchPrograms'
import {Route, Switch} from 'react-router-dom'

class ProgramsContainer extends React.Component {


//Need the ProgramsContainer to render before fetching from my backend, so fetchPrograms goes inside componentDidMount(), just like usual JS. It's also possible to put event listeners here, though I haven't personally done it.
componentDidMount(){
  //imported fetchPrograms action as a prop using connect
  this.props.fetchPrograms()
}

// handleTitleSwap(programs, firstIndex, secondIndex){
//
//   // STEP 3 - SET THE TITLE OF THE FIRST PROGRAM IN ARRAY TO FIRST VALUE
//   const firstValue = programs[firstIndex].name
//   console.log('original value of firstIndex: ', firstValue)
//
//
//   // STEP 4 - CHANGE VALUE OF programs[firstValue] TO secondIndex IN ORDER TO COMPARE IT WITH A NEW ITEM IN MY PROGRAMS ARRAY
//   programs[firstValue] = programs[secondIndex].name
//   console.log('new value of firstIndex: ', programs[firstValue])
//
//   // STEP 5: UPDATE THE SECOND SWAP LOCATION WITH THE VALUE OF FIRST VALUE
//
//   programs[secondIndex].name = firstValue
//   console.log('new value of secondIndex: ', programs[secondIndex])
// }

// handleTitleSwap(programs, 0, 1)

/* Route component renders something as-is. Router can pass down props via routerProps the render method. Render also lets me do a show page for X item, hide a list of all items. Since I have both /programs and programs/:id routes, I used Switch to avoid confusion and double component rendering. Switch finds the first route that matches my URL. The double renderings occurred because when using 'exact path' with a URL, it returns everything that matches. I pass in routerProps to my routes using render because, unlike the commponent=, render= does not automatically provide our components with useful props like .match or .history */


  render(){
// debugger
    return(
      <div>
        <Switch>
          <Route exact path='/' render={(routerProps) => <Programs {...routerProps} programs={this.props.programs}/>} /> />
          <Route exact path='/programs' render={(routerProps) => <Programs {...routerProps} programs={this.props.programs}/> } />
          <Route path='/programs/new' render={(routerProps) => <ProgramInput {...routerProps}/>}/>
          <Route path='/programs/:id' render={(routerProps) => <Program {...routerProps} programs={this.props.programs}/>}/>
          <Route path='/programs/:id/comments' render={(routerProps) => <Program {...routerProps} program={this.props.program}/>}/>
          <Route path='/watchlist' render={(routerProps) => <Watchlist {...routerProps} programs={this.props.programs}/>}/>
        </Switch>
      </div>
    )
  }
}


// programReducer has state = {programs: []} as one of its arguments.
const mapStateToProps = state => {
  return ({
    programs: state.programs
  })
}

export default connect(mapStateToProps, {fetchPrograms})(ProgramsContainer)
