import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card, Image, Button, Popup} from 'semantic-ui-react'
import {deleteProgram} from '../../actions/deleteProgram'
import {toggleWatchlist} from '../../actions/toggleWatchlist'
// import CommentsContainer from '../../containers/CommentsContainer'

class Program extends React.Component {

  handleDelete = (programId) => {

    this.props.deleteProgram(programId)
  }

  //where do I update the toggle on button from active/not active? active is a boolean property on the btn. When set to true, the btn color is green. When set to false, it is yellow.

  handleWatchlist = (programId, watchlistValue) => {
    
    this.props.toggleWatchlist(programId, watchlistValue)

  }


    render(){
      // REMEMBER: there are mismatches in program.id and match.params.id because some items have been deleted from the db
      // QUESTION: Is there a more succinct way to determine program and programId than with the ternaries I have here (inside a componentDidMount) or are they better inside my render method since my card needs access to these variables?

      let program = this.props.program ? this.props.program : this.props.programs[this.props.match.params.id - 1]

      let programId = this.props.program ? this.props.program.id : null

      let watchlistValue = this.props.program ? this.props.program.watchlist : null


      return(
          <Grid.Column>
            <Card onClick={(_) => {}}>
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
                    trigger={<Button onClick={(_) => {this.handleDelete(programId)}} icon='trash' />}
                    content="Delete this show."
                    size='tiny'
                  />
                  <Popup
                    trigger={
                      <Button
                        toggle active={watchlistValue}
                        onClick={(_) => this.handleWatchlist(programId, watchlistValue)} icon='heart'
                      />}
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

  // make sure watchlist status will show in details page
 // const mapStateToProps = (state) => {
 //    return { watchlist: state.watchlist }
 // }

export default connect(null, {deleteProgram, toggleWatchlist})(Program)
