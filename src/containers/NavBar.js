// import into App.js
import React from 'react'

class NavBar extends React.Component {
  render(){
    return(
      <div className='navbar'>

        <div className='navbar-img'>
          <img src='https://i.imgur.com/P6SbloG.gif' alt='kristin-head'/>
        </div>

        <div className='navbar-title'>
          TV List Keeper
        </div>
        
        <div className='navbar-links'>
          <a href='google.com' className='nav-a-1'>[ HOME ] </a>
          <a href='google.com'className='nav-a-2'> [ ABOUT ] </a>
          <a href='google.com' className='nav-a-3'> [ WATCHLIST ] </a>
        </div>

      </div>
    )
  }
}

export default NavBar
