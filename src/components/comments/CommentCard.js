import React, {Fragment} from 'react'
import {Comment, Header} from 'semantic-ui-react'

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
              <div>Today at 12:00 PM</div>
            </Comment.Metadata>
            <Comment.Text>This show is great!</Comment.Text>
            <Comment.Actions>

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
