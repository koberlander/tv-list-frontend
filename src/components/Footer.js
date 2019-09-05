import React from 'react'
import {Segment} from 'semantic-ui-react'

const Footer = () => {
  return(
      <Segment as='div' className='footer' padded='very' textAlign='center' inverted>
        Built by Kristin<br></br><br></br>
        Powered by <a href='https://www.tvmaze.com/'>TVMAZE.com</a>
      </Segment>
    )
}
export default Footer
