import React from 'react'
import {connect} from 'react-redux'
import {deleteProgram} from '../../actions/deleteProgram'

class Program extends React.Component {

  //use event to access item id, but research syntax
  handleClick = () => {
    // debugger
    this.props.deleteProgram(this.props.program.id)
  }

  render(){
    let {program: {id, url, name, network, image}} = this.props
    // debugger
    return(
          <div className='ui column'>
            <div className='ui card' >
              <div className="content">
                <a className="ui right corner label" onClick={this.handleClick}>
                  <i aria-hidden="true" className="trash alternate link icon"></i>
                </a>
                <img
                className="ui rounded image"
                  src={image}
                  alt='o nooo'
                />
                <div className="header">
                  <a href={url}>{name}</a>
                </div>
                <div className="meta">{network}</div>
              </div>
              <div className="ui bottom attached button">
                <i className="add icon"></i>
                Watchlist
              </div>
          </div>
      </div>
    )
  }
}

export default connect(null, {deleteProgram})(Program)
