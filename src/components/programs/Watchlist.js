import React from 'react'

import {Grid, Card, Image, Popup, Button} from 'semantic-ui-react'


const Watchlist = (props) => {
  if (program.watchlist === true){
    let program = this.props.program? this.props.program : this.props.programs.find(program => parseInt(program.id) === parseInt(this.props.match.params.id))

    let programId = program ? program.id : ''

    let watchlistValue = program ? program.watchlist : null

    return(
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
      )
    }
  }

export default Watchlist
