import React from 'react'
import Program from './Program'

// Instead of passing all props in an arrow function below, I could just pass an object that contains my programs array. Here I chose to just use props because I'll be manipulating the data a lot.
const Programs = (props) => {
// debugger


  return(
      <div>
        <div className='add button div'>
          <button className='ui right aligned button'>Add New</button>
        </div>

        <div className='ui six column grid'>
            <div className='row'>
              {props.programs.map((program, index) => <Program
                key={index}
                url={program.url}
                name={program.name}
                network={program.network}
                image={program.image}
                watchlist={program.watchlist}
                program={program}/>)}
            </div>
        </div>

      </div>
  )
}

export default Programs
