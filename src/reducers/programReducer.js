
export default function programReducer(state = {programs: []}, action){
//this takes the action object we have dispatched and updates the state in some way

  switch (action.type) {
    case 'FETCH_PROGRAMS':
      return {programs: action.payload}

    case 'ADD_PROGRAM':
    //updated programs to add new to beginning of array instead of the end
      return {...state, programs: [action.payload,...state.programs]}

    case 'DELETE_PROGRAM':
      const programs = state.programs.filter(program => program.id !== action.id)
      return {programs}

    case 'TOGGLE_WATCHLIST':

    console.log('inside TOGGLE_WATCHLIST case');
    console.log("use debugger to figure out what your 'payload' is here (or whatever you are passing in)");

    /* Make a deep copy of our current state by using JSON.stringify to turn our array of programs into a string. After we have created the stringifiedPrograms, we then use JSON.parse to turn it back into a brand new array of objects.
      We then take our copyOfPrograms and find the specific program that we want to update (here we find it by id). After isolating that program, we update the value of watchlist. Then we return a copy of state, with the program ke set to our copyOfPrograms array of objects. Updating my programToBeToggled watchlist value still updates it in the copyOfPrograms array. */
    let stringifiedPrograms = JSON.stringify(state.programs)
    let copyOfPrograms = JSON.parse(stringifiedPrograms)
    let programToBeToggled = copyOfPrograms.find(program => program.id === action.id)
    // debugger
    programToBeToggled.watchlist = !action.watchlist

    return {...state, programs: copyOfPrograms}

    default:
    return state

  }

}
