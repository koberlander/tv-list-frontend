import React from 'react'
import Programs from '../components/programs/Programs'
import ProgramInput from '../components/programs/ProgramInput'
import Watchlist from './Watchlist'

class ProgramsContainer extends React.Component {
//change ProgramsContainer.js to functional?

  render(){
    return(
      <div>
        <ProgramInput />
        <Programs programs={this.props.programs} />
        <Watchlist />
      </div>
    )
  }
}



export default ProgramsContainer
