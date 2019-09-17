import React from 'react'
import {Link} from 'react-router-dom'
import Program from './Program'

import {Grid, Button, Popup} from 'semantic-ui-react'

const WatchlistContainer = (props) => {
// debugger
  let watchlistPrograms =
    props.programs && props.programs.filter(program => program.watchlist === true)
    // console.log('watchlistProgram: ', watchlistProgram);
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
            {watchlistPrograms && watchlistPrograms.map((program) => <Program key={program.name} program={program} match={props.match}/>)}
          </Grid.Row>
      </Grid>
  </div>
  )
}

export default WatchlistContainer
