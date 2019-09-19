import React, {Fragment} from 'react'
import CommentCard from './CommentCard'

import {Comment, Header, Popup, Button} from 'semantic-ui-react'

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

        <div className='add comment div'>
          <Popup
            trigger={<Button icon='comment outline' />}
            content="Add a comment."
            size='tiny'
            />
        </div>

    </Fragment>
  )
}

export default Comments
