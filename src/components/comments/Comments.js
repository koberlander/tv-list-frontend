import React, {Fragment} from 'react'
import CommentCard from './CommentCard'
import {Comment, Header, Popup, Button} from 'semantic-ui-react'

class Comments extends React.Component {

  render(){
    // console.log('isCommentButtonClicked: ', this.props.isCommentButtonClicked)
    return(
      <Fragment>

        <Header as='h3' dividing>
          Comments
        </Header>

          <Comment.Group>
            {this.props.comments && this.props.comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
          </Comment.Group>

          <div className='add comment div'>
            <Popup
              trigger={<Button icon='comment outline' onClick={(_) => this.props.buttonFunction(this.props.isCommentButtonClicked)} />}
              content="Add a comment."
              size='tiny'
              />
          </div>

      </Fragment>
    )
  }
}

export default Comments
