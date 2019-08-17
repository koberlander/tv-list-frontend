import React from 'react'
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'

class TransactionsContainer extends React.Component {
  render(){
    return(
      <div>
        This CommentsContainer holds the CommentInput and Comments component.
        <CommentInput />
        <Comments />
      </div>
    )
  }
}

export default TransactionsContainer
