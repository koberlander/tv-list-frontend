export default function commentReducer(state = {}, action){

  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.payload]

    default:
      return state
  }
}
