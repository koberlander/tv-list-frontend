import React from 'react'
import {connect} from 'react-redux'
import {deleteProgram} from '../../actions/deleteProgram'
import {Card, Image, Icon} from 'semantic-ui-react'

class Program extends React.Component {

  handleClick = (id) => {
    // debugger
    this.props.deleteProgram(id)

  }
//figure out how to fix linter errors with <a> tags
  render(){
    let {program: {id, url, name, network, image}} = this.props
    // debugger
    // console.log('this.props :', this.props)


    //refactor with semantic Card.Group
    return(
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{network}</span>
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
  </Card>
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
