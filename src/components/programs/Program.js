import React from 'react'
import {connect} from 'react-redux'
import {deleteProgram} from '../../actions/deleteProgram'
import {Grid, Card, Image, Button} from 'semantic-ui-react'

const Program = (props) => {

console.log(props.program)

  let handleClick = (id) => {
    // debugger
    this.props.deleteProgram(id)

  }


/* To access a specific program/:id, 'routerProps' provides 'match.params.id'. Can use it here to access the id needed by .mapping over my rograms array. */

let program = props.program ? props.program : props.programs[props.match.params.id - 1]

  // console.log(program)

    //using ternary in return because I need programs array to be populated before rendering any of these cards.
    return(
        <Grid.Column>
          <Card onClick={(_) => this.handleClick(program.id)}>
            <Image src={program ? program.image : null} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{program ? program.name: null}</Card.Header>
              <Card.Meta>
                <span className='date'>{program ? program.network : null}</span>
              </Card.Meta>
              <Card.Description>
                Notes
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui three buttons'>
                <Button basic icon='pencil'></Button>
                <Button basic icon='trash'></Button>
                <Button basic icon='heart'></Button>  
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
    )
}

export default connect(null, {deleteProgram})(Program)
