import React from 'react'
import Program from './Program'
import {Grid, Button, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Programs = (props) => {

  return(
      <div>
        <div className='add btn div'>
          <Popup
            trigger={<Button icon='plus' as={Link} to='/programs/new' />}
            content="Add more shows."
            size='tiny'
          />
        </div>
        <Grid columns='six' divided='vertically'>
          <Grid.Row >
              {props.programs.map((program) => <Program key={program.name} program={program} />)}
          </Grid.Row>
        </Grid>

      </div>
  )
}

export default Programs
