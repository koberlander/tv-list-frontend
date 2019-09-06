import React from 'react'
import {connect} from 'react-redux'
import {Form, Button, Dropdown} from 'semantic-ui-react'

class CommentInput extends React.Component {

  state = {
    author: '',
    text: ''
  }

  handleChange = (event) => {
    // debugger
    this.setState({

    })


  }

    render(){
      return(
        <Form>
          <Dropdown
            placeholder='Choose an Avatar'
            selection
            options=''
          />
          <Form.Input
            type='text'
            label='Name'
            name='author'
            value='this.state.author'/>

          <Form.TextArea
            type='text'
            label='Comment'
            name='text'
            value='this.state.text'/>

          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary />
        </Form>
      )
    }
  }




export default connect(null)(CommentInput)


// <Form.Field>
//   <Radio
//   label='Avatar 1'
//   name='radioGroup'
//   value={this.state.avatarChoice.avatar1}
//   checked={this.state.value === 'avatar1'}
//   onChange={this.handleChange}
//   />
// </Form.Field>
// <Form.Field>
//   <Radio
//   label='Avatar 2'
//   name='radioGroup'
//   value={this.state.avatarChoice.avatar2}
//   checked={this.state.value === 'avatar2'}
//   />
// </Form.Field>
// <Form.Field>
//   <Radio
//   label='Avatar 3'
//   name='radioGroup'
//   value={this.state.avatarChoice.avatar3}
//   checked={this.state.value === 'avatar3'}/>
// </Form.Field>
