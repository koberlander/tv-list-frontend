import React from 'react'

const Program = (props) => {
  let {program: {url, name, network, image}} = props

  return(
        <div className='ui column'>
          <div className='ui card'>
            <div className="content">
              <img
              className="ui rounded image"
                src={image}
                alt='o nooo'
              />
              <div className="header">{name}</div>
              <div className="meta">{network}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <button className="ui green basic button">Watchlist</button>
                <button src={url} className="ui red basic button">More Details</button>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Program
