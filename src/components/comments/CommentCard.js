import React, {Fragment} from 'react'
import {Comment, Header} from 'semantic-ui-react'
import CommentInput from './CommentInput'

const CommentCard = (props) => {

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
              <div>Today at 5:42PM</div>
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
