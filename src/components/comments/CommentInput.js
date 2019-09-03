import React from 'react'
import {connect} from 'react-redux'
import {Form, Button, Radio} from 'semantic-ui-react'

class CommentInput extends React.Component {

  state = {
    avatarChoice: {
      avatar1: '',
      avatar2: '',
      avatar3: ''
    },
    author: '',
    text: ''
  }

  renderAvatarChoice = () => {
    // if elseif else for avatar render choices
  }

  handleChange = () => {
    debugger
    this.setState({

    })


  }

    render(){
      return(
        <Form>
          <Form.Field>
            Filler title text:
          </Form.Field>

          <Form.Field>
            <Radio
            label='Avatar 1'
            name='radioGroup'
            value={this.state.avatarChoice.avatar1}
            checked={this.state.value === 'avatar1'}
            onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
            label='Avatar 2'
            name='radioGroup'
            value={this.state.avatarChoice}
            checked={this.state.value === 'avatar2'}
            />
          </Form.Field>
          <Form.Field>
            <Radio
            label='Avatar 3'
            name='radioGroup'
            value={this.state.avatarChoice}
            checked={this.state.value === 'avatar3'}/>
          </Form.Field>

          <Form.Input
            type='text'
            label='Author Name'
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


// Choose an avatar: {/*<b>{this.state.value}</b>*/}

//First avatar
// checked={{/* this.state.value === 'avatar1'*/}}
// onChange={{/*this.handleChange*/}}

// 2nd avatar
// checked={{/* this.state.value === 'avatar2'*/}}
// onChange={{/*this.handleChange*/}}

// checked={{/* this.state.value === 'avatar3'*/}}
// onChange={{/*this.handleChange*/}}
