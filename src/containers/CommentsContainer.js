import React, {Fragment} from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'

class CommentsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      isCommentButtonClicked: false
    }
  }

  handleCommentButton = (boolean) => {
    this.setState({
      isCommentButtonClicked: !boolean
    })
  }

  render(){


    return(
      <Fragment>
        <Comments comments={this.props.program && this.props.program.comments} isCommentButtonClicked={this.state.isCommentButtonClicked} buttonFunction={this.handleCommentButton}/>
        <CommentInput program={this.props.program} isCommentButtonClicked={this.state.isCommentButtonClicked}/>
      </Fragment>
    )
  }
}

export default CommentsContainer
