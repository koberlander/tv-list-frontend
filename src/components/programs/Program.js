import React from 'react'
import {connect} from 'react-redux'
import {deleteProgram} from '../../actions/deleteProgram'
import {Grid, Card, Image, Button} from 'semantic-ui-react'

const Program = (props) => {

console.log(props)

  let handleClick = (id) => {
    // debugger
    this.props.deleteProgram(id)

  }

// May do this instead of ternary in the card fields
//call props.showCard() in the return below instead of a ternary
  // let showCard = () => {
  //   if (program) {
  //     return the card below
  //   } else {
  //     null (is the else even needed?)
  //   }
  // }

/* To access a specific program/:id, 'routerProps' provides 'match.params.id'. So we can use our array of programs to access that specific id as shown below. */

  let program = props.programs[props.match.params.id - 1]
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
            <Button.Group attached='bottom' >
              <Button basic icon='pencil alternate' />
              <Button basic icon='trash' />
              <Button basic icon='heart' />
            </Button.Group>
          </Card>
        </Grid.Column>
    )
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
