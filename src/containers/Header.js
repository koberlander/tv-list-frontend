// import into App.js
import React from 'react'
import Menu from '../components/Menu'


//change className here and in CSS to reflect that this is a header with a menu attached, not a NavBar

const Header = () => {
    return(
      <div className='navbar'>

        <div className='navbar-img'>
          <img src='https://i.imgur.com/P6SbloG.gif' alt='kristin-head'/>
        </div>

        <div className='navbar-title'>
          TV List Keeper
        </div>
        <Menu />

      </div>
   )
}

export default Header
