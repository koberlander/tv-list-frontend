import React from 'react'

const Menu = () => {
  return(
    <div className='navbar-links'>
      <div className="ui borderless menu">
        <a className="item"><i aria-hidden="true" className="gamepad icon"></i>
          [HOME]
        </a>
        <a className="item"><i aria-hidden="true" className="gamepad icon"></i>
          [ABOUT]
        </a>
        <a className="item"><i aria-hidden="true" className="gamepad icon"></i>
          [WATCHLIST]
        </a>
      </div>
    </div>
  )
}

export default Menu

// <div className='navbar-links'>
// <a className='nav-a-1'>[ HOME ] </a>
// <a className='nav-a-2'> [ ABOUT ] </a>
// <a className='nav-a-3'> [ WATCHLIST ] </a>
// </div>
