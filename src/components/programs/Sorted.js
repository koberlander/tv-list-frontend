import React from 'react'
import {Link} from 'react-router-dom'
import Program from './Program'

import {Grid, Button, Popup} from 'semantic-ui-react'

const SortedContainer = (props) => {

  // temporary array holds programs with position and sort-value
  let sortedPrograms = props.programs

  // sorting the mapped array containing the reduced values
  sortedPrograms.sort(function(a, b) {
    // debugger
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    }

    return 0
  })

console.log(sortedPrograms)

  return(
    <div>
      <div className='add btn div'>
      <Button.Group float='right'>
        <Popup
          trigger={<Button icon='list alternate outline' as={Link} to='/programs' />}
          content="Return to Full List"
          size='tiny'
          />
          </Button.Group>
      </div>
      <Grid columns='six' divided='vertically'>
        <Grid.Row >
          {sortedPrograms && sortedPrograms.map((program) => <Program key={program.name} program={program} match={props.match}/>)}
        </Grid.Row>
      </Grid>

  </div>
  )
}

export default SortedContainer
