import React, {Fragment} from 'react'
import CommentCard from './CommentCard'
import {Link} from 'react-router-dom'

import {Popup, Button, Comment} from 'semantic-ui-react'

const Comments = (props) => {
  // console.log('props :', props);
  return(
    <Fragment>
      <div className='add comment div'>
        <Popup
          trigger={<Button icon='comment outline' as={Link} to='/programs/:id/comments/new' />}
          content="Add a comment."
          size='tiny'
          />
      </div>

        <Comment.Group>
          {props.comments && props.comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
        </Comment.Group>

    </Fragment>
  )
}

export default Comments
