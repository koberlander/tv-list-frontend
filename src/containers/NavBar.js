import React from 'react'
import {Menu} from 'semantic-ui-react'


//change className here and in CSS to reflect that this is a header with a menu attached, not a NavBar

const NavBar = () => {
    return(
            <Menu stackable>
             <Menu.Item >
               <img src='https://i.imgur.com/P6SbloG.gif' alt='head gif'/>
             </Menu.Item>

             <Menu.Item
               name='tv list'>
               <h1>TV List</h1>
             </Menu.Item>

             <Menu.Menu position='right'>
               <Menu.Item
                 name='home'
                 href='localhost:3001/programs'>
                 [Home]
               </Menu.Item>

               <Menu.Item
                 name='new'
                 href='localhost:3001/new'>
                 [Add New]
               </Menu.Item>

               <Menu.Item
                name='watchlist'
                href='localhost:3001/watchlist'>
                 [Watchlist]
               </Menu.Item>
              </Menu.Menu>
            </Menu>
      )
}

export default NavBar
