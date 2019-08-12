import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

const Menu = () => (

    <div className='menu-div'>
        <Button.Group basic size='small'>
           <Button>
             <Icon name='home' />
             Home
           </Button>
           <Button>
             <Icon name='plus' />
             Add New
           </Button>
           <Button>
             <Icon name='video' />
              Watchlist
           </Button>
        </Button.Group>
    </div>

)

export default Menu

// <div className='ui right floated buttons'>
//   <div className='menu-button'>
//     <button className="small basic ui icon button">
//       <i aria-hidden="true" className="home icon"></i>
//         Home
//     </button>
//   </div>
//
//
//   <div className='menu-button'>
//     <button className="small basic ui icon button">
//       <i aria-hidden="true" className="plus icon"></i>
//         Add New
//     </button>
//   </div>
//
//   <div className='menu-button'>
//     <button className="small basic ui icon button">
//       <i aria-hidden="true" className="video icon"></i>
//         Watchlist
//     </button>
//   </div>
// </div>
