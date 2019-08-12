import React from 'react'
import {connect} from 'react-redux'
import {deleteProgram} from '../../actions/deleteProgram'
import {Grid, Card, Image, Button} from 'semantic-ui-react'

class Program extends React.Component {

  handleClick = (id) => {
    // debugger
    this.props.deleteProgram(id)

  }

  render(){
    let {program: {id, url, name, network, image}} = this.props
    // debugger
    // console.log('this.props :', this.props)


    //refactor with semantic Card
    return(
      <Grid.Column>
        <Card onClick={(_) => this.handleClick(id)}>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className='date'>{network}</span>
            </Card.Meta>
            <Card.Description>
            </Card.Description>
          </Card.Content>
          <Button.Group>
            <Button basic icon='pencil alternate' />{' '}
            <Button basic icon='trash' />
            <Button basic icon='plus' />
          </Button.Group>
        </Card>
      </Grid.Column>
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
