import React from 'react'

class ProgramInput extends React.Component {

  state = {
      url: '',
      name: '',
      network: '',
      image: '',
      watchlist: false
    }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheckbox = event => {
    if (event.target.value === !false) {

        //check labs, then dad jokes for this logic

    }
  }

  handleSubmit = event => {
    event.preventDefault()

    //dispatch our add_program action


    //changed to [event.target.name]: '' because there is more than one filed we're tracking
    this.setState({
      [event.target.name]: ''
    })
  }

  render(){
    return(
        <div className='form div'>
          <form className="ui form">
            <div className="six width field">
              <label>Main Show Info Link</label>
              <input
                type='text'
                name='url'
                placeholder="https://example.com"
                value={this.state.url}
                onChange={this.handleChange}/>
            </div>
            <div className="six width field">
              <label>Show Name</label>
              <input
                type='text'
                name='name'
                placeholder="Your show here"
                value={this.state.name}
                onChange={this.handleChange}/>
            </div>
            <div className="six width field">
              <label>Network Name</label>
              <input
                type='text'
                name='network'
                placeholder="Netflix, Hulu, HBO, Showtime..."
                value={this.state.network}
                onChange={this.handleChange}/>
            </div>
            <div className="six width field">
              <label>Image URL</label>
              <input
                type='text'
                name='image'
                placeholder="http://image.png"
                value={this.state.image}
                onChange={this.handleChange}/>
            </div>
            <div className="six width field">
              <div className="ui checkbox">
                  <input
                  type="checkbox"
                  className="hidden"
                  readOnly=""
                  tabIndex="0"
                  value={this.state.watchlist}
                  onChange={this.handleCheckbox}/>
                <label>Add to Watchlist</label>
              </div>
            </div>
            <button type="submit" className="ui button">Submit</button>
          </form>
        </div>
    )
  }
}

export default ProgramInput
