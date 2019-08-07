import React from 'react'

const Program = (props) => {
  let {program: {url, name, network, image}} = props
  return(
        <div>
            <img className="cardimg" src={image} alt='o noooo'/>
            <div className="program-info">
              <div className="name-font">
                {name}
              </div>
              <div className="network-name">
                {network}
              </div>
              <div className='details-link'>
                <a href={url}>Details</a>
              </div>
              <div>
                <button>Watchlist</button>
              </div>
           </div>
        </div>
  )
}

export default Program
