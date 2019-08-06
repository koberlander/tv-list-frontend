import React from 'react'

class ProgramInput extends React.Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    //dispatch our add_program action
    this.props.addProgram({}) //NEED TO COMPLETE

    //changed to [event.target.name]: '' because there is more than one filed we're tracking
    this.setState({
      [event.target.name]: ''
    })
  }

  render(){
    return(
      <form handleSubmit={event => this.handleSubmit(event)}>
          <ul className='form-style-1'>
            <li>
              <label>Main TV Show Page Link</label>
              <input
                type='email'
                name='field1'
                className='field-long'
                onChange={this.handleChange}/>
            </li>
            <li>
              <label>Name</label>
              <input
              type='name'
              name='field2'
              className='field-long'
              onChange={this.handleChange} />
            </li>
          <li>
            <label>Network</label>
            <input
            type='network'
            name='field3'
            className='field-long'
            onChange={this.handleChange} />
          </li>
          <li>
            <label>Image Url</label>
            <input
            type='email'
            name='field4'
            className='field-long'
            onChange={this.handleChange} />
          </li>
          <li>
            <input type='submit' value='Submit' />
          </li>
        </ul>
      </form>
    )
  }
}

export default ProgramInput
