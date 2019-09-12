import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


//change className here and in CSS to reflect that this is a header with a menu attached, not a NavBar

const NavBar = () => {
    return(
            <Menu text stackable>
              <div className='img div' >

                 <img className='header gif' src='https://i.imgur.com/P6SbloG.gif' alt='head gif'/>

             </div>
             <Menu.Item
               as={Link}
               to='/'>
               <h1 className='tv list'>TV List</h1>
             </Menu.Item>

             <Menu.Menu position='right'>
                <Menu.Item
                  className='item 2'
                  as={Link}
                  to='/'>
                    Home
                </Menu.Item>
               <Menu.Item
                className='item 3'
                as={Link}
                to='/programs/new'>
                 Add New Show
               </Menu.Item>

               <Menu.Item
                className='item 4'
                as={Link}
                to='/watchlist'>
                 Watchlist
               </Menu.Item>
              </Menu.Menu>
            </Menu>
      )
}

export default NavBar
