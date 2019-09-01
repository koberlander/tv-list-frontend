import React from 'react'
import {connect} from 'react-redux'
import {Form, Button, Radio} from 'semantic-ui-react'

const CommentInput = (props) => {
//add hook to handle state?
    return(
      <br>/<br>
      <br></br>
      <Form >
        <Form.Field>
          Filler title text:
        </Form.Field>

        <Form.Field>
          <Radio
          label='Avatar 1'
          name='radioGroup'
          value='this'
          />
        </Form.Field>
        <Form.Field>
          <Radio
          label='Avatar 2'
          name='radioGroup'
          value='that'
          />
        </Form.Field>
        <Form.Field>
          <Radio
          label='Avatar 3'
          name='radioGroup'
          value='the other thing'
          />
        </Form.Field>

        <Form.Input label='Author Name'/>

        <Form.TextArea label='Comment'/>

        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    )
  }

  // Choose an avatar: {/*<b>{this.state.value}</b>*/}

  //First avatar
  // checked={{/* this.state.value === 'this'*/}}
  // onChange={{/*this.handleChange*/}}

  // 2nd avatar
  // checked={{/* this.state.value === 'that'*/}}
  // onChange={{/*this.handleChange*/}}

  // checked={{/* this.state.value === 'that'*/}}
  // onChange={{/*this.handleChange*/}}
  // />
  // </Form.Field>

export default connect(null)(CommentInput)
