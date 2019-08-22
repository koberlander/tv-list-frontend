import React from 'react'
import Program from './Program'
import {Grid, Button, Popup} from 'semantic-ui-react'


const Programs = (props) => {

  return(
      <div>
        <div className='add btn div'>
          <Popup
            trigger={<Button icon='plus' />}
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
