import React, {Fragment} from 'react'
import {Comment, Header} from 'semantic-ui-react'
import CommentInput from './CommentInput'

const CommentCard = (props) => {
let magic = () => {
  Date.now()
}
function prettyDate2(magic) {
    let dateWithoutSecond = new Date();
    dateWithoutSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
}


    return(
      <Fragment>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src='https://emojis.slackmojis.com/emojis/images/1450319455/129/hypnotoad.gif?1450319455' />
          <Comment.Content>
            <Comment.Author as='a'>Alex</Comment.Author>
            <Comment.Metadata>
              <div>Today at {prettyDate2(magic)}</div>
            </Comment.Metadata>
            <Comment.Text>This show is great!</Comment.Text>
            <Comment.Actions>

            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <CommentInput />
      </Fragment>
    )
}

export default CommentCard
