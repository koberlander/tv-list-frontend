import React from 'react'
import {Comment} from 'semantic-ui-react'
import CommentCard from './CommentCard'

const Comments = (props) => {
  // console.log(props.comments && props.comments.map(comment => console.log(comment))
  return(
    <Comment.Group>


      {props.comments && props.comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}


    </Comment.Group>
  )
}

export default Comments
