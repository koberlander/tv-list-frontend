import React from 'react'
import {connect} from 'react-redux'
import {deleteProgram} from '../../actions/deleteProgram'
import {Grid, Card, Image, Button} from 'semantic-ui-react'

class Program extends React.Component {

  handleClick = (id) => {
    // debugger
    this.props.deleteProgram(id)

  }

/* To access a specific program/:id, 'routerProps' provides 'match.params.id'. So we can use our array of programs to access that specific id as shown below. */

  render(){
    let program = this.props.programs[this.props.match.params.id - 1]

    //using ternary in return because I need proggrams array to be populated before rendering any of these cards.
    return(
      {program ? (<Grid.Column>
          <Card onClick={(_) => this.handleClick(this.props.programs(this.props.match.params.id - 1))}>
            <Image src={program.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{program.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{program.network}</span>
              </Card.Meta>
              <Card.Description>
                Notes
              </Card.Description>
            </Card.Content>
            <Button.Group attached='bottom' >
              <Button basic icon='pencil alternate' />
              <Button basic icon='trash' />
              <Button basic icon='heart' />
            </Button.Group>
          </Card>
        </Grid.Column>)
      :
      null}
    )
  }
}

export default connect(null, {deleteProgram})(Program)

// <div className='ui column' >
//   <div className='ui card' onClick={(_) => this.handleClick(id)}>
//   <div className="content">
//   <a className="ui right corner label" >
//   <i aria-hidden="true" className="trash alternate link icon"></i>
//   </a>
//   <img
//   className="ui rounded image"
//   src={image}
//   alt='o nooo'
//   />
//   <div className="header">
//   <a href={url}>{name}</a>
//   </div>
//   <div className="meta">{network}</div>
//   </div>
//   <div className="ui bottom attached button">
//   <i className="add icon"></i>
//   Watchlist
//   </div>
//   </div>
// </div>
