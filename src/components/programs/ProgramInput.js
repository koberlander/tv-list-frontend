import React from 'react'
import {connect} from 'react-redux'
import {addProgram} from '../../actions/addProgram'


class ProgramInput extends React.Component {
  constructor(){
    super()

    this.state = {
      url: '',
      name: '',
      network: '',
      image: ''
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()

    //call our addProgram action via props. connect() allows us to do this since we passed in our action as dispatch.
    //pass in the payload (this.state, our state takes in our form input text in real time) that we receive from the form onSubmit
    this.props.addProgram(this.state)

    //changed to [event.target.name]: '' because there is more than one filed we're tracking
    this.setState({
      [event.target.name]: ''
    })
  }

  render(){
    return(
        <div className='form div'>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="six width field">
              <label className='form label'>Main Show Info Link</label>
              <input
                type='text'
                name='url'
                placeholder="https://example.com"
                value={this.state.url}
                onChange={this.handleChange}/>
            </div>
            <div className="six width field">
              <label className='form label'>Show Name</label>
              <input
                type='text'
                name='name'
                placeholder="Your show here"
                value={this.state.name}
                onChange={this.handleChange}/>
            </div>
            <div className="six width field">
              <label className='form label'>Network Name</label>
              <input
                type='text'
                name='network'
                placeholder="Netflix, Hulu, HBO, Showtime..."
                value={this.state.network}
                onChange={this.handleChange}/>
            </div>
            <div className="six width field">
              <label className='form label'>Image URL</label>
              <input
                type='text'
                name='image'
                placeholder="http://image.png"
                value={this.state.image}
                onChange={this.handleChange}/>
            </div>
            <button type="submit" className="ui button">Submit</button>
          </form>
        </div>
    )
  }
}

export default connect(null, {addProgram})(ProgramInput)
