import React from 'react'
import Program from './Program'
import {Grid, Button, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Programs = (props) => {

  // needed to pass 'match' down to the Program so that I could use it to check the urls so comments only render on the details page
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
              {props.programs && props.programs.map((program) => <Program key={program.name} program={program} match={props.match}/>)}
            </Grid.Row>
        </Grid>
    </div>
  )
}

export default Programs
