import React from 'react'
//import action? How to perform here without a class func?


const Program = (props) => {
  let {program: {url, name, network, image}} = props
  // debugger
  return(
        <div className='ui column'>
          <div className='ui card'>
            <div className="content">
              <a class="ui right corner label" onClick={props.deleteProgram}>
                <i aria-hidden="true" class="trash alternate link icon"></i>
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

export default Program
