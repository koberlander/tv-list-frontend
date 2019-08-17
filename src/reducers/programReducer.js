
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

    case 'TOGGLE_HEART':
    //update the program's state so that watchlist: true
      return

    default:
    return state

  }

}
