import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Grid, Card, Image, Button, Popup} from 'semantic-ui-react'
import {deleteProgram} from '../../actions/deleteProgram'
import {toggleWatchlist} from '../../actions/toggleWatchlist'
import {Link} from 'react-router-dom'
import CommentsContainer from '../../containers/CommentsContainer'

class Program extends React.Component {

  handleDelete = (programId) => {

    this.props.deleteProgram(programId)
  }


  handleWatchlist = (programId, watchlistValue) => {

    this.props.toggleWatchlist(programId, watchlistValue)

  }


    render(){
      //refactor to something more sucinct
      let program = this.props.program ? this.props.program : this.props.programs[this.props.match.params.id - 1]

      let programId = this.props.program ? this.props.program.id : null

      let watchlistValue = this.props.program ? this.props.program.watchlist : null
      // debugger


      return(
        <Fragment>
          <Grid.Column>
            <Card onClick={(_) => {}}>
              <Image src={program ? program.image : null} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{program ? program.name: null}</Card.Header>
                <Card.Meta>
                  <span className='date'>{program ? program.network : null}</span>
                </Card.Meta>
                <Card.Description>
                  <Link to={`/programs/${programId - 1}`}>
                    More...
                  </Link>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Popup
                    trigger={<Button onClick={(_) => {this.handleDelete(programId)}} icon='trash' />}
                    content="Delete this show."
                    size='tiny'
                  />
                  <Popup
                    trigger={
                      <Button
                        toggle
                        active={watchlistValue}
                        onClick={(_) => this.handleWatchlist(programId, watchlistValue)} icon='heart'
                      />}
                    content="Add to Watchlist."
                    size='tiny'
                  />
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>

          <CommentsContainer />

        </Fragment>
      )
    }
}

export default connect(null, {deleteProgram, toggleWatchlist})(Program)

//
// <Popup
// trigger={<Button icon='comment alternate outline' link='true' />}
// content="Add a comment."
// size='tiny'
// />
// </Link>
