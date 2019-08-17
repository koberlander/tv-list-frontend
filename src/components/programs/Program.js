import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card, Image, Button, Popup} from 'semantic-ui-react'
import {deleteProgram} from '../../actions/deleteProgram'
// import CommentsContainer from '../../containers/CommentsContainer'

class Program extends React.Component {

  handleDelete = (programId) => {
    this.props.deleteProgram(programId)
  }

  handleWatchlist = (programId) => {
    this.props.handleHeart(programId)
  }


    render(){
      /* To access a specific program/:id, 'routerProps' provides 'match.params.id'. Can use it here to access the id needed by .mapping over my rograms array. */
      // REMEMBER: there are mismatches in program.id and match.params.id because some items have been deleted from the db
      let program = this.props.program ? this.props.program : this.props.programs[this.props.match.params.id - 1]
      let programId = this.props.program.id


      return(
          <Grid.Column>
            <Card >
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
                    trigger={<Button onClick={(_) => this.handleDelete(programId)} icon='trash' />}
                    content="Delete this show."
                    size='tiny'
                  />
                  <Popup
                    trigger={<Button onClick={(_) => this.handleHeart(programId)} icon='heart' />}
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

      )
    }
}

export default connect(null, {deleteProgram})(Program)
