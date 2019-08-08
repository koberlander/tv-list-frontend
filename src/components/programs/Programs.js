import React from 'react'
import Program from './Program'

// Instead of passing all props in an arrow function below, I could just pass an object that contains my programs array. Here I chose to just use props because I'll be manipulating the data a lot.
const Programs = (props) => {

  return(
    <div className='ui six column grid'>
        <div className='row'>
          {props.programs.map((program) => <Program
            key={program.id}
            url={program.url}
            name={program.name}
            network={program.network}
            image={program.image}
            watchlist={program.watchlist}
            program={program}/>)}
        </div>
    </div>
  )
}

export default Programs

// <div>
// <button className='ui right floated button'>Add</button>
// </div>,
