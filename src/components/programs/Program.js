import React from 'react'
import {connect} from 'react-redux'
import {deleteProgram} from '../../actions/deleteProgram'

class Program extends React.Component {

  //use event to access item id, but research syntax in React labs
  handleClick = (id) => {
    // debugger
    this.props.deleteProgram(id)

  }
//figure out how to fix linter errors with <a> tags
  render(){
    let {program: {id, url, name, network, image}} = this.props
    // debugger
    // console.log('this.props :', this.props)

    return(
          <div className='ui column' >
            <div className='ui card' onClick={(_) => this.handleClick(id)}>
              <div className="content">
                <a className="ui right corner label" >
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
