import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../../actions/comments/deleteComment'

import {Comment, Button} from 'semantic-ui-react'


const CommentCard = (props) => {
// debugger



    return(
      <Fragment>

        <Comment>
          <Comment.Avatar src='https://emojis.slackmojis.com/emojis/images/1450319455/129/hypnotoad.gif?1450319455' />
          <Comment.Content>
            <Comment.Author as='a'>{props.comment.author}</Comment.Author>
            <Comment.Metadata>

            </Comment.Metadata>
            <Comment.Text>{props.comment.text}</Comment.Text>
            <Button
              icon='trash'
              size='mini'
              basic
              onClick={() => props.deleteComment(props.comment.id, props.comment.program_id)}
              />
          </Comment.Content>
        </Comment>

      </Fragment>
    )
}

export default connect(null, {deleteComment})(CommentCard)
