import React from 'react'
import Program from './Program'
import filterOptions from './filterOptions'

import {Grid, Button, Popup, Header, Icon, Dropdown} from 'semantic-ui-react'

import {Link} from 'react-router-dom'


const Programs = (props) => {
// console.log('Props.programs: ', props.programs)

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

        <Header as='h6'>
          <Icon  />
          Filter
            <Header.Content>
                <Dropdown
                  inline
                  header='Choose one'
                  options={filterOptions}
                  defaultValue={filterOptions[0].value}
                />
            </Header.Content>
        </Header>

        <Grid columns='six' divided='vertically'>
            <Grid.Row >
              {props.programs && props.programs.map((program) => <Program key={program.name} program={program} match={props.match}/>)}
            </Grid.Row>
        </Grid>
    </div>
  )
}

export default Programs
