
export default function programReducer(state = {programs: []}, action){
//this takes the action object we have dispatched and updates the state in some way
// debugger

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

      /*
          Make a deep copy of the current state by using JSON.stringify to turn my array of programs into a string.
          After creating stringifiedPrograms, we then use JSON.parse to turn it back into a brand new array of objects.
          Then, take the copyOfPrograms and find the specific program that we want to update (here we find it by id).
          After isolating that program, we update the value of watchlist so that each time the button is clicked, it will change the watchlist value.
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
      return {...state, programs: [...state.programs, action.payload]}

    default:
    return state

  }

}
