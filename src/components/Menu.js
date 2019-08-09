import React from 'react'

const Menu = () => {
  return(
    <div className='navbar-links'>

        <a className='nav-a-1'><i aria-hidden="true" className="home icon"></i>
          Home
        </a>
        <a className='nav-a-2'><i aria-hidden="true" className="info circle icon"></i>
          About
        </a>
        <a className='nav-a-3'><i aria-hidden="true" className="video play icon"></i>
          Watchlist
        </a>

    </div>
  )
}

export default Menu

// <div className='navbar-links'>
// <a className='nav-a-1'>[ HOME ] </a>
// <a className='nav-a-2'> [ ABOUT ] </a>
// <a className='nav-a-3'> [ WATCHLIST ] </a>
// </div>
