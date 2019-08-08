
export default function programReducer(state = {programs: []}, action){
//this takes the action object we have dispatched and updates the state in some way

  switch (action.type) {
    case 'FETCH_PROGRAMS':
      return {programs: action.payload}

    case 'ADD_PROGRAM' :

    const program = {
      url: action.url,
      name: action.name,
      network: action.network,
      image: action.image
    }

      return {...state, programs: [...state.programs, program]}

    default:
    return state

  }

}
