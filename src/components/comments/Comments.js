import React, {Fragment} from 'react'
import CommentCard from './CommentCard'

import {Comment, Header} from 'semantic-ui-react'

const Comments = (props) => {
  // console.log('props :', props);
  return(
    <Fragment>

      <Header as='h3' dividing>
        Comments
      </Header>

        <Comment.Group>
          {props.comments && props.comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
        </Comment.Group>

    </Fragment>
  )
}

export default Comments

// <div className='add comment div'>
//   <Popup
//     trigger={<Button icon='comment outline' as={Link} to='/programs/:id/comments/new' />}
//     content="Add a comment."
//     size='tiny'
//     />
// </div>
