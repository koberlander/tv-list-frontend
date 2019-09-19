import React from 'react'
import Program from './Program'
import {connect} from 'react-redux'
import handleTitleSort from '../../actions/programs/handleTitleSort'

import {Grid, Button, Popup} from 'semantic-ui-react'

import {Link} from 'react-router-dom'


const Programs = (props) => {
// console.log('Props.programs: ', props.programs)

  // needed to pass 'match' down to the Program so that I could use it to check the urls so comments only render on the details page

  return(
      <div>
        <div className='add btn div'>
        <Button.Group float='right'>
          <Popup
            trigger={<Button icon='plus' as={Link} to='/programs/new' />}
            content="Add more shows."
            size='tiny'
            />
            <Popup
            trigger={<Button icon='filter' as={Link} to='/watchlist' />}
            content="Watchlist only."
            size='tiny'
            />
            <Popup
            trigger={<Button icon='sort alphabet down' onClick={() => props.handleTitleSort}/>}
            content="Sort by Title."
            size='tiny'
            />
        </Button.Group>
        </div>


        <Grid columns='six' divided='vertically'>
            <Grid.Row >
              {props.programs && props.programs.map((program) => <Program key={program.name} program={program} match={props.match}/>)}
            </Grid.Row>
        </Grid>
    </div>
  )
}

export default connect(null, {handleTitleSort})(Programs)
