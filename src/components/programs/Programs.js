import React from 'react'
import Program from './Program'
import {Grid, Button} from 'semantic-ui-react'


const Programs = (props) => {

  return(
      <div>
        <div className='add btn div'>
          <Button icon='plus'></Button>
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
