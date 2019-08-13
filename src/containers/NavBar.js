// import into App.js
import React from 'react'
import {Header, Image} from 'semantic-ui-react'
import Menu from '../components/Menu'


//change className here and in CSS to reflect that this is a header with a menu attached, not a NavBar

const NavBar = () => {
    return(
      <Header as='h1'>
        <Image src='https://i.imgur.com/P6SbloG.gif' /> TV List
        <Menu />
      </Header>
   )
}

export default NavBar

// <div className='navbar'>
//
// <div className='navbar-img'>
// <img src='https://i.imgur.com/P6SbloG.gif' alt='kristin-head'/>
// </div>
//
// <div className='navbar-title'>
// TV List Keeper
// </div>
// <Menu />
//
// </div>
