export default function programReducer(state = {programs: []}, action){
//this takes the action object we have dispatched and updates the state in some way

  switch (action.type) {
    case 'FETCH_PROGRAMS':
      return {programs: action.payload}

    default:
    return state

  }

}
