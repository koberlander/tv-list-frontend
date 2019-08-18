
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
    // first find the particular program that needs to be updated (the id)
    //need to find out how to find properties of action in dev tools or console.log
    console.log('inside TOGGLE_WATCHLIST');
    let programArrayIndex = state.programs.findIndex(program => program.id === action.id)

    //make a copy of state and update watchlist value of a specific program
      return [
        state.programs.slice(0, programArrayIndex),
        action.wachlist,
        state.programs.slice(programArrayIndex + 1)
      ]

    default:
    return state

  }

}
