import React from 'react'
import {Menu} from 'semantic-ui-react'


//change className here and in CSS to reflect that this is a header with a menu attached, not a NavBar

const NavBar = () => {
    return(
            <Menu text stackable>
              <div className='img div' >
               <Menu.Item
                className='item 1'>
                 <img className='header gif' src='https://i.imgur.com/P6SbloG.gif' alt='head gif'/>
               </Menu.Item>
             </div>
             <Menu.Item
               name='tv list'>
               <h1 className='tv list'>TV List</h1>
             </Menu.Item>

             <Menu.Menu position='right'>
                <Menu.Item
                  className='item 2'>
                  [Home]
                </Menu.Item>
               <Menu.Item
                className='item 3'>
                 [Add New]
               </Menu.Item>

               <Menu.Item
                className='item 4'
                name='watchlist'
                href='localhost:3001/watchlist'>
                 [Watchlist]
               </Menu.Item>
              </Menu.Menu>
            </Menu>
      )
}

export default NavBar
