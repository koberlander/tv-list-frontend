import React, {Fragment} from 'react'
import CommentCard from './CommentCard'

import {Comment} from 'semantic-ui-react'

const Comments = (props) => {
  // console.log(props.comments && props.comments.map(comment => console.log(comment))
  return(
    <Fragment>
    <Comment.Group>


      {props.comments && props.comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}


    </Comment.Group>

    </Fragment>
  )
}

export default Comments
