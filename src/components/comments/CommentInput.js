import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../../actions/comments/addComment'

import {Form, Button} from 'semantic-ui-react'


class CommentInput extends React.Component {

  state = {
    author: '',
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addComment(this.state, this.props.program.id)

    this.setState({
      author: '',
      text: ''
    })
  }

    render(){
      return(
        <Form onSubmit={this.handleSubmit}>
          <h3>Add a Comment</h3>
          <Form.Input
            type='text'
            label='Name'
            width={6}
            required
            placeholder='Required'
            name='author'
            value={this.state.author}
            onChange={this.handleChange}
            />

          <Form.Input
            type='text'
            label='Comment'
            width={6}
            required
            placeholder='Required'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
            />

          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary />
        </Form>
      )
    }
  }




export default connect(null, {addComment})(CommentInput)


// <Dropdown
//   placeholder='Choose an Avatar'
//   clearable
//   selection
//   options={Emojis}
//   width={6}
// />
