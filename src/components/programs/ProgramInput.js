import React from 'react'
import {connect} from 'react-redux'
import {addProgram} from '../../actions/programs/addProgram'
import {Form} from 'semantic-ui-react'
import {Redirect} from 'react-router'

class ProgramInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      network: '',
      image: '',
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //changed to [event.target.name]: event.target.value because there is more than one field to track
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRedirect = event => {
    this.setState({
      fireRedirect: true
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    //call our addProgram action via props. connect() allows us to do this since we passed in our action as dispatch.
    //pass in the payload (this.state, our state takes in our form input text in real time) that we receive from the form onSubmit

    this.props.addProgram(this.state)

    this.setState({
      name: '',
      network: '',
      image: '',
      fireRedirect: ''
    }, () => this.handleRedirect())
  }

  render(){
    const fireRedirect = this.state.fireRedirect
    // debugger
        if (fireRedirect === true) {
          return <Redirect to='/programs' /> }

    return(
            <Form onSubmit={this.handleSubmit}>
              <h2>Create a New Show</h2>
                <Form.Input
                  fluid
                  label='Name'
                  name='name'
                  required
                  placeholder='Required'
                  value={this.state.name}
                  onChange={this.handleChange}
                  width={6} />
                <Form.Input
                  fluid
                  name='network'
                  required
                  placeholder='Required'
                  label='Network'
                  value={this.state.network}
                  onChange={this.handleChange}
                  width={6} />
                <Form.Input
                  fluid
                  name='image'
                  label='Image Link'
                  required
                  placeholder='Required'
                  value={this.state.image}
                  onChange={this.handleChange}
                  width={8} />
                <Form.Button>Submit</Form.Button>
            </Form>
    )
  }
}

export default connect(null, {addProgram})(ProgramInput)
