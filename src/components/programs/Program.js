import React from 'react'



const Program = (props) => {
  let {program: {url, name, network, image}} = props
  // debugger
  return(
        <div className='ui column'>
          <div className='ui card'>
            <div className="content">
              <a className="ui right corner label">
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

export default Program
