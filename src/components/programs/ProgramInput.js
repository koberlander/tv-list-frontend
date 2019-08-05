import React from 'react'

class ProgramInput extends React.Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
}

  render(){
    return(
      <form>
          <ul className="form-style-1">
            <li className='input-li-1'>
              <label>Main TV Show Page Link</label>
              <input type="email" name="field3" className="field-long" />
            </li>
            <li>
              <label>Name</label>
              <input type="email" name="field2" className="field-long" />
            </li>
          <li>
            <label>Network</label>
            <input type="email" name="field3" className="field-long" />
          </li>
          <li>
            <label>Image Url</label>
            <input type="email" name="field4" className="field-long" />
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    )
  }
}

export default ProgramInput
