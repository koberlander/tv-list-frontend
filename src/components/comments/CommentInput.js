import React from 'react'
import {Form, Button} from 'semantic-ui-react'

const CommentInput = (props) => {
//add hook to handle state
    return(
      <Form >
        <Form.Input />
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    )
  }


  // <Form.Field label='Choose an avatar.'>
  // <Radio
  // label='Avatar 1'
  // name='radioGroup'
  // value='this'
  // checked={{/* this.state.value === 'this'*/}}
  // onChange={{/*this.handleChange*/}}
  // />
  // </Form.Field>
  // <Form.Field>
  // <Radio
  // label='Avatar 2'
  // name='radioGroup'
  // value='that'
  // checked={{/* this.state.value === 'that'*/}}
  // onChange={{/*this.handleChange*/}}
  // />
  // </Form.Field>
  // <Form.Field>
  // <Radio
  // label='Avatar 3'
  // name='radioGroup'
  // value='the other thing'
  // checked={{/* this.state.value === 'that'*/}}
  // onChange={{/*this.handleChange*/}}
  // />
  // </Form.Field>
export default CommentInput
