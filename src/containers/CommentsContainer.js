import React, {Fragment} from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'

class CommentsContainer extends React.Component {
  render(){
    return(
      <Fragment>
        <Comments comments={this.props.program && this.props.program.comments}/>
        <CommentInput program={this.props.program}/>
      </Fragment>
    )
  }
}

export default CommentsContainer
