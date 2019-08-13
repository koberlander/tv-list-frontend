import React from 'react'
import CommentInput from '../components/comments/CommentInput'

//render in my Program.js
class TransactionsContainer extends React.Component {
  render(){
    return(
      <div>
        This CommentsContainer holds the CommentInput component.
        <CommentInput />
      </div>
    )
  }
}

export default TransactionsContainer
