import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Grid, Card, Image, Button, Popup} from 'semantic-ui-react'
import {deleteProgram} from '../../actions/programs/deleteProgram'
import {toggleWatchlist} from '../../actions/programs/toggleWatchlist'
import CommentsContainer from '../../containers/CommentsContainer'

class Program extends React.Component {

  renderCards = () => {
    //write a func with cards ternaries here
    // let program = this.props.program ? this.props.program : this.props.programs[this.props.match.params.id - 1]
    // let programId = this.props.program ? this.props.program.id : null
    // let watchlistValue = this.props.program ? this.props.program.watchlist : null

    //call func in render below
    // {this.renderCards()}
  }

  handleDelete = (programId) => {

    this.props.deleteProgram(programId)
  }


  handleWatchlist = (programId, watchlistValue) => {

    this.props.toggleWatchlist(programId, watchlistValue)

  }


    render(){
      // console.log(this.props)

      // debugger

      let program = this.props.program ? this.props.program : this.props.programs.find(program => parseInt(program.id) === parseInt(this.props.match.params.id))

      let programId = program ? program.id : ''

      let watchlistValue = program ? program.watchlist : null

      /* 1) Link caused nested 'a' tag error, so used 'as' on Card and Card.Description.
         2) Implemented a ternary for CommentsContainer that checked routerProps (this.props.match specifically) since the it was rendering comments on the '/programs' and '/' routes */

      return(
        <Fragment>
          <Grid.Column>
            <Card as='div'>
              <Image src={program ? program.image : null} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{program ? program.name: null}</Card.Header>
                <Card.Meta>
                  <span>{program ? program.network : null}</span>
                </Card.Meta>
                <Card.Description as='a' href={`/programs/${programId}`}>

                    More...

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

          {this.props.match.url !== '/programs' && this.props.match.url !== '/'? <CommentsContainer program={program} /> : null}

        </Fragment>
      )
    }
}

export default connect(null, {deleteProgram, toggleWatchlist})(Program)
