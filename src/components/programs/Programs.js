import React from 'react'
import Program from './Program'
import {Card} from 'semantic-ui-react'

// Instead of passing all props in an arrow function below, I could just pass an object that contains my programs array. Here I chose to just use props because I'll be manipulating the data a lot.
const Programs = (props) => {
// debugger

//refactor with semantic grid element?
  return(
      <div>
        <div className='add button div'>
          <button className='ui right aligned button'>Add New</button>
        </div>

        <div className='ui six column grid'>
            <div className='row'>
              {props.programs.map((program, id) => <Program
                key={id}
                program={program}/>)}
            </div>
        </div>

      </div>
  )
}

export default Programs
