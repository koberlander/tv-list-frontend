import React from 'react'
import {Segment} from 'semantic-ui-react'

const Footer = () => {
  return(
      <Segment as='div' className='footer' textAlign='center' inverted vertical>
        Built by Kristin<br></br>
        Powered by <a href='https://www.tvmaze.com/'>TVMAZE.com</a><br></br>
        Last updated: September 2019
      </Segment>
    )
}
export default Footer
