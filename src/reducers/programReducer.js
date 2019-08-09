
export default function programReducer(state = {programs: []}, action){
//this takes the action object we have dispatched and updates the state in some way

  switch (action.type) {
    case 'FETCH_PROGRAMS':
      return {programs: action.payload}

    case 'ADD_PROGRAM':
      return {...state, programs: [...state.programs, action.payload]}

    case 'DELETE_PROGRAM':
      const programs = state.programs.filter(program => program.id !== action.id)
      return {programs}

    default:
    return state

  }

}
