import React from 'react'
import Program from './Program'

import {Grid, Button, Popup} from 'semantic-ui-react'

import {Link} from 'react-router-dom'


class Programs extends React.Component {

  titleSort = () => {
    debugger

    // make sure all program names are in title case
    let titleCasePrograms = this.props.programs.map(program => program.name.split(' ')

                .map(w => {
				        if(w.substring.length > 1){
                  return w[0].toUpperCase() + w.substring(1).toLowerCase().join(' ')

                  } else{
                    return w[0].toUpperCase() + w.substring(1).toUpperCase()
                    }
                  })
                )


            // // perform sort on titleCasePrograms
            // let sortedPrograms = titleCasePrograms.sort(function(a, b) {
            //   let nameA = a.name
            //   // console.log('nameA: ', nameA);
            //
            //   let nameB = b.name
            //   // console.log('nameB: ', nameB);
            //
            //   if (nameA < nameB) {
            //     return -1;
            //   }
            //   if (nameA > nameB) {
            //     return 1;
            //   }
            //
            //   // names must be equal
            //     return 0;
            // })

            console.log('titleCasePrograms: ', titleCasePrograms);
}

  // needed to pass 'match' down to the Program so that I could use it to check the urls so comments only render on the details page
    render(){
      // debugger
      return(
          <div>
            <div className='add btn div'>
            <Button.Group float='right'>
              <Popup
                trigger={<Button icon='plus' as={Link} to='/programs/new' />}
                content="Add more shows."
                size='tiny'
                />
                <Popup
                trigger={<Button icon='filter' as={Link} to='/watchlist' />}
                content="Watchlist only."
                size='tiny'
                />
            </Button.Group>
            <button onClick={() => this.titleSort(this.props.programs)}>Sort By Title</button>
            </div>


            <Grid columns='six' divided='vertically'>
                <Grid.Row >
                  {this.props.programs && this.props.programs.map((program) => <Program key={program.name} program={program} match={this.props.match}/>)}
                </Grid.Row>
            </Grid>
        </div>
      )
    }
}

export default Programs
