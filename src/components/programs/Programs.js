import React from 'react'
import Program from './Program'
import {Card} from 'semantic-ui-react'

// Instead of passing all props in our arrow function below, I could just pass an object that contains our programs array. However, here I just use props because I'll be manipulating the data a lot.
const Programs = (props) => {

  return(
    <div className='card-css'>
          {props.programs.map(program => <Program
            key={program.id}
            url={program.url}
            name={program.name}
            network={program.network}
            image={program.image}
            watchlist={program.watchlist}
            program={program}/>)}
    </div>
  )
}

export default Programs
