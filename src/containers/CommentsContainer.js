import React from 'react'
import Comments from '../components/comments/Comments'

class CommentsContainer extends React.Component {
  render(){
    return(
      <div>
        <Comments comments={this.props.program && this.props.program.comments}/>
      </div>
    )
  }
}

export default CommentsContainer
