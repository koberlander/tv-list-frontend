import React from 'react'
import Program from './Program'
import {Grid} from 'semantic-ui-react'

// Instead of passing all props in an arrow function below, I could just pass an object that contains my programs array. Here I chose to just use props because I'll be manipulating the data a lot.
const Programs = (props) => {
// debugger

//refactor with semantic grid element?
  return(
      <div>
        <div className='add button div'>
          <button className='ui right aligned button'>Add New</button>
        </div>

        <Grid columns='six' divided='vertically'>
          <Grid.Row>
              {props.programs.map((program, id) => <Program
                key={id}
                program={program}/>)}
          </Grid.Row>
        </Grid>

      </div>
  )
}

export default Programs
//
// <div className='ui six column grid'>
//       {props.programs.map((program, id) => <Program
//         key={id}
//         program={program}/>)}
//
// </div>
