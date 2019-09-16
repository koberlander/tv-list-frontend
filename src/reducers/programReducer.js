
export default function programReducer(state = {programs: []}, action){
//this takes the action object we have dispatched and updates the state in some way
debugger

  switch (action.type) {

    case 'FETCH_PROGRAMS':
      return {programs: action.payload}

    case 'ADD_PROGRAM':
    /*
       Since both programs and comments reducers are in the same file,
       Must return a copy of whatever state already is or programs/comments will overwrite one another.

    */

      return {...state, programs: [...state.programs, action.payload]}

    case 'DELETE_PROGRAM':

      const programs = state.programs.filter(program => program.id !== action.id)
      return {...state, programs}

    case 'TOGGLE_WATCHLIST':
    //NEED TO REFACTOR WITH SPREAD OPERATOR
      /*
          Make a deep copy of the current state by using JSON.stringify to turn my array of programs into a string.
          After creating stringifiedPrograms, use JSON.parse to turn it back into a brand new array of objects.
          Then, take the copyOfPrograms and find the specific program to update (here I find it by id).
          After isolating that program, update the value of watchlist so that each time the button is clicked, it will change the watchlist value.
          Then, return a copy of state, with the program key set to the copyOfPrograms array of objects.
          Updating my programToBeToggled watchlist value still updates it in the copyOfPrograms array.
      */

      let stringifiedPrograms = JSON.stringify(state)
      // console.log('stringifiedPrograms: ', stringifiedPrograms)

      let copyOfPrograms = JSON.parse(stringifiedPrograms)
      //JSON.parse() returns an object
      // console.log('copyOfPrograms.programs: ', copyOfPrograms.programs)

      //this updated code using .findIndex allowed me to manually change the watchlist boolean value fixed the issue I had in Program.js which only let me update the item 1x vs each time the button was clicked.
      let programIndex = copyOfPrograms.programs.findIndex(program => program.id === action.id)

      copyOfPrograms.programs[programIndex].watchlist = !copyOfPrograms.programs[programIndex].watchlist

      // console.log('copyOfPrograms after toggle switcheroo: ', copyOfPrograms)

      //commented out the code below because I decided to use findIndex. In the code below, I was finding an object which I toggled the watchlist value of, but it did noupdate that value each time the toggle was clicked, just the one time.
      // let programToBeToggled = copyOfPrograms.find(program => program.id === action.id)
      // // // debugger
      // programToBeToggled.watchlist = !action.watchlist

      return copyOfPrograms

    case 'ADD_COMMENT':
    //iterate through my state to find the id that matches the updated program. When found, return that updated program. Otherwise, do nothing but display nonmatching programs.
      let programsWithNewComment = state.programs.map(program => {
        if (program.id === action.payload.id) {
          return action.payload
          }
          else {
            return program
          }
        })

      return {...state, programs: programsWithNewComment }

    case 'DELETE_COMMENT':
      let programsWithoutComment = state.programs.filter(program => program.comments.id !== action.payload.comments.id)
      return {...state, programs: programsWithoutComment }

    default:
    return state

  }

}
