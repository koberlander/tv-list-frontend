import React, {Fragment} from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'

class CommentsContainer extends React.Component {
  render(){
    // console.log('this.props.program: ', this.props.program);
    return(
      <Fragment>
        <Comments comments={this.props.program && this.props.program.comments} isCommentButtonClicked={this.props.isCommentButtonClicked}/>
        <CommentInput program={this.props.program} isCommentButtonClicked={this.props.isCommentButtonClicked}/>
      </Fragment>
    )
  }
}

export default CommentsContainer
