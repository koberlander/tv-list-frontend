import React, {Fragment} from 'react'
import {Comment} from 'semantic-ui-react'

// import randomAvatar from './actions/comments/randomAvatar'

const CommentCard = (props) => {
// debugger

    return(
      <Fragment>

        <Comment>
          <Comment.Avatar src='https://emojis.slackmojis.com/emojis/images/1450319455/129/hypnotoad.gif?1450319455' />
          <Comment.Content>
            <Comment.Author as='a'>{props.comment.author}</Comment.Author>
            <Comment.Metadata>
              The one and only!
            </Comment.Metadata>
            <Comment.Text>{props.comment.text}</Comment.Text>
            <Comment.Actions as='div'>
              <Comment.Action as='a'>Delete</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

      </Fragment>
    )
}

export default CommentCard

// let magic = () => {
//   Date.now()
// }
// function prettyDate2(magic) {
//     let dateWithoutSecond = new Date();
//     dateWithoutSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
// }
