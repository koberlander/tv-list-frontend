import React from 'react'
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'

class TransactionsContainer extends React.Component {
  render(){
    return(
      <div>
        <CommentInput />
        <Comments comments={this.props.program && this.props.program.comments}/>
      </div>
    )
  }
}

export default TransactionsContainer
