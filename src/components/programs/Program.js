import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card, Image, Button, Popup} from 'semantic-ui-react'
import {deleteProgram} from '../../actions/deleteProgram'
import CommentsContainer from '../../containers/CommentsContainer'

const Program = (props) => {

// console.log(props.program)

  let handleClick = (id) => {
    // debugger
    this.props.deleteProgram(id)

  }

console.log(this);

/* To access a specific program/:id, 'routerProps' provides 'match.params.id'. Can use it here to access the id needed by .mapping over my rograms array. */
// REMEMBER: there are mismatches in program.id and match.params.id because some items have been deleted from the db
let program = props.program ? props.program : props.programs[props.match.params.id - 1]
let programId = program.id

    return(
        <Grid.Column>
          <Card onClick={(_) => this.handleClick(program)}>
            <Image src={program ? program.image : null} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{program ? program.name: null}</Card.Header>
              <Card.Meta>
                <span className='date'>{program ? program.network : null}</span>
              </Card.Meta>

            </Card.Content>
            <Card.Content extra>
              <div className='ui three buttons'>
                <Popup
                  trigger={<Button icon='trash' />}
                  content="Delete this show."
                  size='tiny'
                />
                <Popup
                  trigger={<Button icon='heart' />}
                  content="Add to Watchlist."
                  size='tiny'

                />
                <Popup
                  trigger={<Button icon='comment alternate outline' />}
                  content="Add a comment."
                  size='tiny'

                />
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
        <CommentsContainer />
    )
}

export default connect(null, {deleteProgram})(Program)
